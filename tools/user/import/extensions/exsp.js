#! /usr/bin/env node

// parse extensiondata.json (structured extension metadata) to generate
// extension compatibility tables

import { promises as fs } from "fs";
import { join } from "path";
import { env, exit as _exit, argv as _argv } from "process";
import parseArgs from "minimist";
import escapeHtml from "escape-html";
import beautify from "js-beautify";

const EDBDOCS_PATH = join(env.HOME, ".edbdocs", "extensions");

const PLATFORM_ORDER = [
  "Virtual/physical server",
  "Kubernetes",
  "CloudService",
];
const PLATFORM_LABELS = {
  "Virtual/physical server": "Virtual Machines/Physical Servers",
  Kubernetes: "Kubernetes",
  CloudService: "EDB Postgres® AI Hybrid Manager",
};
const PRODUCT_ORDER = [
  "PostgreSQL",
  "EDB Postgres Extended Server",
  "EDB Postgres Advanced Server",
];

const CATEGORY_HEADINGS = {
  "Open Source": "Open source extensions",
  EDB: "EDB extensions",
  "EDB-supported open source": "EDB supported open source extensions",
};

const SUB_CATEGORY_HEADINGS = {
  contrib: "PostgreSQL Contrib Extensions/Modules",
  "non-contrib": "PostgreSQL Non-Contrib Extensions/Modules",
};

function subCategoryHeading(subCategory) {
  return SUB_CATEGORY_HEADINGS[subCategory] ?? subCategory;
}

function groupExtensions(extensions) {
  const categories = new Map();
  for (const ext of extensions) {
    if (!categories.has(ext.category)) {
      categories.set(ext.category, new Map());
    }
    const subCategories = categories.get(ext.category);
    const subKey = ext.sub_category ?? null;
    if (!subCategories.has(subKey)) {
      subCategories.set(subKey, []);
    }
    subCategories.get(subKey).push(ext);
  }
  return categories;
}

// CSS for the generated tables. Kept as a single stylesheet (rather than
// inline styles per cell) and emitted once, wrapped the same way other
// pages in this repo embed a <style> block in MDX (see e.g.
// product_docs/docs/warehousepg/*/admin_guide/performance/mem_calc.mdx):
// the template-literal wrapper keeps the CSS braces from being parsed as
// JSX expressions.
const TABLE_STYLES = `
.ext-table {
  border-collapse: collapse;
}
.ext-table thead tr {
  border: solid 1px;
}
.ext-table th,
.ext-table td {
  padding: 2px 3px;
  border: none;
}
.ext-table th {
  font-weight: bold;
  text-align: center;
  vertical-align: bottom;
}
.ext-table td {
  font-weight: bold;
  text-align: center;
}
.ext-table td.et-unbold {
  font-weight: normal;
}
.ext-table td.et-indent {
  padding-left: 1em;
}
.ext-table td.et-align-left {
  text-align: left;
}
.ext-table .et-bt {
  border-top: solid 1px;
}
.ext-table .et-bb {
  border-bottom: solid 1px;
}
.ext-table col.et-col-start {
  border-left: solid 1px;
}
.ext-table col.et-col-end {
  border-right: solid 1px;
}
.ext-table .et-subtitle {
  border: 1px solid;
  text-align: left;
}
.ext-table .et-notes {
  font-style: italic;
  font-weight: normal;
  text-align: left;
  padding-left: 2em;
}
.ext-table .et-yes,
.ext-table .et-no {
  margin: 0;
  font-size: 0;
}
.ext-table .et-yes::before {
  content: "✓";
  font-size: 1rem;
  color: green;
}
.ext-table .et-no::before {
  content: "–";
  font-size: 1rem;
}
`;

