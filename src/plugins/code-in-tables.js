//
// This is a hack around https://github.com/remarkjs/remark/issues/583
// Pipe characters within inline code in table cells need to be backslash escaped to avoid breaking the table
// Buuut, inline code parser doesn't know this, so gotta fix it up after the fact
// The inline code stringifier apparently doesn't know that they need to be escaped either, so gotta fix that TOO
// This plugin does both of those: the transform step handles the former, while the monkeypatch to the compiler
// handles the latter.
// For Gatsby, only the former matters - but for the normalization scripts, the latter is also critical.
//

const visit = require("unist-util-visit-parents");

function remarkMonkeypatchCodeInTables() {
  const escapedPipeRegex = /\\\|/g;
  // this is a bit wrong; would prefer negative lookbehind. But already been bitten once by Safari today. Who's idea was it, to build a browser with teeth?
  const unescapedPipeRegex = /([^\\])\|/g;

  const compiler = this.Compiler;
  if (compiler?.prototype?.visitors) attachCompiler(compiler);

  return (tree, file) => {
    visit(tree, "inlineCode", visitor);

    function visitor(node, ancestors) {
      if (
        ancestors.some((n) => n.type === "table") &&
        escapedPipeRegex.test(node.value)
      ) {
        node.value = node.value.replace(escapedPipeRegex, "|");
      }
    }
  };

  function attachCompiler(compiler) {
    const proto = compiler.prototype;
    const origCode = proto.visitors["inlineCode"];
    const origCell = proto.visitors["tableCell"];

    proto.visitors = Object.assign({}, proto.visitors, {
      inlineCode: tableCode,
      tableCell: tableCell,
    });

    function tableCell(node) {
      visit(node, "inlineCode", (n) => {
        n.inTable = true;
      });
      return origCell.apply(this, arguments);
    }
    function tableCode(node) {
      if (node.inTable && unescapedPipeRegex.test(node.value))
        node.value = node.value.replace(unescapedPipeRegex, "$1\\|");
      return origCode.apply(this, arguments);
    }
  }
}

module.exports = remarkMonkeypatchCodeInTables;
