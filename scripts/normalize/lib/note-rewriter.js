// Rewrite the not-very-well-converted RST alerts to admonitions

const visit = require('unist-util-visit')
const mdast2string = require('mdast-util-to-string')

module.exports = () => transformer;

function transformer(tree, file) {

  visit(tree, (node, index, parent) => {
    if (!node.type.startsWith("jsx")) return;

    let replacement = null;
    visit(node, "element", (node, index, parent) => {
      if (!node.properties?.className?.includes("note")) return;

      let title = [];
      visit(node, "element", (node, index, parent) => {
        if (node.properties?.className?.includes("title"))
          title = node.children;
      });

      replacement = {
        type: "admonition",
        keyword: "Note",
        quoted: false,
        "indentSize": 4,
        children: [
          { 
            type: "admonition-heading",
            children: [{ type: "text", value: mdast2string({children: title})}]
          },
          { 
            type: "admonition-content",
            children: node.children.filter(node => !node.type.startsWith("jsx")),
          },
        ],
      };
    });

    if (replacement)
    {
      parent.children.splice(index, 1, replacement);
    }
  });
}