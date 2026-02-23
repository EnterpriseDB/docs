import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import njk from "nunjucks";
import path from "path";
import parseArgs from "minimist";
import { fileURLToPath } from "url";

// Modules hack for dirname via https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var argv = parseArgs(process.argv.slice(2));

let securityRoot = argv.root;

if (securityRoot == undefined) {
  securityRoot = path.normalize(
    path.join(__dirname, "..", "..", "..", "..", "advocacy_docs", "security"),
  );
  console.log(`Using ${securityRoot} as working directory`);
}

let seccount = 5;

if (argv.count != undefined) {
  seccount = parseInt(argv.count);
}

const md = new MarkdownIt();
// We are going to process the advisories in
const advisoriesDir = path.join(securityRoot, "advisories");
const assessmentsDir = path.join(securityRoot, "assessments");
// To produce an index file named
const advisoriesIndex = path.join(advisoriesDir, "index.mdx");
const assessmentsIndex = path.join(assessmentsDir, "index.mdx");
// And another similar but shorted one named
const securityIndex = path.join(securityRoot, "index.mdx");

// Using templates in a directory called
const templatesDir = path.join(securityRoot, "templates");

function parseMarkdownFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsedMatter = matter(fileContent);
  const parsed = md.parse(parsedMatter.content, {});

  let heading_capture = false;
  let currentHeading = "open";
  let currentSectionMap = {};
  let currentSectionArray = [];

  let docMap = parsed.reduce((currentValue, block) => {
    if (block.type == "inline") {
      if (heading_capture) {
        currentHeading = slugify(block.content);
        heading_capture = false;
      } else {
        let match = block.content.match(/^([A-Za-z0-9- ]*): *(.*)$/m);
        if (match) {
          let key = slugify(match[1]);
          let value = match[2];
          currentSectionMap[key] = value;
        } else {
          currentSectionArray.push(block.content);
        }
      }
    } else if (block.type == "heading_open") {
      let value = "";
      if (currentSectionArray.length != 0) {
        value = currentSectionArray;
        currentSectionArray = [];
      } else {
        value = currentSectionMap;
        currentSectionMap = {};
      }
      heading_capture = true;
      currentValue[currentHeading] = value;
    } else if (block.type == "heading_close") {
    }
    return currentValue;
  }, {});

  // add the parsedMatter data to the docmap
  docMap["frontmatter"] = parsedMatter.data;

  const cvepath = path.basename(filePath, ".mdx");

  docMap["filename"] = cvepath;

  return docMap;
}

// function that takes a string and returns it in lower case, with no spaces
function slugify(string) {
  return string
    .toLowerCase()
    .replace(/[-]+/g, "_")
    .replace(/\s+/g, "_")
    .replace(/[^\w-]+/g, "");
}

function cleanCVE(cvestring) {
  if (cvestring[0] == "[") {
    return cvestring.slice(1, cvestring.indexOf("]", 1));
  }
  return cvestring;
}

// Iterate over all the files that start cve and end with mdx in the source directory, and parse them

njk.configure(templatesDir, { autoescape: false });

// Process the CVEs
const files = fs
  .readdirSync(advisoriesDir)
  .filter((fn) => fn.startsWith("cve") && fn.endsWith("mdx"));
files.sort().reverse();
const cvelist = files.map((file) => {
  return file.replace(/\.[^/.]+$/, "");
});

let namespace = {};
let allDocMap = {};

cvelist.forEach((cve) => {
  const docMap = parseMarkdownFile(path.join(advisoriesDir, cve + ".mdx"));
  // make sure the cve id isn't a link
  docMap["vulnerability_details"]["cve_id"] = cleanCVE(
    docMap["vulnerability_details"]["cve_id"],
  );
  // trim the cve id off the front of the title
  docMap["frontmatter"]["title"] = docMap["frontmatter"]["title"].slice(
    docMap["frontmatter"]["title"].indexOf(" - ") + 3,
  );
  allDocMap[cve] = docMap;
});

let shortcvelist = cvelist.slice(0, seccount);

// Process the assessments
const assfiles = fs
  .readdirSync(assessmentsDir)
  .filter((fn) => fn.startsWith("cve") && fn.endsWith("mdx"));
// assfiles.sort();.reverse();
assfiles.sort();
const asslist = assfiles.map((file) => {
  return file.replace(/\.[^/.]+$/, "");
});
let assAllDocMap = {};

asslist.forEach((ass) => {
  const assDocMap = parseMarkdownFile(path.join(assessmentsDir, ass + ".mdx"));
  // make sure the cve id isn't a link
  assDocMap["vulnerability_details"]["cve_id"] = cleanCVE(
    assDocMap["vulnerability_details"]["cve_id"],
  );
  // trim the cve id off the front of the title
  assDocMap["frontmatter"]["title"] = assDocMap["frontmatter"]["title"].slice(
    assDocMap["frontmatter"]["title"].indexOf(" - ") + 3,
  );
  assAllDocMap[ass] = assDocMap;
});

asslist.reverse();
let shortasslist = asslist.slice(0, seccount);

namespace["shortcvelist"] = shortcvelist;
namespace["cvesorted"] = cvelist;
namespace["cves"] = allDocMap;
namespace["shortasslist"] = shortasslist;
namespace["asssorted"] = asslist;
namespace["asss"] = assAllDocMap;

fs.writeFileSync(advisoriesIndex, njk.render("advisoriesindex.njs", namespace));

fs.writeFileSync(
  assessmentsIndex,
  njk.render("assessmentsindex.njs", namespace),
);

fs.writeFileSync(securityIndex, njk.render("securityindex.njs", namespace));
