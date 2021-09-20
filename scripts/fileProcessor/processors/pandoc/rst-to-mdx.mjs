import { spawnSync } from "child_process";

export const process = async (filename, content) => {
  const result = spawnSync(
    "pandoc",
    ["--wrap=none", "--from=rst", "--to=gfm", "--markdown-headings=atx"],
    {
      input: content,
      encoding: "utf8",
    },
  );

  return {
    newFilename: filename.replace(/\.rst$/, ".mdx"),
    newContent: result.stdout,
  };
};
