//
// This is a collection of dirty hacks to make working with HTML embedded in Markdown a bit easier
// ...consider yourself warned
//

const unified = require("@mdx-js/mdx/node_modules/unified");
const visit = require("unist-util-visit");
const nodeIs = require("unist-util-is");
const rehypeParse = require("rehype-parse");
const hast2html = require("hast-util-to-html");
var voidElements = require("html-void-elements");

function remarkMdxEmbeddedHast() {
  const compiler = this.Compiler;
  if (compiler && compiler.prototype && compiler.prototype.visitors)
    attachCompiler(compiler);
  return transformer;

  function transformer(tree, file) {
    visit(tree, "jsx", visitor);

    function visitor(node, index, parent) {
      if (/^\s*</.test(node.value)) {
        var hast = unified()
          .use(rehypeParse, {
            emitParseErrors: true,
            verbose: true,
            fragment: true,
          })
          .parse(node.value);

        if (isUsableHast(hast)) {
          node.type = "jsx-hast";
          node.children = hast.children;
        } else if (isOpeningTag(hast, node.value)) {
          let replacement = captureToEnd(node, index, parent, hast);
          if (replacement) {
            parent.children.splice(index, 1, replacement);
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
    function isUsableHast(root) {
      // no children? no tree.
      if (!root.children || !root.children.length) return false;
      // more than one child? Pretty good bet this is usable.
      if (root.children.length > 1) return true;
      // For a single child, check the position of the closing tag; if that doesn't exist,
      // we can't handle it unless this specific sort of element doesn't need one
      return (
        root.children[0].data?.position?.closing ||
        voidElements.includes(root.children[0].tagName?.toLowerCase())
      );
    }

    // ok, the other scenario that's useful to handle here is a mixture of HTML
    // and Markdown. This can be inline (the 3<sup>rd</sup> man) or block content -
    // AKA, a lone opening tag, hopefully with a closing tag later on
    // if self-closing or a known-void, ignore for now to avoid stepping on JSX
    function isOpeningTag(root, sourceHtml) {
      // an opening tag has one child with no closing tag
      if (root.children?.length !== 1) return false;
      // gotta actually *be* an element
      if (root.children[0].type !== "element") return false;
      // isn't self-closing (this test may need work)
      if (/<[^>]+\/>/.test(sourceHtml)) return false;
      // and isn't a tag that doesn't need to close in HTML (which will probably break JSX, tbf)
      if (voidElements.includes(root.children[0].tagName?.toLowerCase()))
        return false;

      // of course, also shouldn't have children, and shouldn't have a closing
      return (
        !root.children[0]?.children?.length &&
        !root.children[0]?.data?.position?.closing
      );
    }

    function captureToEnd(node, index, parent, hast) {
      const tagName = hast.children[0].tagName;
      const valueToMatch = `</${tagName}>`;

      let endIndex = index + 1;
      while (
        endIndex < parent.children.length &&
        parent.children[endIndex].value !== valueToMatch
      ) {
        if (parent.children[endIndex].type === "jsx")
          visitor(parent.children[endIndex], endIndex, parent);
        ++endIndex;
      }

      const end = parent.children.splice(endIndex, 1)[0];
      if (!end) return null;

      let replacement = {
        type: "jsx-hast-embedded-mdast",
        children: hast.children,
        // this may be a bit too simplistic
        block: node.position.end.line !== end.position.start.line,
      };

      replacement.children[0].children = parent.children.splice(
        index + 1,
        endIndex - index - 1,
      );

      return replacement;
    }
  }

  // rewire stringify to work with the crazy crap we did above
  // this will ALL need to be changed if we upgrade to 9.0.0+
  function attachCompiler(compiler) {
    const proto = compiler.prototype;
    const opts = {
      allowDangerousHtml: true,
      allowDangerousCharacters: true,
      closeSelfClosing: true,
      entities: { useNamedReferences: true },
    };

    proto.visitors = Object.assign({}, proto.visitors, {
      "jsx-hast": hast,
      "jsx-hast-embedded-mdast": hastMdast,
    });

    function hast(node) {
      // if nothing was parsed out, there's no point in trying to recreate it; just use what was there
      if (!node.children) {
        return (node.value || "").trim();
      }

      var newHtml = node.children.map((n) => hast2html(n, opts)).join("");
      var hastCompHtml = unified()
        .use(rehypeParse, {
          emitParseErrors: true,
          verbose: true,
          fragment: true,
        })
        .parse(node.value || "")
        .children.map((n) => hast2html(n, opts))
        .join("");

      // if logically unchanged, write the original: too easy to screw this up otherwise
      if (newHtml === hastCompHtml) return (node.value || "").trim();

      // this really only works for html right now, so escape stuff that would be interpreted as jsx
      newHtml = newHtml.replace(/[{]/g, "&#123;");

      return newHtml;
    }

    function hastMdast(node) {
      let content = "";

      if (node.block) {
        content = this.block(node.children[0]).replace(/^\n*|\n*$/g, "");
        if (content.length) content = "\n" + content + "\n";
        content = "\n" + content + "\n";
      } else {
        content = this.all(node.children[0]).join("");
      }

      const endTag = `</${node.children[0].tagName}>`;
      const mdastChildren = node.children[0].children;

      node.children[0].children = [];
      let container = hast2html(node.children[0], opts);
      node.children[0].children = mdastChildren;

      return container.replace(endTag, content + endTag);
    }
  }
}

module.exports = remarkMdxEmbeddedHast;
