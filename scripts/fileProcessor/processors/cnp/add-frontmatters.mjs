import { readFile } from "../../fileHelper.mjs";

export const process = async (filename, content) => {
  if (content.charAt(0) !== "#") {
    console.warn(
      "File does not begin with title - frontmatter will not be valid: " +
        filename,
    );
  }

  const endOfFirstLine = content.indexOf("\n");

  // Get the first line of content, which should be the header.
  // This will exclude the very first character, which should be '#'
  const header = content.slice(1, endOfFirstLine).trim();

  // add the frontmatter to the file. This will replace the first line of the file.
  let newContent = await getFrontmatter(header, filename);
  newContent = newContent + content.slice(endOfFirstLine);

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
  await readFile("mkdocs.yml", { encoding: "utf8" }).then((content) => {
    // We only care about the content after the line which says "nav:"
    const navItems = content.split("nav:\n");
    navItems[1].split("\n").forEach((line) => {
      if (line.slice(0, 3) !== "  -") {
        return;
      }

      // make sure file extensions are stripped off.
      modifiedFrontmatter =
        modifiedFrontmatter + line.slice(0, line.indexOf(".md")) + "\n";

      if (line.indexOf("quickstart.md") > 0) {
        modifiedFrontmatter = modifiedFrontmatter + "  - interactive_demo\n";
      }
    });
  });

  return modifiedFrontmatter;
};
