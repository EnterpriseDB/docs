#! /usr/bin/env node

// parse extensiondata.json (structured extension metadata) to generate
// extension compatibility tables

import { promises as fs } from "fs";
import { join } from "path";
import { env, exit as _exit, argv as _argv } from "process";
import parseArgs from "minimist";

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

function openSection(currentState, heading) {
  currentState.output.push(`\n\n## ${heading}\n\n`);
  currentState.output.push(
    `<table data-source="This table was generated automatically. Do not edit it directly without first removing this attribute!" data-section="${heading}">\n`,
  );
  currentState.output.push(`<thead>`);
  currentState.output.push(`<tr>`);
  currentState.output.push(
    `<th style="font-weight: bold; vertical-align: middle; border-left: none; border-right: none; border-top: none; border-bottom: none; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px"></th>`,
  );
  currentState.output.push(
    `<th style="font-weight: bold; text-align: center; vertical-align: middle; border-left: none; border-right: none; border-top: none; border-bottom: none; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px"></th>`,
  );
  for (const platform of PLATFORM_ORDER) {
    currentState.output.push(
      `<th rowspan="1" colspan="3" style="font-weight: bold; text-align: center; vertical-align: middle; border-left: solid 1px; border-right: solid 1px; border-top: solid 1px; border-bottom: solid 1px; padding-left: 3px; padding-right: 3px; padding-top: 2px; padding-bottom: 2px">${PLATFORM_LABELS[platform]}</th>`,
    );
  }
  currentState.output.push(`</tr>\n`);

  currentState.output.push(`<tr>`);
  currentState.output.push(
    composeHeading(true, true, false, true, "Extension name", false),
  );
  currentState.output.push(
    composeHeading(true, true, true, true, "Requires superuser access", true),
  );
  PLATFORM_ORDER.forEach(() => {
    PRODUCT_ORDER.forEach((product, productIndex) => {
      currentState.output.push(
        composeHeading(
          productIndex == 0,
          productIndex == PRODUCT_ORDER.length - 1,
          true,
          true,
          product,
          true,
        ),
      );
    });
  });
  currentState.output.push(`</tr>`);
  currentState.output.push(`</thead>`);
  currentState.output.push(`<tbody>`);
}

function closeSection(currentState) {
  currentState.output.push(`</tbody></table>\n`);
}

function composeExtensionRow(ext, lastRow, currentState) {
  let output = [];
  output.push("<tr>");

  const nameKey = ext.extension_name.trim().replaceAll(" ", "_");
  const lookupName = ext.parent_extension
    ? `${ext.parent_extension.trim().replaceAll(" ", "_")}.${nameKey}`
    : nameKey;
  const displayName = ext.parent_extension
    ? "&nbsp;&nbsp;&nbsp;&nbsp;" + ext.extension_name
    : ext.extension_name;

  let url = productToURL[lookupName];
  if (url == undefined) {
    currentState.unmapped.push(lookupName);
  }
  if (url == "undefined") {
    // This lets you not set a URL and not get nagged at
    url = undefined;
  }

  let nameCellValue =
    url != undefined ? `<a href="${url}">${displayName}</a>` : displayName;
  if (ext.notes) {
    nameCellValue += ` (${ext.notes})`;
  }

  output.push(
    composeCell(true, false, false, true, nameCellValue, lastRow, false),
  );
  output.push(
    composeCell(
      true,
      true,
      false,
      true,
      ext.requires_superuser ? "Yes" : "",
      lastRow,
      true,
    ),
  );

  let cellIndex = 0;
  for (const platform of PLATFORM_ORDER) {
    for (const product of PRODUCT_ORDER) {
      const value = ext.platforms[platform][product];
      const left = cellIndex % 3 == 0;
      const right =
        cellIndex == PLATFORM_ORDER.length * PRODUCT_ORDER.length - 1;

      let cellValue;
      if (value === true) {
        cellValue = `<span style="color:green">✓</span>`;
      } else if (value === false || value == "n/a" || value == "") {
        /* Hide n/a from the data (n/a is internal status only) */
        cellValue = `–`;
      } else {
        cellValue = value;
      }

      output.push(
        composeCell(left, right, true, true, cellValue, lastRow, true),
      );
      cellIndex++;
    }
  }

  output.push("</tr>\n");

  return output.join("");
}

function composeHeadingRow(heading) {
  return `<tr><td rowspan="1" colspan="15" style="font-weight: bold; border-left: 1px solid; border-right: 1px solid; border-top: 1px solid; border-bottom: 1px ridge ; padding: 2px 3px;">${heading}</td></tr>\n`;
}

function composeCell(left, right, bold, middleAlign, value, lastRow, centered) {
  return `<td style="${_composeCell(
    left,
    right,
    bold,
    middleAlign,
    false,
    lastRow,
    centered,
    false,
  )}">${value}</td>`;
}

function composeHeading(left, right, bold, middleAlign, value, alwaysSplit) {
  let splitValue = value.split(" ");
  let displayValue = value;
  if (alwaysSplit || splitValue.length > 2) {
    displayValue = splitValue.join("<br/>");
  }

  return `<th style="${_composeCell(
    left,
    right,
    bold,
    middleAlign,
    true,
    true,
    true,
    true,
  )}">${displayValue}</th>`;
}

function _composeCell(
  left,
  right,
  bold,
  middleAlign,
  top,
  bottom,
  centered,
  bottomAlign,
) {
  let options = [];

  if (bold) {
    options.push("font-weight: bold;");
  }
  if (left) {
    options.push("border-left: solid 1px;");
  } else {
    options.push("border-left: none;");
  }
  if (right) {
    options.push("border-right: solid 1px;");
  } else {
    options.push("border-right: none;");
  }
  if (middleAlign) {
    options.push("middle-align: middle;");
  }

  if (top) {
    options.push("border-top: solid 1px;");
  } else {
    options.push("border-top: none;");
  }

  if (bottom) {
    options.push("border-bottom: solid 1px;");
  } else {
    options.push("border-bottom: none;");
  }

  if (centered) {
    options.push("text-align: center;");
  }

  if (bottomAlign) {
    options.push("vertical-align: bottom;");
  }

  options.push(
    "padding-left: 3px; padding-right: 3px;padding-top: 2px; padding-bottom: 2px; ",
  );

  return options.join(" ");
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

  var currentState = {
    output: [templateFileContent],
    unmapped: [],
  };

  const categories = groupExtensions(extensions);

  for (const [category, subCategories] of categories) {
    openSection(currentState, CATEGORY_HEADINGS[category] ?? category);

    const subCategoryEntries = [...subCategories.entries()];
    subCategoryEntries.forEach(([subCategory, exts], subCategoryIndex) => {
      if (subCategory) {
        currentState.output.push(
          composeHeadingRow(subCategoryHeading(subCategory)),
        );
      }
      const isLastSubCategory =
        subCategoryIndex == subCategoryEntries.length - 1;
      exts.forEach((ext, index) => {
        currentState.output.push(
          composeExtensionRow(
            ext,
            isLastSubCategory && index == exts.length - 1,
            currentState,
          ),
        );
      });
    });

    closeSection(currentState);
  }

  const outputFile = join(argv.source, "index.mdx");

  await fs.writeFile(outputFile, currentState.output.join(""));

  if (currentState.unmapped.length > 0) {
    console.log("Unmapped products - add to extensionrefs.json");
    currentState.unmapped.forEach((element) => {
      console.log(`"${element}":"https:",`);
    });
  }
}

await processExtensions();
