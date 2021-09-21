export const process = (filename, content) => {
  return {
    newFilename: filename.replace(/\.md$/, ".mdx"),
    newContent: content,
  };
};
