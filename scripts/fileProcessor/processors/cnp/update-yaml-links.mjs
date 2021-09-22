export const process = (filename, content) => {
  const newContent = content.split("\n").map(rewriteLink).join("\n");

  return {
    newFilename: filename,
    newContent,
  };
};

const rewriteLink = (line) => {
  const regex = /\[.+\]\((.+)\.yaml\)/;
  const match = line.match(regex);
  if (match === null) {
    return line;
  }

  return line.replace(match[1], match[1].replace("samples/", "../samples/"));
};
