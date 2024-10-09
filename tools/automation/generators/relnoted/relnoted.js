#! /usr/bin/env node

// Parse the yaml in the relnotetester.yml file and return the data

import { readFileSync, writeFileSync, appendFileSync } from "fs";
import { load } from "js-yaml";
import showdown from "showdown";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

let argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 -f <filename> -o <filename>")
  .option("f", {
    alias: "filename",
    describe: "The filename of the relnotes file",
    type: "string",
    demandOption: true,
  })
  .option("o", {
    alias: "output",
    describe: "The filename to write the markdown/html to",
    type: "string",
    demandOption: true,
  })
  .parse();

if (argv.filename === undefined) {
  console.error("No filename provided");
  process.exit(1);
}

if (argv.output === undefined) {
  console.error("No output filename provided");
  process.exit(1);
}

function parseRelnotes(filename) {
  try {
    const file = readFileSync(filename, "utf8");
    return load(file);
  } catch (e) {
    console.error(e);
    return {};
  }
}

let notes = parseRelnotes(argv.filename);

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
      return "Bug Fix";
    case "Deprecation":
    case "Obsolete":
      return "Deprecations";
    case "Other":
    default:
      return "Other";
  }
}

let rnotes = {};
let alltypes = notes.relnotes.map((note) => normalizeType(note.type));

let types = [...new Set(alltypes)];

types = types.sort((a, b) => {
  const order = [
    "Feature",
    "Enhancement",
    "Security",
    "Bug Fix",
    "Deprecation",
    "Other",
  ];
  return order.indexOf(a) - order.indexOf(b);
});

function titles(type) {
  switch (type) {
    case "Feature":
      return "Features";
    case "Enhancement":
      return "Enhancements";
    case "Security":
      return "Security Fixes";
    case "Bug Fix":
      return "Bug Fixes";
    case "Deprecation":
      return "Deprecations";
    case "Other":
      return "Other";
  }
}

for (let type of types) {
  let filterednotes = notes.relnotes.filter(
    (note) => normalizeType(note.type) === type,
  );
  rnotes[type] = filterednotes;
}

const converter = new showdown.Converter();

// Open and erase the output file

const rlout = argv.output;

let err = writeFileSync(rlout, "");
if (err) {
  console.error(err);
  process.exit(1);
}

// TODO: Replace this with some sane templating

appendFileSync(rlout, `---\n`);
appendFileSync(
  rlout,
  `title: ${notes.product} ${notes.version} release notes\n`,
);
appendFileSync(rlout, `navTitle: Version ${notes.version}\n`);
appendFileSync(rlout, `---\n`);
appendFileSync(rlout, "\n\n");
appendFileSync(rlout, `Released: ${notes.date}\n`);
appendFileSync(rlout, "\n\n");
appendFileSync(rlout, `${notes.intro}`);
appendFileSync(rlout, "\n\n");
appendFileSync(rlout, `## Highlights`);
appendFileSync(rlout, "\n");
appendFileSync(rlout, `${notes.highlights}`);
appendFileSync(rlout, "\n\n");
appendFileSync(rlout, "");

for (let type of types) {
  appendFileSync(rlout, `## ${titles(type)}`);
  appendFileSync(rlout, "\n\n");
  appendFileSync(
    rlout,
    `<table class="table"><thead><tr><th>Component</th><th>Version</th><th>Release Note</th><th>Addresses</th></tr></thead><tbody>\n`,
  );

  // TODO: Depending on type, we should sort the notes

  for (let note of rnotes[type]) {
    let composednote = "";

    if (note.details === undefined) {
      composednote = note.relnote;
    } else {
      const predetails = note.details; // Preprocess here
      const compactdetailshtml = converter.makeHtml(predetails);
      const preheading = note.relnote; // Preprocess here
      const headinghtml = converter
        .makeHtml(preheading)
        .replace(/<p>/g, "")
        .replace(/<\/p>/g, "");
      composednote = `<details><summary>${headinghtml}</summary><hr/>${compactdetailshtml}</details>`;
    }

    if (note.addresses === undefined || note.addresses === null) {
      note.addresses = "";
    }

    appendFileSync(
      rlout,
      `<tr><td>${note.component}</td><td>${note.component_version}</td><td>${composednote}</td><td>${note.addresses}</td></tr>\n`,
    );
  }
  appendFileSync(rlout, "</tbody></table>\n");
  appendFileSync(rlout, "\n\n");
}
