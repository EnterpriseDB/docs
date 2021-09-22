# File Processor

This tool can be used to automatically modify files. This works by opening specified files, and applying a processor script to the file's name and content. It is intended to be used by workflows which pull content from other repositories into this one.

## Usage

In the directory that you'd like to modify files in, run something like the following:
```
node fileProcessor/main.mjs -f **/*.md -p dummy
```

### options
| flag          | alias | description |
|---------------|-------|-------------|
| `--files`     | `-f`  | The glob the script uses to look for files.More than one `--files` flag can be passed in, but the processor will only run on files which match all of the globs passed in|
| `--processor` | `-p`  | The processor to apply to files. The script will look for these in the `processors` directory. More than one processor can be added, and they will be run in the order they are passed in.

## adding new processors

The main script will attempt to import processors passed in with `--processor` flags by looking for a file with a matching name in the `processors` directory.

A processor should be saved with the `.mjs` extension, and export a function named `process` which accepts two arguments. The file name will be passed into the first argument, and file contents will be passed into the second argument. This function should return an object with the keys `newFileContent` and `newFilename`.
