const fs = require('fs');
const parseArgs = require('minimist');
const matter = require('gray-matter');
const MarkdownIt = require('markdown-it');
const njk = require('nunjucks');
const path = require('path');



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
            if (line!=='') {
                if (line.startsWith('* [')) {
                    // This is a line with a link
                    // For now, we drop links completely
                } else if(line.indexOf(':') > 0 ) {
                    const colon=line.indexOf(':');
                    let key = line.slice(0,colon);
                    if (key.startsWith('* ')) {
                        key = key.slice(2);
                    }
                    const value = line.slice(colon+1).trim();

                    parsedContent.push({[slugify(key)]:value});
                 } else {
                    parsedContent.push(line);
                 }
                }
            });
        
        if (heading === '') {
            return { ["open"]:parsedContent };
        }

        return { [slugify(heading)]: parsedContent };
    });

    let docMap={}

    // add the parsedMatter data to the docmap
    Object.keys(parsedMatter.data).forEach(key => {
        docMap["frontmatter_"+key] = parsedMatter.data[key];
    });

    const filename=path.basename(filePath,".mdx");
    
    docMap["filename"]=filename;

    // add the flattened sections to the docMap
    sectionDicts.forEach(section => {
        Object.keys(section).forEach(key => {
            let value = section[key];
            if (Array.isArray(value)) { 
                for (let i=0; i<value.length; i++) {
                    if (typeof value[i] === 'object') {
                        Object.keys(value[i]).forEach(subkey => {
                            docMap[key+'_'+subkey] = value[i][subkey];
                        })
                    } else {
                        docMap[key+'_'+i] = value[i];
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
        .replace(/[-]+/g,'_')
        .replace(/\s+/g, '_')
        .replace(/[^\w-]+/g, '')
        ;
}

var argv = parseArgs(process.argv.slice(2));

if (argv.source == undefined) {
    console.log("Need --source");
    process.exit(1);
}

const sourceAdvisoriesDir=argv.source;

// Iterate over all the files that start cve and end with mdx in the source directory, and parse them

njk.configure({ autoescape: false });

const detailTemplate=`<tr><td>
<details><summary><h3 style="display:inline"> {{ frontmatter_navTitle }} </h3>
<span>
&nbsp;&nbsp;<a href="advisories/{{ filename }}">Read Advisory</a>
&nbsp;&nbsp;Updated: </span><span>{{ open_last_updated }} </span>
<h4>{{ frontmatter_title }}
</h4>
<h5> {{ frontmatter_TLDRAffects }}</h5>
</summary>
<hr/>
<em>Summary:</em>&nbsp;
{{ summary_0 }}
<br/>
<a href="{{ advisory+filename }}">Read More...</a>
</details></td></tr>`;

console.log("<html><body>");
console.log("<table>");

const files = fs.readdirSync(sourceAdvisoriesDir).filter(fn => fn.startsWith('cve') && fn.endsWith('mdx'));
files.sort().reverse();

files.forEach(file => {
     const docMap = parseMarkdownFile(path.join(sourceAdvisoriesDir,file));
     //console.log(JSON.stringify(docMap, null, 2));

     docMap["advisory"] = "advisories/";
    const res=njk.renderString(detailTemplate,docMap);
    console.log(res);
    });
console.log("</table>");
console.log("</body></html>")
//const docMap = parseMarkdownFile('/Users/dj/Sandbox/docs/advocacy_docs/security/advisories/cve202341114.mdx');
//console.log(JSON.stringify(docMap, null, 2));

