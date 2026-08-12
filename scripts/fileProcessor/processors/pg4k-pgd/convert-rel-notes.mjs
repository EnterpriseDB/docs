// Convert the upstream EDB Postgres Distributed for Kubernetes (PGD4K)
// `docs/src/release_notes.md` file into per-version YAML release-notes files
// under `<base_dir>/rel_notes/src/`, plus the `meta.yml` index descriptor.
//
// Unlike the cnp processor (which emits the single topmost version from a
// per-minor markdown file), PGD4K keeps the entire release history in one
// `release_notes.md`. This processor walks every `## Version X.Y.Z` section and
// writes one `${version}_rel_notes.yml` per version directly to disk, then
// returns the generated `meta.yml` as the processor result. The full set is
// regenerated on every run, so there is no `precursor:` list in meta.yml —
// every release that should appear has its own YAML file.
//
// Heuristics (per version):
//   - "**Release date:**" / "*Release date:*"  -> `date:` (normalized to
//                                                 `D Month YYYY`)
//   - Emphasized preamble bullets (`- *Title:* body`) and any `### Highlights`
//     section                                   -> `## Highlights` in `intro:`
//   - `### Supported Versions` (or a "Supported versions:" preamble heading)
//                                               -> `## Supported versions` /
//                                                  `## Default images` in `intro:`
//   - `### Features` / `### Fixes` / `### Security` / ...  -> `relnotes:` entries
//     (section name maps to `type:`)
//   - List items shaped `Title: body`           -> `relnote:` (title) + `details:`
//   - Trailing `(#NNNN)` / `(#NNNN, #MMMM)`     -> `addresses:`
//   - Plain preamble bullets (no section)       -> `relnotes:` as `Feature`

import fs from "fs/promises";
import yaml from "js-yaml";
import unified from "unified";
import remarkParse from "remark-parse";
import mdastToString from "mdast-util-to-string";

const PRODUCT = "EDB Postgres® AI for CloudNativePG™ Global Cluster";

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
  "bug fix": "Bug Fix",
};

const MONTH_FULL = {
  jan: "January", feb: "February", mar: "March", apr: "April",
  may: "May", jun: "June", jul: "July", aug: "August",
  sep: "September", oct: "October", nov: "November", dec: "December",
};

const SCHEMA_BASE =
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/develop/tools/automation/generators/relgen";
const RELNOTE_SCHEMA_URL = `${SCHEMA_BASE}/relnote-schema.json`;
const META_SCHEMA_URL =
  "https://raw.githubusercontent.com/EnterpriseDB/docs/develop/tools/automation/generators/relgen/meta-schema.json";
const COL_WIDTH = 78;

// Only operate on `<base_dir>/release_notes.md`.
const INPUT_PATH_RE = /^(.*?)\/release_notes\.md$/;

export const process = async (filename, content) => {
  const m = filename.match(INPUT_PATH_RE);
  if (!m) return { newFilename: filename, newContent: content };

  const baseDir = m[1];
  const outDir = `${baseDir}/rel_notes/src`;

  const tree = unified().use(remarkParse).parse(content);
  const versions = extractVersionSections(tree);

  if (!versions.length) {
    return { newFilename: filename, newContent: content };
  }

  // Write one YAML file per version directly. main.mjs only writes the single
  // returned file, so the per-version files are emitted here ourselves.
  await fs.mkdir(outDir, { recursive: true });
  await Promise.all(
    versions.map((version) =>
      fs.writeFile(`${outDir}/${version.version}_rel_notes.yml`, buildYaml(version)),
    ),
  );

  return {
    newFilename: `${outDir}/meta.yml`,
    newContent: buildMeta(),
    stopProcessing: true, // don't run any more processors on the emitted YAML
  };
};

// --- AST walk -------------------------------------------------------------

