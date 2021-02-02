//
// This is a collection of dirty hacks to make working with HTML embedded in Markdown a bit easier
// ...consider yourself warned
//

const visit = require('unist-util-visit-parents');

function remarkMonkeypatchCodeInTables()
{
  const escapedPipeRegex = /(?<!\\)\\\|/g;
  const unescapedPipeRegex = /(?<!\\)\|/g;
  const compiler = this.Compiler;
  if (compiler && compiler.prototype && compiler.prototype.visitors)
    attachCompiler(compiler);
  return transformer;

  function transformer(tree, file)
  {
    visit(tree, 'inlineCode', visitor);

    function visitor(node, ancestors)
    {
      if (ancestors.some(n => n.type === "table")
        && escapedPipeRegex.test(node.value))
      {
        node.value = node.value.replace(escapedPipeRegex, '|');
      }
    }
  }

  function attachCompiler(compiler)
  {
    const proto = compiler.prototype;
    const origCode = proto.visitors["inlineCode"];
    const origCell = proto.visitors["tableCell"];

    proto.visitors = Object.assign({}, proto.visitors, {
      "inlineCode": tableCode,
      "tableCell": tableCell,
    })

    function tableCell(node)
    {
      visit(node, "inlineCode", n => { n.inTable = true });
      return origCell.apply(this, arguments);
    }
    function tableCode(node)
    {
      if (node.inTable && unescapedPipeRegex.test(node.value))
        node.value = node.value.replace(unescapedPipeRegex, '\\|');
      return origCode.apply(this, arguments);
    }
  }

}

module.exports = remarkMonkeypatchCodeInTables;
