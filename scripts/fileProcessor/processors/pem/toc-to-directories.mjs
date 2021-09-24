import { cloneDeep } from "lodash-es";
import { remark } from "remark";
import { visit } from "unist-util-visit";

export const process = (file, allFiles) => {
  // We only want to process the main index here, and no files that have been renamed to index.
  if (file.stem !== "index" || file.data.childIndex === true) {
    return;
  }

  const toc = getToc(file);
  processTocEntries(toc, file.dirname, allFiles);

  // Make sure files not in a ToC are still properly named
  allFiles
    .filter((f) => f.data.tocUpdated !== true)
    .map((file, index) => {
      const filenameIndex = index + toc.length;
      file.stem = `${formatIndex(filenameIndex)}_${file.stem}`;
    });
};

const processTocEntries = (tocEntries, directory, allFiles) => {
  for (const [index, stem] of tocEntries.entries()) {
    processSingleTocEntry(index, stem, directory, allFiles);
  }
};

const processSingleTocEntry = (index, stem, directory, allFiles) => {
  let file = findFileByStem(stem, allFiles);
  const indexString = formatIndex(index);

  // If the the file stem does not match, then this file is included in multiple ToCs.
  // Address this by copying the file, and resetting it's stem.
  if (file.stem !== stem) {
    file = cloneDeep(file);
    file.stem = stem;
    allFiles.push(file);
  }

  const toc = getToc(file);

  if (toc.length > 0) {
    file.dirname = `${directory}/${indexString}_${stem}`;
    file.stem = "index";
    file.data.childIndex = true;

    processTocEntries(toc, file.dirname, allFiles);
  } else {
    file.dirname = directory;
    file.stem = `${indexString}_${file.stem}`;
  }

  file.data.tocUpdated = true;
};

/**
 * Search through all files and try and find a match
 * Look at the original file name, because the stem may have already been updated in this script if the file is linked
 * from multiple ToCs
 * @param stem the stem of the file we are trying to find
 * @param allFiles array of all files
 * @returns the appropriate vfile
 */
const findFileByStem = (stem, allFiles) => {
  const regex = new RegExp(`.*${stem.replace("+", String.raw`\+`)}\.rst`);
  return allFiles.find((f) => !!f.history[0].match(regex));
};

const getToc = (file) => {
  let toc = [];
  const tree = remark.parse(file);

  const test = (node) => {
    return !!node.value?.match(/<div class="toctree".*>/);
  };

  const vistor = (_, index) => {
    const tocContent = tree.children[index + 1].children.pop().value.split(" ");
    toc = toc.concat(tocContent);

    return "SKIP";
  };

  visit(tree, test, vistor);

  return toc;
};

const formatIndex = (index) => String(index + 1).padStart(2, "0");
