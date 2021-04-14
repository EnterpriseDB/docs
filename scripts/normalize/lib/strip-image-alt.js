const visit = require('unist-util-visit')
const mdast2string = require('mdast-util-to-string')

module.exports = () => transformer;

function transformer(tree, file) {

  visit(tree, "image", (node, index, parent) => {
    node.alt = node.alt.replace(/^ ?\*|\* ?$/g, '');
  });
}