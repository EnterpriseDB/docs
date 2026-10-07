// HTML comments (<!-- ... -->) are not valid in MDX - strip them out completely
// ensure tags are lowercase

import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import { fromMarkdown } from 'mdast-util-from-markdown';
import admonitions from "remark-admonitions";
import remarkDeflist from "remark-deflist";
import visit from "unist-util-visit";

export const process = async (filename, content) => {
  const processorInput = unified()
    .use(remarkParse)
    .use(admonitions, {
      tag: ":::",
      icons: "none",
      infima: true,
      customTypes: {
        seealso: "note",
        hint: "tip",
        interactive: "interactive",
      },
    })
    .use(remarkFrontmatter)
    .use(remarkDeflist)
    .use(mdx)
    .use(cleanupHtml)
    .use(admonitionFixer);

  const processorOutput = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, {
      tag: "!!!",
      icons: "none",
      infima: true,
      customTypes: {
        seealso: "note",
        hint: "tip",
        interactive: "interactive",
      },
    })
    .use(remarkFrontmatter)
    .use(mdx);

  let file = toVFile({ path: filename, contents: content });
  let mdast = await processorInput.parse(file);
  mdast = await processorInput.run(mdast, file);
  file.contents = processorOutput.stringify(mdast, file);

  return {
    newFilename: filename,
    newContent: file.contents.toString(),
  };
};

function cleanupHtml() {
  function eatSubsequentCodeBlocks(node, index, parent) {
    const newNodes = [];
    let nextIndex = index + 1;
    while (nextIndex < parent.children.length) {
      const nextNode = parent.children[nextIndex];
      if (nextNode.type === "code") {
        newNodes.push(fromMarkdown(nextNode.value));
        nextIndex++;
      } else {
        break;
      }
    }
    parent.children.splice(index + 1, nextIndex - index - 1);
    return newNodes;
  }
  return (tree) => {
    visit(tree, "descriptionlist", (node, index, parent) => {
      // remove descriptionList nodes as follows:
      // - if the descriptionList has a single item, replace it with its children, with the descriptionTerm as a bold paragraph and the descriptionDetails as a paragraph
      if (node.children.filter((child) => child.type === "descriptionterm").length === 1) {
        const newNodes = [];
        for (const child of node.children) {
          if (child.type === "descriptionterm") {
            const term = child;
            newNodes.push({
              type: "paragraph",
              children: term.children.at(0)?.type === "strong" ? term.children : [
                { type: "strong", children: term.children },
              ],
            });
          }
          else if (child.type === "descriptiondetails") {
            const details = child;              
            newNodes.push({
              type: "paragraph",
              children: details.children,
            });
          }
          else if (child.type === "paragraph") {
            newNodes.push(child);
          }
        }
        newNodes.push(...eatSubsequentCodeBlocks(node, index, parent));
        parent.children.splice(index, 1, ...newNodes);
        return index + newNodes.length;
      } else {
        // - otherwise, replace it with an unordered list, wherein each descriptionterm is a bold list item and each subsequent descriptiondetails is a paragraph child of that list item
        const newChildren = [];
        for (let childIndex = 0; childIndex < node.children.length; childIndex++) {
          const item = node.children[childIndex];
          if (item.type === "descriptionterm") {
            newChildren.push({
              type: "listItem",
              children: [{type: "paragraph", children: 
                item.children.at(0)?.type === "strong" ? item.children : [{ type: "strong", children: item.children}]}],
            });
          }
          else if (item.type === "descriptiondetails") {
            if (!newChildren.length)
              newChildren.push({type: "listItem", children: []});
            newChildren.at(-1).children.push({ type: "paragraph", children: item.children });
            newChildren.at(-1).children.push(...eatSubsequentCodeBlocks(item, childIndex, node));
          }
          else {
            console.error("\n\n\nUnexpected child of descriptionlist: " + JSON.stringify(item, null, 2));
          }
        }
        if (newChildren.length > 0)
          newChildren.at(-1).children.push(...eatSubsequentCodeBlocks(node, index, parent));
        node.type = "list";
        node.children = newChildren;
      }
    });
            
    visit(tree, "jsx", (node) => {
      // todo: use HAST parser here - this is not reliable

      // strip (potentially NON-EMPTY) HTML comments - these are not valid in JSX
      node.value = node.value.replace(/(?=<!--)([\s\S]*?)-->/g, "");

      // lower-case HTML tags
      node.value = node.value.replace(/<(\/*)(\w+)([^>]*)>/g, (match, close, tag, rest) => `<${close}${tag.toLowerCase()}${rest}>`)
    });
  };
}


function admonitionFixer() {
  return async (tree, file) => {
    visit(tree, ['admonition-heading', 'admonition-content'], (node, index, parent) => {
      if (node.type === 'admonition-heading') {
        const children = node.children[0]?.data?.hName === "h5" ? node.children[0].children : node.children;
        // strip square brackets from titles
        if (children && children[0].type === 'linkReference') {
          children.splice(0, 1, ...children[0].children);
        }
      }
      else {
        // if the contents of the admonition was indented AND fenced, the contents will be wrapped in a code fence node - unwrap it
        if (node.children?.length === 1 && node.children[0].type === 'code') {
          const codeNode = node.children[0];
          const parsed = unified()
            .use(remarkParse)
            .use(mdx)
            .parse(codeNode.value);
          // splice out the code node, and insert the parsed children in its place
          node.children.splice(0, 1, ...parsed.children);
        }
      }
    });
  };
}
