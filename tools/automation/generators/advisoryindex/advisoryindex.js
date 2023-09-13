const fs = require('fs');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const njk = require('nunjucks');
const { basename, join } = require('path');
const parseArgs = require('minimist');
const { addAbortListener } = require('events');

var argv = parseArgs(process.argv.slice(2));

if (argv.root == undefined) {
    console.log("Need --root");
    process.exit(1);
}

const securityRoot = argv.root;

let seccount = 10;

if (argv.count != undefined) {
    seccount = parseInt(argv.count);
}

const md = new MarkdownIt();
// We are going to process the advisories in
const advisoriesDir = join(securityRoot, "advisories");
// To produce an index file named
const advisoriesIndex = join(advisoriesDir, "index.mdx");
// And another similar but shorted one named
const securityIndex = join(securityRoot, "index.mdx");

// Using templates in a directory called
const templatesDir = join(securityRoot, "templates");

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

    const path = basename(filePath, ".mdx");

    docMap["filename"] = path;

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
    const docMap = parseMarkdownFile(join(advisoriesDir, cve + '.mdx'));
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

