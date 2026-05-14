// Convert an upstream cloud-native-postgres release notes markdown file
// (e.g. `docs/src/release_notes/v1.29.md` from EnterpriseDB/cloud-native-postgres)
// into a YAML release-notes file under
// `product_docs/docs/postgres_for_kubernetes/1/rel_notes/src/`.
//
// Each input markdown file holds multiple `## Version X.Y.Z` sections. This
// processor extracts the FIRST (topmost) section and emits a single
// `${version}_rel_notes.yml` next to the input — invoke once per minor
// version markdown file when a new patch release lands.
//
// Heuristics:
//   - Section "Important changes"      -> emitted under `highlights:`
//   - Items with multiple paragraphs   -> emitted under `highlights:`
//                                         (the upstream uses indented
//                                         continuation paragraphs only for
//                                         flagship/CVE-grade entries)
//   - Bolded `**Title**: body` items   -> title from bold, details from body
//   - Plain items                      -> first sentence is the title,
//                                         remainder is details
//   - `[#NNNN](url)` trailing refs     -> `addresses:` (as <a> tags)
//   - Sub-items under a parent like
//     "`cnp` plugin:"                  -> flattened, with `component: CNP plugin`
//   - `../foo.md` / `../foo.md#anchor` -> rewritten to `../foo/` / `../foo/#anchor`
//
// LTS minors (currently 1.25.x, and any minor whose section contains an
// "End-of-Life" admonition) get the LTS intro template and
// `upstream-merge: None`.

import unified from "unified";
import remarkParse from "remark-parse";
import mdastToString from "mdast-util-to-string";

const SECTION_TYPE_MAP = {
  features: "Feature",
  feature: "Feature",
  enhancements: "Enhancement",
  enhancement: "Enhancement",
  "technical enhancements": "Enhancement",
  changes: "Change",
  change: "Change",
  security: "Security",
  "security and supply chain": "Security",
  fixes: "Bug Fix",
  "bug fixes": "Bug Fix",
};

const SKIP_SECTIONS = new Set(["supported versions"]);
const HIGHLIGHT_SECTION_NAMES = new Set(["important changes"]);
const LTS_MINORS = new Set(["1.25"]);

const MONTH_FULL = {
  jan: "January", feb: "February", mar: "March", apr: "April",
  may: "May", jun: "June", jul: "July", aug: "August",
  sep: "September", oct: "October", nov: "November", dec: "December",
};

const SCHEMA_URL =
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/develop/tools/automation/generators/relgen/relnote-schema.json";
const COL_WIDTH = 78;

// Only operate on inputs that match `<base_dir>/release_notes/vN.NN.md`.
// Anything else (other markdown files passed through the same glob, the
// upstream `release_notes/old/` archive, etc.) is left untouched.
const INPUT_PATH_RE = /^(.*?)\/release_notes\/v\d+\.\d+\.md$/;

export const process = async (filename, content) => {
  const m = filename.match(INPUT_PATH_RE);
  if (!m) return { newFilename: filename, newContent: content };

  const baseDir = m[1];

  const tree = unified().use(remarkParse).parse(content);
  const versions = extractVersionSections(tree);

  if (!versions.length) {
    return { newFilename: filename, newContent: content };
  }

  const latest = versions[0];

  return {
    newFilename: `${baseDir}/rel_notes/src/${latest.version}_rel_notes.yml`,
    newContent: buildYaml(latest),
    stopProcessing: true, // don't run any more processors on the emitted YAML file
  };
};

// --- AST walk -------------------------------------------------------------

function extractVersionSections(tree) {
  const versions = [];
  let current = null;
  let subsection = null;

  for (const node of tree.children) {
    if (node.type === "heading" && node.depth === 2) {
      const m = mdastToString(node).match(/^Version\s+(\d+\.\d+\.\d+)/);
      if (m) {
        current = {
          version: m[1],
          date: null,
          hasEolWarning: false,
          subsections: [],
        };
        subsection = null;
        versions.push(current);
        continue;
      }
    }

    if (!current) continue;

    if (node.type === "heading" && node.depth === 3) {
      subsection = { name: mdastToString(node).toLowerCase().trim(), items: [] };
      current.subsections.push(subsection);
      continue;
    }

    if (!subsection) {
      // Preamble between "## Version X.Y.Z" and the first "### Section".
      const text = mdastToString(node);
      const dateMatch =
        node.type === "paragraph" && text.match(/Release date:\s*([^\n]+)/i);
      if (dateMatch) current.date = parseDate(dateMatch[1]);
      if (/End[-\s]of[-\s]Life|\bEOL\b/i.test(text)) current.hasEolWarning = true;
      continue;
    }

    if (node.type === "list") {
      for (const li of node.children) {
        subsection.items.push(parseListItem(li));
      }
    }
  }

  return versions;
}

