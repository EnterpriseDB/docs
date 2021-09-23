export const process = (file, allFiles) => {
  console.log(JSON.stringify(file));
  console.log(JSON.stringify(allFiles.map((f) => f.path)));
};
