import arg from "arg";
import fs from "fs/promises";
import { globby } from "globby";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { toVFile as vfile } from "to-vfile";
import { reporter as report } from "vfile-reporter";

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

const processSingleFile = async (filePath) => {
  console.log(`Processing ${filePath}`);

  const file = vfile.readSync(filePath, "utf8");

  // run the processor scripts
  await runProcessorsForFile(file);

  const ogFilePath = file.history[0];
  const filePathUpdated = file.history.length > 1;

  if (filePathUpdated) {
    console.log(`Writing ${file.path} (previously ${ogFilePath})`);
  } else {
    console.log(`Writing ${file.path}`);
  }

  console.error(report(file));

  vfile
    .write(file)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
    .then(() => {
      if (filePathUpdated) {
        console.log(`Removing ${ogFilePath}`);

        fs.rm(ogFilePath).catch((err) => {
          console.error(err);
          process.exit(1);
        });
      }
    });
};

const runProcessorsForFile = async (file) => {
  for (const index in args["--processor"]) {
    await import(
      `${__dirname}/processors/${args["--processor"][index]}.mjs`
    ).then(async (module) => {
      await module.process(file);
    });
  }
};

processFiles();
