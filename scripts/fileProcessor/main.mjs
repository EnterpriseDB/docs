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

const run = async () => {
  const paths = await globby(args["--files"]);
  const allFiles = paths.map((path) => vfile.readSync(path, "utf8"));

  console.log(`Processing ${allFiles.length} files`);

  // First, process all of the files
  for (const processorName of args["--processor"]) {
    console.log(`Running processor: ${processorName}`);
    await runProcessor(processorName, allFiles);
  }

  // Because processors could possibly affect any file, write the files out after all processors have run
  Promise.all(allFiles.map(writeFile));
};

const runProcessor = async (processorName, allFiles) => {
  await import(`${__dirname}/processors/${processorName}.mjs`).then(
    async (module) => {
      Promise.all(
        allFiles.map(async (file) => {
          await module.process(file, allFiles);
        }),
      );
    },
  );
};

const writeFile = async (file) => {
  console.error(report(file));

  const ogFilePath = file.history[0];
  const isFilePathUpdated = file.history.length > 1;

  if (isFilePathUpdated) {
    console.log(`Writing ${file.path} (previously ${ogFilePath})`);
  } else {
    console.log(`Writing ${file.path}`);
  }

  vfile
    .write(file)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    })
    .then(() => {
      if (isFilePathUpdated) {
        console.log(`Removing ${ogFilePath}`);

        fs.rm(ogFilePath).catch((err) => {
          console.error(err);
          process.exit(1);
        });
      }
    });
};

run();
