import arg from "arg";
import {
  readFileSync,
  rm as callbackRm,
  writeFile as callbackWriteFile,
} from "fs";
import { globby } from "globby";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const args = arg({
  "--files": [String],
  "--processor": [String],

  "-f": "--files",
  "-p": "--processor",
});

const rm = promisify(callbackRm);
const writeFile = promisify(callbackWriteFile);
const __dirname = dirname(fileURLToPath(import.meta.url));

const processFiles = async () => {
  const paths = await globby(args["--files"]);

  console.log(`Processing ${paths.length} files`);

  paths.forEach((filename) => processSingleFile(filename));
};

const processSingleFile = async (filename) => {
  console.log(`Processing ${filename}`);

  const fileContent = readFileSync(filename, "utf8");

  // run the processor scripts
  const { newFilename, newFileContent } = await runProcessorsForFile(
    filename,
    fileContent,
  );

  if (newFilename != filename) {
    console.log(`Writing ${newFilename} (previously ${filename})`);
  } else {
    console.log(`Writing ${newFilename}`);
  }

  writeFile(newFilename, newFileContent)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
    .then(() => {
      // if the filename has changed, then remove the old one
      if (newFilename != filename) {
        console.log(`Removing ${filename}`);

        rm(filename).catch((err) => {
          console.error(err);
          process.exit(1);
        });
      }
    });
};

const runProcessorsForFile = async (filename, fileContent) => {
  let newFilename = filename;
  let newFileContent = fileContent;

  for (const index in args["--processor"]) {
    await import(
      `${__dirname}/processors/${args["--processor"][index]}.mjs`
    ).then((module) => {
      const output = module.process(newFilename, newFileContent);

      newFilename = output.newFilename;
      newFileContent = output.newFileContent;
    });
  }

  return { newFilename, newFileContent };
};

processFiles();
