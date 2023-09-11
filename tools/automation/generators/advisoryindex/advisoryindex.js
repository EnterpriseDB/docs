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

let seccount=10;

if (argv.count != undefined) {
    seccount=parseInt(argv.count);
}

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

    const sections = parsedMatter.content.split('\n#').slice(0); // split at headings
    const sectionDicts = sections.map(section => {
        const lines = section.split('\n');
        const heading = lines[0].replace('#', '').trim();
        const content = lines.slice(1);
        var parsedContent = [];
        content.forEach((line, index) => {
            if (line !== '') {
                if (line.startsWith('* [')) {
                    // This is a line with a link
                    // For now, we drop links completely
                } else if (line.indexOf(':') > 0) {
                    const colon = line.indexOf(':');
                    let key = line.slice(0, colon);
                    if (key.startsWith('* ')) {
                        key = key.slice(2);
                    }
                    const value = line.slice(colon + 1).trim();

                    parsedContent.push({ [slugify(key)]: value });
                } else {
                    parsedContent.push(line);
                }
            }
        });

        if (heading === '') {
            return { ["open"]: parsedContent };
        }

        return { [slugify(heading)]: parsedContent };
    });

    let docMap = {}

    // add the parsedMatter data to the docmap
    Object.keys(parsedMatter.data).forEach(key => {
        docMap["frontmatter_" + key] = parsedMatter.data[key];
    });

    const path = basename(filePath, ".mdx");

    docMap["filename"] = path;

    // add the flattened sections to the docMap
    sectionDicts.forEach(section => {
        Object.keys(section).forEach(key => {
            let value = section[key];
            if (Array.isArray(value)) {
                for (let i = 0; i < value.length; i++) {
                    if (typeof value[i] === 'object') {
                        Object.keys(value[i]).forEach(subkey => {
                            docMap[key + '_' + subkey] = value[i][subkey];
                        })
                    } else {
                        docMap[key + '_' + i] = value[i];
                    }
                }
                value = value.join('\n');
            } else {
                docMap[key] = value;
            }
        })
    });;

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

function cleanCVE(string) {
    if (string[0] == "[") {
        return string.slice(1, string.indexOf("]", 1));
    }
    return string;
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
    docMap['vulnerability_details_cve_id'] = cleanCVE(docMap['vulnerability_details_cve_id']);
    allDocMap[cve] = docMap;
});


let shortcvelist = [];
let lastyear = "";
let count = 0;
cvelist.forEach(cve => {
    const year = cve.substring(3, 7);
    if (lastyear=="") {
        count = 0;
        lastyear = year;
    } else if (lastyear!=year) {
        return;
    }
    if (count < seccount) {
        shortcvelist.push(cve);
        count++;
    }
});

namespace["shortcvelist"]= shortcvelist;
namespace["cvesorted"] = cvelist;
namespace["cves"] = allDocMap;

//console.log(JSON.stringify(namespace, null, 2));

const res = njk.render("advisoriesindex.njs", namespace);

fs.writeFileSync(advisoriesIndex, res);

const res2 = njk.render("securityindex.njs", namespace);

fs.writeFileSync(securityIndex,res2);

