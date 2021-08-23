export const process = (filename, content) => {
  return {
    newFilename: "example_" + filename,
    newContent: "this is some example content that was added later\n" + content,
  };
};
