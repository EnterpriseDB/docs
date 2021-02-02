// Rewrite the not-very-well-converted RST alerts to markdown quotes with titles in bold

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
        type: "blockquote",
        children: [
          { type: "strong", children: [...title, {type: 'text', value: ':'}], },
          ...node.children.filter(node => !node.type.startsWith("jsx")),
        ],
      };
    });

    if (replacement)
    {
      parent.children.splice(index, 1, replacement);
    }
  });
}