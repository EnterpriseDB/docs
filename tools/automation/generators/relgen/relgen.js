#! /usr/bin/env node

// Parse the yaml in the relnotetester.yml file and return the data

import {
  readFileSync,
  readdirSync,
  writeFileSync,
  appendFileSync,
  existsSync,
} from "fs";
import core from "@actions/core";
import { load } from "js-yaml";
import SourceMap from "js-yaml-source-map";
import Ajv from "ajv";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import path from "path";
import { micromark } from "micromark";
import { exit } from "process";

let ghCore = core;

if (!process.env.GITHUB_REF) {
  ghCore = {
    getInput: (key) => undefined,
    summary: {
      addRaw: (markup) => {
        console.log(markup);
      },
      write: () => {},
      stringify: () => {},
    },
    setFailed: (message) => {
      console.error(message);
    },
    error: (message, properties = {}) => {
      console.error(
        "⚠️⚠️  " +
          formatErrorPath(
            properties.file,
            properties.startLine,
            properties.startColumn,
          ) +
          "\n\t" +
          message,
      );
    },
    warning: (message, properties = {}) => {
      console.warn(
        "⚠️   " +
          formatErrorPath(
            properties.file,
            properties.startLine,
            properties.startColumn,
          ) +
          "\n\t" +
          message,
      );
    },
    notice: (message, properties = {}) => {
      console.log(
        formatErrorPath(
          properties.file,
          properties.startLine,
          properties.startColumn,
        ) +
          "\n\t" +
          message,
      );
    },
  };

  function formatErrorPath(filePath, line, column) {
    return filePath
      ? `${path.relative(docsBase, filePath)}:${line}:${column}`
      : "";
  }
}

let argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 -p <path>")
  .option("p", {
    alias: "path",
    describe:
      "The path to the relnotes directory (should contain a src directory - see schema-readme.md)",
    type: "string",
    demandOption: true,
    default: ".",
  })
  .check((argv) => {
    const metapath = path.resolve(path.join(argv.path, "src", "meta.yml"));
    if (!existsSync(metapath)) throw new Error("Can't find " + metapath);
    return true;
  })
  .parse();

function converter(markdown) {
  return micromark(markdown);
}

function error_and_exit(message) {
  ghCore.setFailed(`Error: ${message}`);
  process.exit(1);
}

function normalizeType(type) {
  switch (type) {
    case "Feature":
    case "Features":
      return "Feature";
    case "Enhancement":
    case "Enhancements":
      return "Enhancement";
    case "Security":
    case "Security Fixes":
      return "Security";
    case "Bug Fix":
    case "Bug Fixes":
    case "Bug-fix":
    case "Bug-fixes":
    case "Bug fix":
      return "Bug Fix";
    case "Change":
      return "Change";
    case "Deprecation":
    case "Obsolete":
      return "Deprecation";
    case "Other":
    default:
      return "Other";
  }
}

function titles(type) {
  switch (type) {
    case "Feature":
      return "Features";
    case "Enhancement":
      return "Enhancements";
    case "Security":
      return "Security Fixes";
    case "Change":
      return "Changes";
    case "Bug Fix":
      return "Bug Fixes";
    case "Deprecation":
      return "Deprecations";
    case "Other":
      return "Other";
  }
}

const loadWithSchema = (() => {
  const ajv = new Ajv({ allErrors: true });
  const validators = {};

  return (yamlFile, schemaFile) => {
    let validator = validators[schemaFile];
    if (!validator) {
      const schema = JSON.parse(
        readFileSync(path.join(import.meta.dirname, schemaFile)),
      );
      validator = validators[schemaFile] = ajv.compile(schema);
    }

    const sourceMap = new SourceMap();
    let result = load(readFileSync(yamlFile, "utf8"), {
      listener: sourceMap.listen(),
    });
    if (!validator(result)) {
      for (let error of validator.errors) {
        let yamlPath = error.instancePath.split("/");
        let targetProp = yamlPath.at(-1);
        let loc = null;
        while (!loc && yamlPath.length) {
          loc = sourceMap.lookup(yamlPath.join("."));
          yamlPath.pop();
        }
        ghCore.warning(`${targetProp}: ${error.message}`, {
          file: path.relative(docsBase, yamlFile),
          startLine: loc?.line,
          startColumn: loc?.column,
        });
      }
    }
    return result;
  };
})();

let basedir = false;
let basepath = argv.path;
const docsBase = basepath.split(/product_docs|advocacy_docs/)[0];

// Open the src/meta.yml file and parse it.
const metaFilename = path.join(basepath, "src/meta.yml");
let meta = loadWithSchema(metaFilename, "meta-schema.json");

// Now we scan the other files in src, on this pass, acquiring the meta data

