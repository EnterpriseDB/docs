const fs = require("fs");
const path = require("path");
const parseArgs = require('minimist');
const marked = require('marked');
const frontmatter = require('front-matter');
const crypto = require('crypto');

var argv = parseArgs(process.argv.slice(2));

if (argv.source == undefined) {
    console.log("Need --source");
    process.exit(1);
}

let globalMap={};

const productMarker="product_docs/docs";


const outputFile = path.join(argv.source, "index.mdx");
let oldFileContent=""
if (fs.existsSync(outputFile)) {
    oldFileContent=fs.readFileSync(outputFile);
}

const newContent=processDirectory(argv.source, "")

if(oldFileContent!=newContent) {
    fs.writeFileSync(outputFile, newContent);
    const jsonOutputFile = path.join(argv.source,"index.json");
    fs.writeFileSync(jsonOutputFile,JSON.stringify(globalMap));
}




function processDirectory(sourceDir, prefix) {
    // Get basic stats for this directory

    var rootIndexTemplatePath = path.join(sourceDir, "index.mdx.src");
    var rootIndexPath = path.join(sourceDir, "index.mdx");
    var rootDir = fs.readdirSync(sourceDir);
    var remainRootDir = rootDir;

    var outputBuffer = ""

    var isTemplate = fs.existsSync(rootIndexTemplatePath) && fs.statSync(rootIndexTemplatePath).isFile()
    var isIndex = fs.existsSync(rootIndexPath) && fs.statSync(rootIndexPath).isFile()

    // Is this a directory with a template?

    if (isTemplate || isIndex) {
        var rootPath = isTemplate ? rootIndexTemplatePath : rootIndexPath;
        // Yes there is a template. Let's open that and get the navigation data
        rootContent = fs.readFileSync(rootPath).toString();
        digested = frontmatter(rootContent);
        var navItems = digested.attributes.navigation;
        if (prefix == "" && isTemplate) {
            outputBuffer = outputBuffer.concat(rootContent);
        } else {
            outputBuffer = outputBuffer.concat(`## ${digested.attributes.title}\n`);
        }
        if (navItems != undefined) { // If no navItems, fall back on directory order

            navItems.forEach((item) => {
                // Ok, now look for a directory of that name
                dirPath = path.join(sourceDir, item)
                // If it is a directory reference then process the directory
                if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
                    outputBuffer = outputBuffer.concat(processDirectory(dirPath, item));
                    // Remove from remaining items to process
                    var index = remainRootDir.indexOf(item);
                    if (index != -1) { remainRootDir.splice(index, 1) }
                } else {
                    // Assume it's an mdx file reference, process the file
                    filepath = path.join(sourceDir, item + ".mdx")
                    if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
                        outputBuffer = outputBuffer.concat(parse(prefix, filepath));
                        // Remove from remaining items to process
                        var index = remainRootDir.indexOf(item + ".mdx");
                        if (index != -1) { remainRootDir.splice(index, 1) }
                    }
                }
            }
            );
        }
    }

    // Whatever, we need to process any remaining files in the directory
    // These will be in remainRootDir to process
    var index = remainRootDir.indexOf("index.mdx");
    if (index != -1) {
        remainRootDir.splice(index, 1)
    }
    var index = remainRootDir.indexOf("index.mdx.src");
    if (index != -1) {
        remainRootDir.splice(index, 1)
    }

    remainRootDir.forEach((item) => {
        dirPath = path.join(sourceDir, item)
        if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
            outputBuffer = outputBuffer.concat(processDirectory(dirPath, prefix));
            var index = remainRootDir.indexOf(item);
            if (index != -1) { remainRootDir.splice(index, 1) }
        } else {
            filepath = path.join(sourceDir, item)
            if (fs.existsSync(filepath) && fs.statSync(filepath).isFile()) {
                if (item.endsWith(".mdx")) {
                    outputBuffer = outputBuffer.concat(parse(prefix, filepath));
                    var index = remainRootDir.indexOf(item);
                    if (index != -1) {
                        remainRootDir.splice(index, 1)
                    }
                }
            }
        }

    });

    return outputBuffer;
}

function parse(prefix, filepath) {
    itemCleaned = path.join(prefix, path.basename(filepath, ".mdx"));
    content = fs.readFileSync(filepath).toString();
    digested = frontmatter(content);

    indexDepth = digested.attributes.indexdepth ? digested.attributes.indexdepth : 5;
    firstIndex = -1;
    rootIsHeading = digested.attributes.rootisheading;
    lexedMD = marked.lexer(digested.body);
    buffer = `\n\n## [${digested.attributes.title}](${itemCleaned})\n`;
    lexedMD.forEach((element) => {
        if (element.type == "heading" && element.depth <= indexDepth) {
            if (firstIndex == -1) { firstIndex = element.depth }
            if (rootIsHeading && element.depth == firstIndex) {
                buffer = buffer.concat(`### [${element.text}](${itemCleaned}#${anchorize(element.text)})\n`);
            } else {
                //console.log(element.text,filepath,element.depth,firstIndex,rootIsHeading)
                let shortname=anchorize(element.text)
                buffer = buffer.concat(`${"  ".repeat(element.depth - firstIndex - (rootIsHeading ? 1 : 0))} * [${element.text}](${itemCleaned}#${shortname})\n`);
                globalMap[shortname]=makeAbsoluteReferenceLink(filepath,shortname);
                //console.log(globalmap);
            }
        }
    });
    return buffer;
}

function anchorize(text) {
    return text.toLowerCase().replace(/[\.`]/g, '').replace(/\s/g, '-');
}

function makeAbsoluteReferenceLink(filepath,shortname) {
    let parsed=path.parse(filepath);
    let cleanFilename=path.join(parsed.dir,parsed.name);
    let referenceBase=cleanFilename.slice(cleanFilename.indexOf(productMarker)+productMarker.length).replace(/\/[0-9]+\//,"/latest/")
    return `${referenceBase}#${shortname}`;
}
