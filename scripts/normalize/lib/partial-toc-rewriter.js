// Normally, the contents of toctree divs are used only during the RST conversion process,
// to generate filesystem structure and left-hand navigation
// HOWEVER... In some cases, these were integral to the text of the page. That is, they would
// be introduced by the preceding paragraph, might contain only *some* of the entries below them,
// and would leave an index page looking... odd... when omitted.
// Example:
//
//    PEM provides an easy to use environment in which to manage restore points, import/export tasks, and organize vacuum/analyze management.
//
//    Contents:
//
//    A powerful, but user-friendly interface provides an easy way to use take backups and create copies of databases or database objects.
//
//    Contents:
//
// ...where "Contents:" should be followed by the ToC entries that are listed in the div.
//
// This script takes these and generates... A list of links. That's not great. But it's a start.
// If more interesting results are desired, can be trivially adjusted.
//

const visit = require("unist-util-visit");
const mdast2string = require("mdast-util-to-string");
const path = require("path");
const glob = require("fast-glob");
const fs = require("fs");
module.exports = () => transformer;

function transformer(tree, file) {
  let tocCount = 0;
  visit(tree, (node, index, parent) => {
    if (!node.type.startsWith("jsx")) return;

    visit(node, "element", (node) => {
      if (!node.properties?.className?.includes("toctree")) return;

      ++tocCount;
    });
  });
  if (tocCount < 2) return;

  visit(tree, (node, index, parent) => {
    if (!node.type.startsWith("jsx")) return;

    let replacement = null;
    visit(node, "element", (node) => {
      if (!node.properties?.className?.includes("toctree")) return;

      let entries = mdast2string(node)
        .split(" ")
        .map((s) => s.trim());
      let context =
        entries.length && index > 0 && mdast2string(parent.children[index - 1]);

      replacement = {
        type: "list",
        ordered: false,
        children: entries.map((item) =>
          getListItemForName(item, path.dirname(file.path)),
        ),
      };

      console.error(
        `Double-TOC in ${file.path}:${node.position.start.line}:${node.position.start.column}` +
          "\n" +
          entries.join() +
          "\nCONTEXT: " +
          context,
      );
    });

    if (replacement) {
      parent.children.splice(index, 1, replacement);
    }
  });

  function getListItemForName(name, basepath) {
    let matches = glob.sync([
      basepath + "/*_" + name + "/index.mdx",
      basepath + "/??_" + name + ".mdx",
    ]);
    if (!matches.length) {
      console.error("NO MATCH for " + name + " in " + basepath);
      return {
        type: "listItem",
        children: [{ type: "text", value: "NOT FOUND: " + name }],
      };
    }

    const title = getTitleForFile(matches[0]);
    const url = path.basename(matches[0].replace(/(\/index)?\.mdx$/, ""));
    return {
      type: "listItem",
      children: [
        {
          type: "link",
          url: url,
          children: [
            {
              type: "text",
              value: title,
            },
          ],
        },
      ],
    };
  }

  function getTitleForFile(filename) {
    return (fs.readFileSync(filename, "utf8").match(/^title: (.+)$/m) || [
      "",
    ])[1]
      .trim()
      .replace(/^["']|['"]$/g, "");
  }
}
