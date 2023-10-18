export const process = (filename, content) => {
  if (filename.includes("/appendixes/"))
    return {
      newFilename: filename.replace(/\/appendixes\//, "/"),
      newContent: content,
    };
  return {newFilename: filename, newContent: content};
};