function extractVersionSections(tree) {
  const versions = [];
  let current = null;
  let section = null; // null === preamble

  for (const node of tree.children) {
    if (node.type === "heading" && node.depth === 2) {
      const vm = mdastToString(node).match(/^Version\s+(\d+\.\d+\.\d+)/);
      if (vm) {
        current = {
          version: vm[1],
          date: null,
          introProse: [],
          highlightBullets: [],
          highlightProse: [],
          supportedItems: [],
          relnotes: [], // { type, title, details, addresses }
        };
        section = null;
        versions.push(current);
        continue;
      }
    }

    if (!current) continue;

    if (node.type === "heading" && node.depth === 3) {
      section = classifySection(mdastToString(node));
      continue;
    }

    if (!section) {
      // Preamble between "## Version X.Y.Z" and the first "### Section".
      if (node.type === "paragraph") {
        const text = mdastToString(node);
        const dateMatch = text.match(/Release date:\s*([^\n]+)/i);
        if (dateMatch) {
          current.date = parseDate(dateMatch[1]);
          continue;
        }
        // A bare "Features:" / "Supported versions:" paragraph acts as a
        // section heading in the older, looser entries.
        const pseudo = classifyPseudoHeading(text);
        if (pseudo) {
          section = pseudo;
          continue;
        }
        // Descriptive narrative (e.g. the v1.0.0 introduction) - preserved in
        // `intro:`. Only the earliest releases carry preamble prose, so this is
        // a no-op for versions that lead straight into bullets/sections.
        current.introProse.push(paragraphToMarkdown(node));
        continue;
      }
      if (node.type === "list") {
        for (const li of node.children) {
          const item = parseListItem(li);
          if (isHighlightBullet(item)) {
            current.highlightBullets.push(item.paragraphTexts[0]);
          } else {
            addRelnote(current, "Feature", item);
          }
        }
      }
      continue;
    }

    if (section.kind === "skip") continue;

    if (section.kind === "highlights") {
      if (node.type === "paragraph") {
        current.highlightProse.push(paragraphToMarkdown(node));
      } else if (node.type === "list") {
        for (const li of node.children) {
          current.highlightBullets.push(parseListItem(li).paragraphTexts[0]);
        }
      }
      continue;
    }

    if (section.kind === "supported") {
      if (node.type === "list") {
        for (const li of node.children) current.supportedItems.push(parseListItem(li));
      }
      continue;
    }

    if (section.kind === "relnotes" && node.type === "list") {
      for (const li of node.children) {
        addRelnote(current, section.type, parseListItem(li));
      }
    }
  }

  return versions;
}

function classifySection(rawName) {
  const name = rawName.toLowerCase().replace(/:$/, "").trim();
  if (name === "supported versions") return { kind: "supported" };
  if (name === "highlights") return { kind: "highlights" };
  const type = SECTION_TYPE_MAP[name];
  if (type) return { kind: "relnotes", type };
  return { kind: "skip" };
}

function classifyPseudoHeading(text) {
  const m = text.trim().match(/^([A-Za-z][A-Za-z ]+?):?$/);
  if (!m) return null;
  return classifySection(m[1]);
}

function parseListItem(item) {
  const paragraphs = [];
  const subItems = [];

  for (const child of item.children) {
    if (child.type === "paragraph") paragraphs.push(paragraphToMarkdown(child));
    else if (child.type === "list") {
      for (const sub of child.children) subItems.push(parseListItem(sub));
    }
  }

  return { paragraphTexts: paragraphs, subItems };
}

function isHighlightBullet(item) {
  const text = item.paragraphTexts[0] || "";
  // Leads with an emphasized/strong run, e.g. "*New PGD Version Support:* ..."
  // (colon inside the emphasis) or "**Title:** ...".
  return /^\*\*?[^*]+\*\*?/.test(text);
}

function addRelnote(version, type, item) {
  const combined = item.paragraphTexts.join("\n\n");
  const { textWithoutRefs, addresses } = extractAddresses(combined);
  const { title, details } = splitTitleAndDetails(textWithoutRefs);
  version.relnotes.push({ type, title, details, addresses });
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
      return node.value.replace(/<!--[\s\S]*?-->/g, "");
    default:
      return mdastToString(node);
  }
}

