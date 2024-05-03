import fetch from "node-fetch";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

function getMonthName(monthNumber) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthNumber];
}

function getShortMonthName(monthNumber) {
  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return monthNames[monthNumber];
}

function printReleaseNotesHeader(currentMonth, currentYear) {
  return `---
title: BigAnimal ${getMonthName(currentMonth)} ${currentYear} release notes
navTitle: ${getMonthName(currentMonth)} ${currentYear}
---

BigAnimal's ${getMonthName(
    currentMonth,
  )} ${currentYear} includes the following enhancements and bugfixes:

| Type | Description |
|------|-------------|`;
}

async function fetchAndProcess(directory, currentYear, currentMonth) {
  try {
    const response = await fetch(
      "https://status.biganimal.com/api/maintenance-windows/done/index.json",
    );
    const data = await response.json();

    const filteredData = data.data.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        item.title !== undefined &&
        item.title.endsWith("Production release") &&
        itemDate.getFullYear() === currentYear &&
        itemDate.getMonth() === currentMonth
      );
    });

    const lines = filteredData.map((item) => {
      if (item.description.startsWith("* ")) {
        return item.description.split("* ");
      }
      if (item.description.startsWith("- ")) {
        return item.description.split("- ");
      }
      return item.description;
    });

    // Flatten and clean the array of features
    const cleanLines = lines.flat().filter((item) => {
      return (
        item !== "" &&
        !item.startsWith("Improvements and updates for the cloud service")
      );
    });

    const releaseNoteHeader = printReleaseNotesHeader(
      currentMonth,
      currentYear,
    );
    const releaseNotesBody = cleanLines
      .map((line) => `| Enhancement | ${line.trim()} |`)
      .join("\n");
    // file name shoudl be like 2021_09_sep_rel_notes.mdx
    const releaseNotesFileName = `${directory}/${currentYear}_${(
      currentMonth + 1
    )
      .toString()
      .padStart(2, "0")}_${getShortMonthName(currentMonth)}_rel_notes.mdx`;

    const releaseNotesFile = fs.openSync(`${releaseNotesFileName}`, "w");

    fs.writeSync(
      releaseNotesFile,
      `${releaseNoteHeader}\n${releaseNotesBody}\n\n\n`,
      0,
    );

    console.log(
      `Release notes ${releaseNotesFileName} generated successfully!`,
    );
  } catch (error) {
    console.log(error);
  }
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

let argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> -d [path] [options]")
  .option("year", {
    alias: "y",
    type: "number",
    default: currentYear,
    description: "Set year to generate release note for (default current year)",
  })
  .option("month", {
    alias: "m",
    type: "number",
    default: currentMonth,
    description:
      "Set month to generate release note for (default current month)",
  })
  .option("dir", {
    alias: "d",
    type: "string",
    required: true,
    description: "Set directory for release note to be written to",
  })
  .parse();

// Get current year and month

fetchAndProcess(argv.dir, argv.year, argv.month - 1);
