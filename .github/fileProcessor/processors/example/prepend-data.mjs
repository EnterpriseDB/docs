export const process = (filename, fileContent) => {
  return {
    newFilename: "example_" + filename,
    newFileContent:
      "this is some example content that was added later\n" + fileContent,
  };
};
