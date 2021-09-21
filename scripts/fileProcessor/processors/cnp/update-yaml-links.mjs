export const process = (file) => {
  file.value = file.value.split("\n").map(rewriteLink).join("\n");
};

const rewriteLink = (line) => {
  const regex = /\[.+\]\((.+)\.yaml\)/;
  const match = line.match(regex);
  if (match === null) {
    return line;
  }

  return line.replace(match[1], match[1].replace("samples/", "../samples/"));
};