function parseListItem(item) {
  const paragraphs = [];
  const subItems = [];

  for (const child of item.children) {
    if (child.type === "paragraph") paragraphs.push(child);
    else if (child.type === "list") {
      for (const sub of child.children) subItems.push(parseListItem(sub));
    }
  }

  return {
    paragraphTexts: paragraphs.map(paragraphToMarkdown),
    subItems,
    multiParagraph: paragraphs.length > 1,
  };
}

// --- mdast -> markdown ----------------------------------------------------

function paragraphToMarkdown(node) {
  return node.children.map(inlineToMarkdown).join("");
}

function inlineToMarkdown(node) {
  switch (node.type) {
    case "text":
      return node.value;
    case "inlineCode":
      return "`" + node.value + "`";
    case "strong":
      return "**" + node.children.map(inlineToMarkdown).join("") + "**";
    case "emphasis":
      return "*" + node.children.map(inlineToMarkdown).join("") + "*";
    case "link": {
      const label = node.children.map(inlineToMarkdown).join("");
      return `[${label}](${normalizeLink(node.url)})`;
    }
    case "break":
      return " ";
    case "html":
      // Strip HTML comments (used upstream as backport markers like
      // `<!-- 1.29 1.28 1.25 -->`); pass any other HTML through.
      return node.value.replace(/<!--[\s\S]*?-->/g, "");
    default:
      return mdastToString(node);
  }
}

