const unified = require("@mdx-js/mdx/node_modules/unified");
const visit = require("unist-util-visit");
const is = require("unist-util-is");
const rehypeParse = require("rehype-parse");
const hast2mdast = require("hast-util-to-mdast");
const h2mAll = require("hast-util-to-mdast/lib/all");

const rehypeFormat = require("rehype-format");

function tableFormatter() {
  return function (tree, file) {
    visit(tree, "jsx-hast", function (hastRoot, index, parent) {
      const table = getTable(hastRoot);
      if (table) {
        let converted = convertTable(table);
        if (converted) parent.children.splice(index, 1, converted);
        // if we couldn't convert, at least it can be pretty HTML
        else rehypeFormat()(table);
      }
    });
  };
}

function getTable(root) {
  // keep this simple - extracting tables from complicated blocks of HTML is possible, but unnecessary
  // we have two scenarios we care about here:
  //   - a table, all by itself (<table>...</table>)
  //   - a table wrapped in <div class="table-with-scroll"></div>
  let table = null;
  for (let node of root.children) {
    if (node.type === "text" && !node.value.trim()) continue;
    if (node.tagName === "table") table = node;
    else if (
      node.tagName === "div" &&
      node?.properties?.className?.includes("table-with-scroll")
    )
      table = getTable(node);
    else {
      table = null;
      break;
    }
  }

  return table;
}

function convertTable(hastTable) {
  // fail if any colspan or rowspan
  let convertible = true;
  visit(hastTable, (node) => {
    if (node.properties && (node.properties.colSpan || node.properties.rowSpan))
      convertible = false;
  });
  if (!convertible) return null;

  const options = {
    handlers: {
      br: (h, node) => {
        return { type: "jsx", value: "<br />" };
      },
    },
  };

  // this does all the heavy lifting
  mdast = hast2mdast(hastTable, options);
  const br = { type: "jsx", value: "<br />" };
  visit(mdast, function (node, index, parent) {
    // strip blockquotes; can't support those
    if (is(node, "blockquote")) {
      parent.children.splice(index, 1, br, ...node.children);
    }
    // we kinda need paragraphs in cells; simulate with linebreak elements
    if (is(node, "paragraph")) {
      let replace = index > 0 ? [br, br, ...node.children] : node.children;
      if (index === parent.children.length - 1) replace.push(br);
      parent.children.splice(index, 1, ...replace);
    }
  });

  return mdast;
}

module.exports = tableFormatter;