function styleBlock() {
  return `\n<style>\n{\`${TABLE_STYLES}\`}\n</style>\n`;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function attrString(attrs) {
  return Object.entries(attrs ?? {})
    .filter(
      ([, value]) => value != undefined && value !== false && value !== "",
    )
    .map(([key, value]) =>
      value === true ? key : `${key}="${escapeHtml(String(value))}"`,
    )
    .join(" ");
}

function el(tag, attrs, content) {
  const attrs_ = attrString(attrs);
  const open = attrs_ ? `<${tag} ${attrs_}>` : `<${tag}>`;
  return `${open}${content ?? ""}</${tag}>`;
}

function voidEl(tag, attrs) {
  const attrs_ = attrString(attrs);
  return attrs_ ? `<${tag} ${attrs_}/>` : `<${tag}/>`;
}

// Vertical (column) borders come from <colgroup> and th/td bold+center+valign
// come from the base .ext-table th/td rules, so only the exceptions to those
// defaults need a class: a data row's closing bottom border and the two data
// columns that aren't bold+centered.
function cellClass({ bottom, unbold, alignLeft, indent }) {
  return classNames(
    bottom && "et-bb",
    unbold && "et-unbold",
    alignLeft && "et-align-left",
    indent && "et-indent",
  );
}

function td(opts, content) {
  return el("td", { class: cellClass(opts) }, content);
}

function th(opts, content) {
  return el(
    "th",
    { class: cellClass(opts), colspan: opts.colspan, rowspan: opts.rowspan },
    content,
  );
}

function headingCell(value, alwaysSplit, opts) {
  const words = value.split(" ");
  const display =
    alwaysSplit || words.length > 2
      ? words.map(escapeHtml).join("<br/>")
      : escapeHtml(value);
  return th(opts, display);
}

const GROUP_HEADER_ROW = el(
  "tr",
  {},
  [
    headingCell("Extension name", false, { rowspan: 2 }),
    headingCell("Requires superuser access", true, { rowspan: 2 }),
    ...PLATFORM_ORDER.map((platform) =>
      th({ colspan: 3 }, escapeHtml(PLATFORM_LABELS[platform])),
    ),
  ].join(""),
);

const COLUMN_HEADER_ROW = el(
  "tr",
  {},
  [
    ...PLATFORM_ORDER.flatMap(() =>
      PRODUCT_ORDER.map((product) => headingCell(product, true, {})),
    ),
  ].join(""),
);

function subtitleRow(heading) {
  return el(
    "tr",
    {},
    el(
      "td",
      { colspan: TOTAL_COLUMNS, class: "et-subtitle" },
      escapeHtml(heading),
    ),
  );
}

function notesRow(notes) {
  return el(
    "tr",
    {},
    el("td", { colspan: TOTAL_COLUMNS, class: "et-notes" }, escapeHtml(notes)),
  );
}

// extensionrefs.json keys extensions by name with spaces turned into
// underscores, and prefixes child extensions with "parent.".
function refKey(name) {
  return name.trim().replaceAll(" ", "_");
}

function composeExtensionRow(ext, lastRow, unmapped) {
  const lookupName = ext.parent_extension
    ? `${refKey(ext.parent_extension)}.${refKey(ext.extension_name)}`
    : refKey(ext.extension_name);

  let url = productToURL[lookupName];
  if (url == undefined) {
    unmapped.push(lookupName);
  }
  if (url == "undefined") {
    // This lets you not set a URL and not get nagged at
    url = undefined;
  }

  const nameText = escapeHtml(ext.extension_name);
  let nameContent =
    url != undefined ? el("a", { href: url }, nameText) : nameText;

  const cells = [
    td(
      {
        bottom: lastRow,
        unbold: true,
        alignLeft: true,
        indent: !!ext.parent_extension,
      },
      nameContent,
    ),
    td({ bottom: lastRow, unbold: true }, ext.requires_superuser ? "Yes" : ""),
  ];

  for (const platform of PLATFORM_ORDER) {
    for (const product of PRODUCT_ORDER) {
      const value = ext.platforms[platform][product];
      let cellValue;
      if (value === true) {
        cellValue = el("p", { class: "et-yes" }, "yes");
      } else if (value === false) {
        cellValue = el("p", { class: "et-no" }, "no");
      } else {
        // e.g. "n/a", or any other descriptive text from the data
        cellValue = escapeHtml(String(value));
      }

      cells.push(td({ bottom: lastRow }, cellValue));
    }
  }

  if (ext.notes) {
    return [el("tr", {}, cells.join("")), notesRow(ext.notes)];
  }

  return [el("tr", {}, cells.join(""))];
}

// Column groups, in display order: extension name, requires-superuser, then
// one group of PRODUCT_ORDER.length columns per platform. Only the first
// column of each group and the very last column of the table need a class
// (colgroup borders draw the vertical dividers between/around the groups).
const COLUMN_GROUP_SIZES = [
  1,
  1,
  ...PLATFORM_ORDER.map(() => PRODUCT_ORDER.length),
];
const TOTAL_COLUMNS = COLUMN_GROUP_SIZES.reduce((sum, size) => sum + size, 0);

const COL_GROUP = el(
  "colgroup",
  {},
  COLUMN_GROUP_SIZES.flatMap((size, groupIndex, sizes) =>
    Array.from({ length: size }, (_, i) => {
      const isFirstOfGroup = i == 0;
      const isLastColumn = groupIndex == sizes.length - 1 && i == size - 1;
      return voidEl("col", {
        class: classNames(
          isFirstOfGroup && "et-col-start",
          isLastColumn && "et-col-end",
        ),
      });
    }),
  ).join(""),
);

function buildSection(category, subCategories, unmapped) {
  const heading = CATEGORY_HEADINGS[category] ?? category;

  const bodyRows = [];
  const subCategoryEntries = [...subCategories.entries()];
  subCategoryEntries.forEach(([subCategory, exts], subCategoryIndex) => {
    if (subCategory) {
      bodyRows.push(subtitleRow(subCategoryHeading(subCategory)));
    }
    const isLastSubCategory = subCategoryIndex == subCategoryEntries.length - 1;
    exts.forEach((ext, index) => {
      bodyRows.push(
        ...composeExtensionRow(
          ext,
          isLastSubCategory && index == exts.length - 1,
          unmapped,
        ),
      );
    });
  });

  const table = el(
    "table",
    {
      class: "ext-table",
      "data-source":
        "This table was generated automatically. Do not edit it directly without first removing this attribute!",
      "data-section": heading,
    },
    COL_GROUP +
      el("thead", {}, GROUP_HEADER_ROW + COLUMN_HEADER_ROW) +
      el("tbody", {}, bodyRows.join("")),
  );

  return `\n\n## ${heading}\n\n${beautify.html(table, { indent_size: 2, wrap_line_length: 0 })}\n`;
}

var productToURL = {};

async function processExtensions() {
  var argv = parseArgs(_argv.slice(2));

  if (argv.source == undefined) {
    console.log("Need --source");
    _exit(1);
  }

  const templateFile = join(argv.source, "index.mdx.in");
  const templateFileContent = (await fs.readFile(templateFile))
    .toString()
    .replace(
      /^---\n/,
      "---\n# This file is generated by exsp.js. Do not edit directly.\n# You probably want to edit one of: index.mdx.in, extensiondata.json, extensionrefs.json\n",
    );

  const extensionsFile = join(argv.source, "extensionrefs.json");
  const extensionsContent = await fs.readFile(extensionsFile);

  const extensionsData = join(argv.source, "extensiondata.json");
  const extensionsDataContent = await fs.readFile(extensionsData);

  productToURL = JSON.parse(extensionsContent);

  const extensions = JSON.parse(extensionsDataContent);

  if (!extensions || extensions.length === 0) {
    console.log("No data found.");
    return;
  }

  const unmapped = [];
  const categories = groupExtensions(extensions);

  const sections = [];
  for (const [category, subCategories] of categories) {
    sections.push(buildSection(category, subCategories, unmapped));
  }

  const outputFile = join(argv.source, "index.mdx");

  await fs.writeFile(
    outputFile,
    [templateFileContent, styleBlock(), ...sections].join(""),
  );

  if (unmapped.length > 0) {
    console.log("Unmapped products - add to extensionrefs.json");
    unmapped.forEach((element) => {
      console.log(`"${element}":"https:",`);
    });
  }
}

await processExtensions();
