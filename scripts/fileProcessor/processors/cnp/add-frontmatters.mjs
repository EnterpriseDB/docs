import { readFile } from "../../fileHelper.mjs";

export const process = async (filename, content) => {
  if (content.charAt(0) !== "#") {
    console.warn(
      "File does not begin with title - frontmatter will not be valid: " +
        filename,
    );
  }

  const header = content.slice(1, content.indexOf("\n"));

  let newContent = await getFrontmatter(header, filename);
  newContent = newContent + content.slice(content.indexOf("\n"));

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

  await readFile("mkdocs.yml", { encoding: "utf8" }).then((content) => {
    const navItems = content.split("nav:\n");
    navItems[1].split("\n").forEach((line) => {
      if (line.slice(0, 3) !== "  -") {
        return;
      }

      modifiedFrontmatter =
        modifiedFrontmatter + line.slice(0, line.indexOf(".md")) + "\n";
    });
  });

  return modifiedFrontmatter;
};
