const unified = require('@mdx-js/mdx/node_modules/unified');
const visit = require('unist-util-visit');
const is = require('unist-util-is');
const rehypeParse = require('rehype-parse');
const hast2mdast = require('hast-util-to-mdast');
const h2mAll = require('hast-util-to-mdast/lib/all');

const rehypeFormat = require('rehype-format');

function tableFormatter()
{
  return function(tree, file)
  {
    visit(tree, 'jsx-hast', function(hastRoot, index, parent)
    {
      // keep this simple - extracting tables from complicated blocks of HTML is possible, but unnecessary
      if (hastRoot.children && hastRoot.children.length === 1
        && hastRoot.children[0].tagName === 'table')
      {
        let table = hastRoot.children[0];
        let converted = convertTable(table);
        if (converted)
          parent.children.splice(index, 1, converted);
        else // if we couldn't convert, at least it can be pretty HTML
          rehypeFormat()(table);
      }
    });
  };
}

function convertTable(hastTable)
{
  // fail if any colspan or rowspan
  let convertible = true;
  visit(hastTable, node => {
    if (node.properties && (node.properties.colSpan || node.properties.rowSpan))
      convertible = false;
  });
  if (!convertible) return null;

  // this does all the heavy lifting
  mdast = hast2mdast(hastTable);
  
  // we kinda need paragraphs in cells; simulate with linebreak elements
  visit(mdast, function(node, index, parent)
  {
    if (is(node, 'paragraph'))
    {
      let br = {type: 'jsx', value: '<br />'};
      let replace = index > 0
        ? [br, br, ...node.children]
        : node.children;
      parent.children.splice(index, 1, ...replace);
    }
  });

  return mdast;
}

module.exports = tableFormatter;