function normalizeLink(url) {
  // Upstream markdown uses `../monitoring.md#anchor`; EDB docs render those
  // pages without the `.md` extension and as a directory path.
  if (/^https?:\/\//i.test(url)) return url;
  return url.replace(/\.md(#)/, "/$1").replace(/\.md$/, "/");
}

// --- field extraction -----------------------------------------------------

function extractAddresses(text) {
  // Trailing parenthesised reference block, e.g.:
  //   ([#10054](url), [#10062](url))
  //   ([`GHSA-...`](url))
  const m = text.match(/\s*\(((?:\s*\[[^\]]+\]\([^)]+\)[\s,]*)+)\)\s*$/);
  if (!m) return { textWithoutRefs: text.trim(), addresses: [] };

  const addresses = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lm;
  while ((lm = linkRe.exec(m[1])) !== null) {
    addresses.push({
      label: lm[1].replace(/^`(.+)`$/, "$1"),
      url: lm[2],
    });
  }

  return {
    textWithoutRefs: text.slice(0, m.index).trim(),
    addresses,
  };
}

function splitTitleAndDetails(text) {
  // **Title**: body  -> title from bold, details from body
  const bold = text.match(/^\*\*([\s\S]+?)\*\*\s*:?\s*([\s\S]*)$/);
  if (bold) {
    return {
      title: bold[1].replace(/\s+/g, " ").trim(),
      details: bold[2].trim(),
    };
  }
  // Otherwise split at the first sentence boundary.
  const sentence = text.match(/^([\s\S]+?[.!?])\s+([A-Z][\s\S]+)$/);
  if (sentence) {
    return { title: sentence[1].trim(), details: sentence[2].trim() };
  }
  return { title: text.trim(), details: "" };
}

function parseDate(raw) {
  const m = raw.match(/(\w+)\s+(\d+),\s+(\d{4})/);
  if (!m) return raw.trim();
  const month = MONTH_FULL[m[1].slice(0, 3).toLowerCase()] || m[1];
  return `${parseInt(m[2], 10)} ${month} ${m[3]}`;
}

// --- YAML emission --------------------------------------------------------

function buildYaml(version) {
  const minor = version.version.split(".").slice(0, 2).join(".");
  const lts = version.hasEolWarning || LTS_MINORS.has(minor);

  const out = [];
  out.push(`# yaml-language-server: $schema=${SCHEMA_URL}`);
  out.push("product: EDB CloudNativePG Cluster");
  out.push(`version: ${version.version}`);
  out.push(`date: ${version.date || ""}`);

  emitIntro(out, minor, lts);
  emitComponents(out, version.version, minor, lts);

  const { highlights, relnotes } = partitionItems(version);

  if (highlights.length) {
    out.push("highlights: |");
    const text = highlights.map(formatHighlight).join("\n\n");
    for (const line of text.split("\n")) {
      out.push(line === "" ? "" : "  " + line);
    }
  }

  out.push("relnotes:");
  for (const entry of relnotes) emitRelnote(entry, out);

  return out.join("\n") + "\n";
}

function emitIntro(out, minor, lts) {
  if (lts) {
    out.push("intro: |");
    out.push(
      ` This release of EDB CloudNativePG Cluster is part of the LTS series for ${minor}.x.`,
    );
    out.push(
      ` EDB will continue providing LTS releases in the ${minor}.x series according to our [Long-Term Support`,
    );
    out.push(" policy](/postgres_for_kubernetes/1/#long-term-support).");
    out.push("");
    out.push(
      ` !!! Warning EDB CloudNativePG Cluster ${minor} approaches End-of-Life.`,
    );
    out.push("");
    out.push(" Users are encouraged to start planning their upgrade to a newer minor");
    out.push(" version before that date.");
    out.push("");
    out.push(" !!!");
    out.push("");
    out.push(" This release of EDB CloudNativePG Cluster includes the following:");
  } else {
    out.push("intro: |");
    out.push(
      "  This release of EDB Postgres® AI for CloudNativePG™ Cluster includes the following:",
    );
  }
}

function emitComponents(out, version, minor, lts) {
  out.push("components:");
  out.push(`  "Operator": ${version}`);
  out.push(`  "CNP plugin": ${version}`);
  if (lts) {
    out.push("  upstream-merge: None");
  } else {
    out.push(
      `  upstream-merge: Upstream [${version}](https://cloudnative-pg.io/docs/${minor}/release_notes/v${minor}/)`,
    );
  }
}

function partitionItems(version) {
  const highlights = [];
  const relnotes = [];

  for (const section of version.subsections) {
    if (SKIP_SECTIONS.has(section.name)) continue;

    const sectionType = SECTION_TYPE_MAP[section.name] || "Change";
    const sectionIsHighlight = HIGHLIGHT_SECTION_NAMES.has(section.name);

    for (const item of section.items) {
      if (sectionIsHighlight || item.multiParagraph) {
        highlights.push(item);
        continue;
      }

      if (item.subItems.length && item.paragraphTexts.length) {
        const parent = item.paragraphTexts[0];
        const component = /cnp\s*plugin/i.test(parent) ? "CNP plugin" : null;
        for (const sub of item.subItems) {
          relnotes.push({ ...sub, type: sectionType, component });
        }
      } else {
        relnotes.push({ ...item, type: sectionType });
      }
    }
  }

  return { highlights, relnotes };
}

function formatHighlight(item) {
  return item.paragraphTexts
    .map((p) => wrapText(p, COL_WIDTH))
    .join("\n\n");
}

function emitRelnote(entry, out) {
  const first = entry.paragraphTexts[0] || "";
  const rest = entry.paragraphTexts.slice(1);

  const { textWithoutRefs, addresses } = extractAddresses(first);
  const { title, details } = splitTitleAndDetails(textWithoutRefs);

  const detailsBlock = [details, ...rest].filter(Boolean).join("\n\n");

  out.push("- relnote: |");
  for (const ln of wrapText(title, COL_WIDTH).split("\n")) out.push("    " + ln);

  if (detailsBlock) {
    out.push("  details: |");
    for (const ln of wrapText(detailsBlock, COL_WIDTH).split("\n")) {
      out.push(ln === "" ? "" : "    " + ln);
    }
  }

  out.push("  jira:");
  if (entry.component) out.push(`  component: ${entry.component}`);

  if (addresses.length) {
    const refs = addresses
      .map((a) => `<a href="${a.url}">${a.label}</a>`)
      .join(", ");
    out.push(`  addresses: ${refs}`);
  } else {
    out.push("  addresses:");
  }

  out.push(`  type: ${entry.type}`);
  out.push("  impact: High");
  out.push("");
}

// --- text wrapping --------------------------------------------------------

function wrapText(text, width) {
  return text
    .split(/\n\n+/)
    .map((p) => wrapParagraph(p, width))
    .join("\n\n");
}

function wrapParagraph(text, width) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  if (!words[0]) return "";

  const lines = [];
  let line = words[0];
  for (let i = 1; i < words.length; i++) {
    if (line.length + 1 + words[i].length <= width) {
      line += " " + words[i];
    } else {
      lines.push(line);
      line = words[i];
    }
  }
  lines.push(line);
  return lines.join("\n");
}
