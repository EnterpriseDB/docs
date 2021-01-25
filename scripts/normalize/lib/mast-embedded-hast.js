const unified = require('@mdx-js/mdx/node_modules/unified');
const visit = require('unist-util-visit');
const rehypeParse = require('rehype-parse');
const hast2html = require('hast-util-to-html');

function remarkMdxEmbeddedHast()
{
  const compiler = this.Compiler;
  if (compiler && compiler.prototype && compiler.prototype.visitors)
    attachCompiler(compiler);
  return transformer;

  function transformer(tree, file)
  {
    visit(tree, 'jsx', visitor);

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
        
        if (isUsableHast(hast))
        {
          node.type = "jsx-hast";
          node.children = hast.children;
        }            
      }
    }
  }

  // Sometimes JSX is actually JSX
  // But also... 
  // Markdown prescribes a few different ways of embedding HTML, and realistically this only works
  // for some of them; in particular, start and end tags separated by Markdown probably aren't gonna work
  // Would like to handle that better, but for now the crucial thing is safety: if we can't have a self-contained
  // tree, don't try.
  function isUsableHast(root)
  {
    // no children? no tree.
    if (!root.children || !root.children.length) return false;
    // more than one child? Pretty good bet this is usable.
    if (root.children.length > 1) return true;
    // For a single child, check the position of the closing tag; if that doesn't exist, we can't handle it (yet)
    return root.children[0].data && root.children[0].data.position && root.children[0].data.position.closing;

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
      // if nothing was parsed out, there's no point in trying to recreate it; just use what was there
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

module.exports = remarkMdxEmbeddedHast;