let files = readdirSync(path.join(basepath, "src"), { withFileTypes: true })
  .filter((dirent) => {
    return (
      dirent.isFile() &&
      dirent.name !== "meta.yml" &&
      dirent.name.endsWith(".yml")
    );
  })
  .map((dirent) => dirent.name);

let relnotes = new Map();

for (let i = 0; i < files.length; i++) {
  let file = files[i];
  let relnote = loadWithSchema(
    path.join(basepath, "src", file),
    "relnote-schema.json",
  );
  relnotes.set(file, relnote);
}

function compareDates(dateStr1, dateStr2) {
  const months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split(" ");
    return new Date(year, months[month], day);
  };

  const date1 = parseDate(dateStr1);
  const date2 = parseDate(dateStr2);

  if (date1 < date2) {
    return -1; // date1 is earlier
  } else if (date1 > date2) {
    return 1; // date1 is later
  } else {
    return 0; // dates are the same
  }
}

// Iterate over the relnotes in descending date order
relnotes[Symbol.iterator] = function* () {
  yield* [...relnotes.entries()].sort((a, b) =>
    compareDates(b[1].date, a[1].date),
  );
};

function makeRelnotefilename(shortname, version) {
  return `${shortname}_${version}_rel_notes`;
}

function makeShortDate(date) {
  const months = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };

  const valid_short_months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let [day, month, year] = date.split(" ");
  if (month in valid_short_months) {
    return `${day} ${month} ${year}`;
  }
  let shortmonth = months[month];
  if (shortmonth === undefined) {
    throw new Error(`Invalid month: ${month}`);
  }
  return `${day.toString().padStart(2, "0")} ${shortmonth} ${year}`;
}

let relindexfilename = path.join(basepath, "index.mdx"); // Use this to write the file
let err = writeFileSync(relindexfilename, "");
if (err) {
  error_and_exit(`Error writing ${relindexfilename}`);
}

console.log(`Writing ${relindexfilename}`);

appendFileSync(relindexfilename, "---\n");
appendFileSync(relindexfilename, `title: ${meta.title}\n`);
appendFileSync(relindexfilename, `navTitle: Release notes\n`);
appendFileSync(relindexfilename, `description: ${meta.description}\n`);
appendFileSync(relindexfilename, `indexCards: none\n`);
appendFileSync(relindexfilename, `navigation:\n`);

for (let [file, relnote] of relnotes) {
  appendFileSync(
    relindexfilename,
    `  - ${makeRelnotefilename(meta.shortname, relnote.version)}\n`,
  );
}
if (meta.precursor !== undefined) {
  for (let prec of meta.precursor) {
    appendFileSync(
      relindexfilename,
      `  - ${makeRelnotefilename(meta.shortname, prec.version)}\n`,
    );
  }
}

appendFileSync(relindexfilename, "---\n");
appendFileSync(relindexfilename, "\n\n");

appendFileSync(relindexfilename, `${meta.intro}`);
appendFileSync(relindexfilename, "\n\n");

// Before we process the table, is there a column definition. If not, we'll use a default
if (meta.columns == undefined) {
  meta.columns = [
    { label: "Version", key: "version-link" },
    { label: "Release Date", key: "shortdate" },
  ];
}

let headers = "|";
let headers2 = "|";
for (let i = 0; i < meta.columns.length; i++) {
  headers += ` ${meta.columns[i].label} |`;
  headers2 += `---|`;
}

appendFileSync(relindexfilename, headers + "\n");
appendFileSync(relindexfilename, headers2 + "\n");

for (let [file, relnote] of relnotes) {
  let line = "|";
  for (let i = 0; i < meta.columns.length; i++) {
    let col = meta.columns[i];
    switch (col.key) {
      case "version-link":
        line += ` [${relnote.version}](./${makeRelnotefilename(meta.shortname, relnote.version)}) |`;
        break;
      case "shortdate":
        try {
          let shortdate = makeShortDate(relnote.date);
          line += ` ${shortdate} |`;
        } catch (e) {
          error_and_exit(`${file}: ${e}`);
        }
        break;
      default:
        if (col.key.startsWith("$")) {
          let key = col.key.replace("$", "");
          line += ` ${relnote.meta[key]} |`;
        } else {
          ghCore.error(`Unknown column key: ${col.key}`, {
            file: path.relative(docsBase, metaFilename),
          });
          error_and_exit(`Invalid release notes definition.`);
        }
        break;
    }
  }
  appendFileSync(relindexfilename, line + "\n");
}

