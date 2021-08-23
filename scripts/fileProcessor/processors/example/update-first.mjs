export const process = (filename, fileContent) => {
  if (filename !== "first.md") {
    return {
      newFilename: filename,
      newFileContent: fileContent,
    };
  }

  return {
    newFilename: filename,
    newFileContent: fileContent.toUpperCase(),
  };
};
