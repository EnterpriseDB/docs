const visit = require("unist-util-visit-parents");
const {
  default: replacer,
  expressionRE,
} = require("../constants/expression-replacement.js");

// This plugin replaces shortcodes in the form {{name([product]).<type>}} with the actual name of the product
// The type of name must be one defined in products.js
function replaceExpressions() {
  const pipeline = this;
  attachParser(pipeline.Parser);

  // special-case for headers: we need to replace the expressions before the ToC is generated
  // annoyingly, the ToC is generated after parse, but before transformation - so the rest of this
  // plugin won't run in time.
  function attachParser(parser) {
    if (
      !parser ||
      !parser.prototype ||
      !parser.prototype.blockTokenizers ||
      !parser.prototype.blockMethods
    )
      return;

    // replace the heading tokenizer with one that keeps track of when we're in a heading,
    // and allow us to replace expressions in headings before the ToC is generated

    const parseHeading = (original) => {
      return function (eat, value, silent) {
        this.inHeading = true;
        const ret = original.call(this, eat, value, silent);
        this.inHeading = false;
        return ret;
      };
    };

    const parseText = (original) => {
      return function (eat, value, silent) {
        if (!this.inHeading || silent) {
          return original.call(this, eat, value, silent);
        }

        replacerEat.now = () => eat.now.apply(eat);
        replacerEat.file = eat.file;

        return original.call(this, replacerEat, value, silent);

        function replacerEat(value) {
          const apply = eat(value);
          return (node, parent) => {
            node.value = replacer({
              text: value,
              filename: eat.file.path,
              position: node.position,
            });
            return apply(node, parent);
          };
        }
      };
    };

    parser = parser.prototype;
    parser.blockTokenizers.setextHeading = parseHeading(
      parser.blockTokenizers.setextHeading,
    );
    parser.blockTokenizers.atxHeading = parseHeading(
      parser.blockTokenizers.atxHeading,
    );
    parser.inlineTokenizers.text = parseText(parser.inlineTokenizers.text);
  }

  return (tree, file) => {
    visit(tree, ["text", "code", "inlineCode"], visitor);

    function visitor(node, ancestors) {
      if (!node.value?.includes("{{")) return;
      // special-case for code:
      // we don't parse JSX components inside code, so need to replace now
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
