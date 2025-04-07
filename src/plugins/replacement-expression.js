const visit = require("unist-util-visit-parents");
const { expressionRE } = require("../constants/expression-replacement.mjs");
let replacer = null;
let shortcodeRE = null;
import("../constants/expression-replacement.mjs").then(
  (module) => (
    (shortcodeRE = module.expressionRE), (replacer = module.default)
  ),
);

// This plugin replaces shortcodes in the form {{name([product]).<type>}} with the actual name of the product
// The type of name must be one defined in products.js
function replaceExpressions() {
  return (tree, file) => {
    visit(tree, ["text", "code", "inlineCode"], visitor);

    function visitor(node, ancestors) {
      if (!node.value?.includes("{{")) return;
      if (["code", "inlineCode"].includes(node.type)) {
        node.value = replacer({
          text: node.value,
          filename: file.path,
          position: node.position,
        });
        return;
      }

      const addNodes = [];
      let input = node.value;
      while (input.length) {
        const result = expressionRE.exec(input);
        if (!result) {
          addNodes.push({
            type: "text",
            value: input,
          });
          break;
        }
        const before = input.slice(0, result.index); // text before the match
        const after = input.slice(result.index + result[0].length); // text after the match
        const { command, product, type } = result.groups;
        let jsx = "";
        switch (command) {
          case "name":
            jsx = `<name productShortcode={${JSON.stringify(product)}} type={${JSON.stringify(type)}} />`;
            break;
          case "version":
            jsx = `<version productShortcode={${JSON.stringify(product)}} type={${JSON.stringify(type)}} />`;
            break;
          default:
            before = before + result[0];
        }
        if (before) addNodes.push({ type: "text", value: before });
        if (jsx)
          addNodes.push({
            type: "jsx",
            value: jsx,
          });
        input = after;
      }
      const index = ancestors.at(-1).children.indexOf(node);
      ancestors.at(-1).children.splice(index, 1, ...addNodes); // replace the original node with the new nodes
      return index + addNodes.length; // return the new index to continue visitings
    }
  };
}

module.exports = replaceExpressions;
