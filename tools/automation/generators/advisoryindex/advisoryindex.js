import fs from "fs";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import njk from "nunjucks";
import path from 'path';
import  parseArgs from 'minimist';
import { fileURLToPath } from 'url';

// Modules hack for dirname via https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var argv = parseArgs(process.argv.slice(2));

let securityRoot = argv.root;

if (securityRoot == undefined) {
    securityRoot=path.normalize(path.join(__dirname,"..","..","..","..","advocacy_docs","security"));
    console.log(`Using ${securityRoot} as working directory`);
}

let seccount = 10;

if (argv.count != undefined) {
    seccount = parseInt(argv.count);
}

const md = new MarkdownIt();
// We are going to process the advisories in
const advisoriesDir = path.join(securityRoot, "advisories");
// To produce an index file named
const advisoriesIndex = path.join(advisoriesDir, "index.mdx");
// And another similar but shorted one named
const securityIndex = path.join(securityRoot, "index.mdx");

// Using templates in a directory called
const templatesDir = path.join(securityRoot, "templates");

function parseMarkdownFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedMatter = matter(fileContent);
    const parsed = md.parse(parsedMatter.content, {});

    let heading_capture = false;
    let currentHeading = "open";
    let currentSectionMap = {}
    let currentSectionArray = [];

    let docMap=parsed.reduce((currentValue, block) => {
        if (block.type == "inline") {
            if (heading_capture) {
                currentHeading = slugify(block.content);
                heading_capture=false;
            } else {
                let match = block.content.match("^([A-Za-z0-9- ]*): *(.*)$");
                if (match) {
                    let key = slugify(match[1]);
                    let value = match[2];
                    currentSectionMap[key] = value;
                } else {
                    currentSectionArray.push(block.content);
                }
            }
        } else if (block.type == "heading_open") {
            let value="";
            if (currentSectionArray.length!=0) {
                value=currentSectionArray;
                currentSectionArray = [];
            } else {
                value=currentSectionMap;
                currentSectionMap = {};
            }
            heading_capture = true;
            currentValue[currentHeading]=value;
        } else if (block.type == "heading_close") {
        }
        return currentValue;
    }, {})

    // add the parsedMatter data to the docmap
    docMap["frontmatter"]=parsedMatter.data;

    const cvepath = path.basename(filePath, ".mdx");

    docMap["filename"] = cvepath;

    return docMap;
}

// function that takes a string and returns it in lower case, with no spaces
function slugify(string) {
    return string
        .toLowerCase()
        .replace(/[-]+/g, '_')
        .replace(/\s+/g, '_')
        .replace(/[^\w-]+/g, '')
        ;
}

function cleanCVE(cvestring) {
    if (cvestring[0] == "[") {
        return cvestring.slice(1, cvestring.indexOf("]", 1));
    }
    return cvestring;
}

// Iterate over all the files that start cve and end with mdx in the source directory, and parse them

njk.configure(templatesDir, { autoescape: false });



const files = fs.readdirSync(advisoriesDir).filter(fn => fn.startsWith('cve') && fn.endsWith('mdx'));
files.sort().reverse();
const cvelist = files.map(file => { return file.replace(/\.[^/.]+$/, "") });

let namespace = {};
let allDocMap = {};

cvelist.forEach(cve => {
    const docMap = parseMarkdownFile(path.join(advisoriesDir, cve + '.mdx'));
     // make sure the cve id isn't a link
    docMap['vulnerability_details']['cve_id'] = cleanCVE(docMap['vulnerability_details']['cve_id']);
    // trim the cve id off the front of the title
    docMap['frontmatter']['title'] = docMap['frontmatter']['title'].slice(docMap['frontmatter']['title'].indexOf(" - ") + 3);
    allDocMap[cve] = docMap;
});


let shortcvelist = [];
let lastyear = "";
let count = 0;
cvelist.forEach(cve => {
    const year = cve.substring(3, 7);
    if (lastyear == "") {
        count = 0;
        lastyear = year;
    } else if (lastyear != year) {
        return;
    }
    if (count < seccount) {
        shortcvelist.push(cve);
        count++;
    }
});

namespace["shortcvelist"] = shortcvelist;
namespace["cvesorted"] = cvelist;
namespace["cves"] = allDocMap;

//console.log(JSON.stringify(namespace, null, 2));


const res = njk.render("advisoriesindex.njs", namespace);

fs.writeFileSync(advisoriesIndex, res);

const res2 = njk.render("securityindex.njs", namespace);

fs.writeFileSync(securityIndex, res2);