function normalizeLink(url) {
  if (/^https?:\/\//i.test(url)) return url;
  return url.replace(/\.md(#)/, "/$1").replace(/\.md$/, "/");
}

// --- field extraction -----------------------------------------------------

function extractAddresses(text) {
  // Plain `(#NNNN)`, `(#NNNN, #MMMM)`, `(#NNNN,#MMMM)` or several adjacent
  // groups like `(#1617) (#1643)`.
  const re = /\(\s*(#\d+(?:\s*,\s*#\d+)*)\s*\)/g;
  const numbers = [];
  let cleaned = text;
  let m;
  while ((m = re.exec(text)) !== null) {
    for (const n of m[1].split(/\s*,\s*/)) numbers.push(n.trim());
  }
  if (numbers.length) {
    cleaned = text.replace(re, "").replace(/\s+([.;,])/g, "$1").trim();
  }
  return { textWithoutRefs: cleaned, addresses: numbers.join(", ") };
}

function splitTitleAndDetails(text) {
  const trimmed = text.replace(/\s+/g, " ").trim();
  // `Title: body` -> title from the part before the first colon, when that part
  // is short and isn't itself a full sentence.
  const m = trimmed.match(/^(.{1,80}?):\s+([\s\S]+)$/);
  if (m && !/[.!?]$/.test(m[1]) && !m[1].includes("`")) {
    return { title: m[1].trim(), details: m[2].trim() };
  }
  return { title: trimmed, details: "" };
}

function parseDate(raw) {
  const m = raw.trim().match(/(\d+)\s+(\w+)\.?,?\s+(\d{4})/);
  if (!m) return raw.trim();
  const month = MONTH_FULL[m[2].slice(0, 3).toLowerCase()] || m[2];
  return `${parseInt(m[1], 10)} ${month} ${m[3]}`;
}

// --- YAML emission --------------------------------------------------------

// js-yaml handles all quoting, escaping and block-scalar formatting; we just
// build a plain object and let it serialize. The schema comment is prepended
// separately since dump() can't emit it.
const DUMP_OPTS = { lineWidth: -1, noCompatMode: true, styles: { '!!null': "empty" } };

function buildYaml(version) {
  const doc = {
    product: PRODUCT,
    version: version.version,
    date: version.date || "",
    intro: buildIntro(version),
    relnotes: version.relnotes.map(toRelnote),
  };
  return `# yaml-language-server: $schema=${RELNOTE_SCHEMA_URL}\n${yaml.dump(doc, DUMP_OPTS)}`;
}

function toRelnote(entry) {
  const note = { relnote: entry.title };
  if (entry.details) note.details = wrapText(entry.details, COL_WIDTH);
  note.jira = null;
  if (entry.addresses) note.addresses = entry.addresses;
  note.type = entry.type;
  note.impact = "High";
  return note;
}

function buildIntro(version) {
  const lines = [];

  for (const prose of version.introProse) {
    for (const ln of wrapText(prose, COL_WIDTH).split("\n")) lines.push(ln);
    lines.push("");
  }

  if (version.highlightProse.length || version.highlightBullets.length) {
    lines.push("## Highlights", "");
    for (const prose of version.highlightProse) {
      for (const ln of wrapText(prose, COL_WIDTH).split("\n")) lines.push(ln);
      lines.push("");
    }
    for (const bullet of version.highlightBullets) lines.push(`- ${oneLine(bullet)}`);
    lines.push("");
  }

  const { supportedLines, imageLines } = renderSupported(version.supportedItems);

  if (supportedLines.length) {
    lines.push("## Supported versions", "");
    lines.push(...supportedLines);
    lines.push("");
  }

  if (imageLines.length) {
    lines.push("## Default images", "");
    lines.push(...imageLines);
    lines.push("");
  }

  lines.push(`This release of ${PRODUCT} includes the following:`);

  // Collapse runs of blank lines and trim surrounding blanks.
  const collapsed = [];
  for (const ln of lines) {
    if (ln === "" && collapsed[collapsed.length - 1] === "") continue;
    collapsed.push(ln);
  }
  while (collapsed[0] === "") collapsed.shift();
  while (collapsed[collapsed.length - 1] === "") collapsed.pop();
  return collapsed.join("\n") + "\n";
}

function oneLine(s) {
  return s.replace(/\s+/g, " ").trim();
}

function renderSupported(items) {
  const supportedLines = [];
  const imageLines = [];

  for (const item of items) {
    const text = oneLine(item.paragraphTexts[0] || "");

    if (/default.*images?/i.test(text) && item.subItems.length) {
      for (const sub of item.subItems) {
        const t = oneLine(sub.paragraphTexts[0] || "");
        const im = t.match(/^(.*?):\s*(.+)$/);
        if (im) {
          const label = /proxy/i.test(im[1]) ? "PGD proxy" : "PGD";
          imageLines.push(`- ${label}: \`${im[2].trim()}\``);
        } else {
          imageLines.push(`- \`${t}\``);
        }
      }
      continue;
    }

    // Drop the redundant "versions"/"version" word before the colon.
    supportedLines.push(`- ${text.replace(/\s+versions?\s*:/i, ":")}`);
    for (const sub of item.subItems) {
      supportedLines.push("", `  ${oneLine(sub.paragraphTexts[0] || "")}`);
    }
    if (item.subItems.length) supportedLines.push("");
  }

  return { supportedLines, imageLines };
}

function buildMeta() {
  return `# yaml-language-server: $schema=${META_SCHEMA_URL}
product: ${PRODUCT}
shortname: ""
title: ${PRODUCT} release notes
description: Release notes for ${PRODUCT}
intro: |
  The EDB Postgres Distributed for Kubernetes documentation describes the major version of EDB Postgres Distributed for Kubernetes,
  including minor releases and patches. The release notes provide information on what is new in each release. For new functionality
  introduced in a minor or patch release, the content also indicates the release that introduced the feature.
frontmatter:
  redirects:
    - ../release_notes
columns:
- 0:
  label: "Version"
  key: version-link
- 1:
  label: Release date
  key: shortdate
`;
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
