import arg from "arg";
import fs from "fs/promises";
import { globby } from "globby";
import { dirname } from "path";
import { fileURLToPath } from "url";

const args = arg({
  "--files": [String],
  "--processor": [String],

  "-f": "--files",
  "-p": "--processor",
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const processFiles = async () => {
  const paths = await globby(args["--files"]);

  console.log(`Processing ${paths.length} files`);

  paths.forEach(processSingleFile);
};

const processSingleFile = async (filename) => {
  console.log(`Processing ${filename}`);

  // run the processor scripts
  const { newFilename, newContent } = await runProcessorsForFile(
    filename,
    await fs.readFile(filename, "utf8"),
  );

  if (newFilename != filename) {
    console.log(`Writing ${newFilename} (previously ${filename})`);
  } else {
    console.log(`Writing ${newFilename}`);
  }

  fs.writeFile(newFilename, newContent)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
    .then(() => {
      // if the filename has changed, then remove the old one
      if (newFilename != filename) {
        console.log(`Removing ${filename}`);

        fs.rm(filename).catch((err) => {
          console.error(err);
          process.exit(1);
        });
      }
    });
};

const runProcessorsForFile = async (filename, content) => {
  let newFilename = filename;
  let newContent = content;

  for (const index in args["--processor"]) {
    await import(
      `${__dirname}/processors/${args["--processor"][index]}.mjs`
    ).then(async (module) => {
      const output = await module.process(newFilename, newContent);

      newFilename = output.newFilename;
      newContent = output.newContent;
    });
  }

  return { newFilename, newContent };
};

processFiles();
