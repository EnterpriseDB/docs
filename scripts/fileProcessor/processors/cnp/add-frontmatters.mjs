import fs from "fs/promises";
import yaml from "js-yaml";

export const process = async (file) => {
  const trimmedValue = file.value.trim();
  if (trimmedValue.charAt(0) !== "#") {
    file.message(
      "File does not begin with title - frontmatter will not be valid",
      "1:1",
    );
  }

  const endOfFirstLine = trimmedValue.indexOf("\n");

  // Get the first line of content, which should be the header.
  // This will exclude the very first character, which should be '#'
  const header = trimmedValue.slice(1, endOfFirstLine).trim();

  // add the frontmatter to the file. This will replace the first line of the file.
  let newValue = await getFrontmatter(header, file.path);
  newValue = newValue + trimmedValue.slice(endOfFirstLine);

  file.value = newValue;
};

const getFrontmatter = async (header, filePath) => {
  let frontmatter = `---
title: '${header}'
originalFilePath: '${filePath}'
product: 'Cloud Native Operator'
`;

  if (filePath.slice(-8) === "index.md") {
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
  iconName: logos/KubernetesMono

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
