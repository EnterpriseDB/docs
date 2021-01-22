const unified = require('@mdx-js/mdx/node_modules/unified')
const visit = require('unist-util-visit')
const rehypeParse = require('rehype-parse')
const hast2html = require('hast-util-to-html')

module.exports = remarkMdxEmbeddedHast;

function remarkMdxEmbeddedHast()
{
  const compiler = this.Compiler;
  if (compiler && compiler.prototype && compiler.prototype.visitors)
    attachCompiler(compiler);
  return transformer;

  function transformer(tree, file)
  {
    visit(tree, 'jsx', visitor)

    function visitor(node)
    {
      if (/^\s*</.test(node.value))
      {
        var hast = unified()
          .use(rehypeParse, {
            emitParseErrors: true,
            verbose: true,
            fragment: true,
          })
          .parse(node.value);
        if (hast.children && hast.children.length
          && (hast.children.length > 1 || 
            (hast.children[0].data && hast.children[0].data.position && hast.children[0].data.position.closing)))
        {
          node.type = "jsx-hast";
          node.children = hast.children;
        }            
      }
    }
  }

  function attachCompiler(compiler)
  {
    const proto = compiler.prototype;
    const opts = {
      allowDangerousHtml:true, 
      allowDangerousCharacters: true,
      closeSelfClosing: true,
      entities: {useNamedReferences: true},
    };

    proto.visitors = Object.assign({}, proto.visitors, {
      "jsx-hast": hast,
    })

    function hast(node)
    {
      if (!node.children)
      {
        return (node.value||'').trim();
      }

      var newHtml = node.children.map(n => hast2html(n, opts)).join('');
      var hastCompHtml = unified()
      .use(rehypeParse, {
        emitParseErrors: true,
        verbose: true,
        fragment: true,
      })
      .parse(node.value||'').children.map(n => hast2html(n, opts)).join('');

      // if logically unchanged, write the original: too easy to screw this up otherwise
      if (newHtml === hastCompHtml)
        return (node.value||'').trim();

      // this really only works for html right now, so escape stuff that would be interpreted as jsx
      newHtml = newHtml.replace(/[{]/g, '&#123;');
      
      return newHtml;
    }
  }

}
