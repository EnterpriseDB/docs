export const process = (filename, content) => {
  if (filename !== "first.md") {
    return {
      newFilename: filename,
      newContent: content,
    };
  }

  return {
    newFilename: filename,
    newContent: content.toUpperCase(),
  };
};
