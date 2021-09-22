import fs from "fs/promises";
import yaml from "js-yaml";

export const process = async (filename, content) => {
  const trimmedContent = content.trim();
  if (trimmedContent.charAt(0) !== "#") {
    console.warn(
      "File does not begin with title - frontmatter will not be valid: " +
        filename,
    );
  }

  const endOfFirstLine = trimmedContent.indexOf("\n");

  // Get the first line of content, which should be the header.
  // This will exclude the very first character, which should be '#'
  const header = trimmedContent.slice(1, endOfFirstLine).trim();

  // add the frontmatter to the file. This will replace the first line of the file.
  let newContent = await getFrontmatter(header, filename);
  newContent = newContent + trimmedContent.slice(endOfFirstLine);

  return {
    newFilename: filename,
    newContent,
  };
};

const getFrontmatter = async (header, filename) => {
  let frontmatter = `---
title: '${header}'
originalFilePath: '${filename}'
product: 'Cloud Native Operator'
`;

  if (filename.slice(-8) === "index.md") {
    frontmatter = await addIndexFrontmatterSection(frontmatter);
  }

  return frontmatter + "---";
};

const addIndexFrontmatterSection = async (frontmatter) => {
  let modifiedFrontmatter =
    frontmatter +
    `indexCards: none
directoryDefaults:
  prevNext: true
  iconName: kubernetes

navigation:
`;

  // read the mkdocs.yml file to figure out the nav entries for the frontmatter
  const mkdocsYaml = yaml.load(
    await fs.readFile("mkdocs.yml", { encoding: "utf8" }),
  );
  mkdocsYaml.nav.forEach((line) => {
    // make sure file extensions are stripped off.
    modifiedFrontmatter = `${modifiedFrontmatter}  - ${line.slice(0, -3)}\n`;

    // Make sure the interactive demo page is included in the right spot.
    if (line === "quickstart.md") {
      modifiedFrontmatter = modifiedFrontmatter + "  - interactive_demo\n";
    }
  });

  return modifiedFrontmatter;
};