// We aren't done yet, check for a precursor
if (meta.precursor !== undefined) {
  for (let prec of meta.precursor) {
    let line = "|";
    for (let i = 0; i < meta.columns.length; i++) {
      let col = meta.columns[i];
      switch (col.key) {
        case "version-link":
          line += ` [${prec.version}](./${makeRelnotefilename(meta.shortname, prec.version)}) |`;
          break;
        case "shortdate": // This is a precursor, so we need to get the date from the precursor
          line += ` ${prec.date} |`;
          break;
        default:
          if (col.key.startsWith("$")) {
            let key = col.key.replace("$", "");
            line += ` ${prec.meta[key]} |`;
          } else {
            ghCore.error(`Unknown column key: ${col.key}`, {
              file: path.relative(docsBase, metaFilename),
            });
            error_and_exit(`Invalid meta.yml`);
          }
          break;
      }
    }
    appendFileSync(relindexfilename, line + `\n`);
  }
}

// Now let's make some release notes...
for (let [file, relnote] of relnotes) {
  prepareRelnote(meta, file, relnote);
}

function prepareRelnote(meta, file, note) {
  let relnotefilename = makeRelnotefilename(meta.shortname, note.version); // Use this to write the file
  let alltypes = note.relnotes.map((note) => normalizeType(note.type));
  let types = [...new Set(alltypes)];

  let rlout = path.join(basepath, relnotefilename + ".mdx");
  let err = writeFileSync(rlout, "");
  if (err) {
    error_and_exit(`Error writing ${rlout}`);
  }

  types = types.sort((a, b) => {
    const order = [
      "Feature",
      "Enhancement",
      "Security",
      "Change",
      "Bug Fix",
      "Deprecation",
      "Other",
    ];
    return order.indexOf(a) - order.indexOf(b);
  });

  let rnotes = {};

  // Highest, High, Medium, Low, Lowest - in that order
  function impactSort(a, b) {
    const order = ["highest", "high", "medium", "low", "lowest"];
    return (
      order.indexOf(a.impact.toLowerCase()) -
      order.indexOf(b.impact.toLowerCase())
    );
  }

  // BDR, Proxy, CLI - in that order
  function componentSort(a, b) {
    if (meta.components === undefined) {
      return 0;
    }
    const order = meta.components;
    return order.indexOf(a.component) - order.indexOf(b.component);
  }

  for (let type of types) {
    let filterednotes = note.relnotes.filter(
      (note) => normalizeType(note.type) === type,
    );
    rnotes[type] = filterednotes;
  }

  console.log(`Writing ${rlout}`);

  appendFileSync(rlout, `---\n`);
  appendFileSync(
    rlout,
    `title: ${note.product} ${note.version} release notes\n`,
  );
  appendFileSync(rlout, `navTitle: Version ${note.version}\n`);
  appendFileSync(rlout, `---\n`);

  appendFileSync(rlout, "\n");
  appendFileSync(rlout, `Released: ${note.date}\n`);
  appendFileSync(rlout, "\n");

  if (note.updated !== undefined) {
    appendFileSync(rlout, `Updated: ${note.updated}\n`);
    appendFileSync(rlout, "\n");
  }

  appendFileSync(rlout, `${note.intro}`);
  appendFileSync(rlout, "\n");

  if (note.highlights !== undefined) {
    appendFileSync(rlout, `## Highlights`);
    appendFileSync(rlout, "\n\n");
    appendFileSync(rlout, `${note.highlights}`);
    appendFileSync(rlout, "\n");
  }

  for (let type of types) {
    appendFileSync(rlout, `## ${titles(type)}`);
    appendFileSync(rlout, "\n\n");
    if (meta.components !== undefined) {
      appendFileSync(
        rlout,
        `<table class="table w-100"><thead><tr><th>Component</th><th>Version</th><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>\n`,
      );
    } else {
      appendFileSync(
        rlout,
        `<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>\n`,
      );
    }
    // TODO: Depending on type, we should sort the notes
    let sortednotes = rnotes[type].sort(impactSort);

    //rnotes[type].sort(componentSort);

    for (let linenote of sortednotes) {
      let composednote = "";

      if (linenote.details === undefined) {
        composednote = linenote.relnote;
      } else {
        const predetails = linenote.details; // Preprocess here

        const compactdetailshtml = converter(predetails);
        const preheading = linenote.relnote; // Preprocess here
        const headinghtml = converter(preheading)
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "");
        composednote = `<details><summary>${headinghtml}</summary><hr/>${compactdetailshtml}</details>`;
      }

      if (linenote.addresses === undefined || linenote.addresses === null) {
        linenote.addresses = "";
      }

      if (meta.components !== undefined) {
        appendFileSync(
          rlout,
          `<tr><td>${linenote.component}</td><td>${linenote.component_version}</td><td>${composednote}</td><td>${linenote.addresses}</td></tr>\n`,
        );
      } else {
        appendFileSync(
          rlout,
          `<tr><td>${composednote}</td><td>${linenote.addresses}</td></tr>\n`,
        );
      }
    }
    appendFileSync(rlout, "</tbody></table>\n");
    appendFileSync(rlout, "\n\n");
  }
}
