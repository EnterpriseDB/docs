// Rewrite the converted RST notes to Admonitions

const visit = require('unist-util-visit')
const mdast2string = require('mdast-util-to-string')
const squeeze = require('mdast-squeeze-paragraphs')

function noteReRewriter() {
    const compiler = this.Compiler;
    if (compiler?.prototype?.visitors)
      attachCompiler(compiler);
  
    return (tree, file) => {
        visit(tree, ["blockquote", "paragraph"], (node, index, parent) => {
            if (node.type === "paragraph" && parent.type === "blockquote") return;
            
            const {titleNode, titleParent} = extractNoteTitle(node);
            if (!titleNode) return;

            let children = node.children;
            trimChildren({children});
            while (!mdast2string({children}).trim() && index+1 < parent.children.length)
            {
                children = [parent.children[index+1]];
                parent.children.splice(index+1, 1);
                trimChildren({children});
            }

            // wrap in paragraph if splitting a paragraph
            if (titleParent === node)
            {
                children = [{
                    type: "paragraph",
                    children,
                }];
            }

            squeeze({children});

            const replacement = {
                type: "admonition",
                keyword: "note",
                children,
            };
            parent.children.splice(index, 1, replacement);
        });
    };

    function trimChildren(parent)
    {
        while (parent.children?.length && !parent.children[0]?.value)
            parent = parent.children[0];
        if (parent.children.length)
            parent.children[0].value = parent.children[0].value.replace(/^[ :]+/, '');
    }

    function extractNoteTitle(parent)
    {
        while (parent.children?.length && !(parent.children[0]?.type === "strong" && /^ *note:? *$/i.test(mdast2string(parent.children[0]))))
            parent = parent.children[0];
        return {
            titleNode: parent.children?.splice(0,1)[0], 
            titleParent: parent
        };
    }

    function attachCompiler(compiler)
    {
      const proto = compiler.prototype;
  
      proto.visitors = Object.assign({}, proto.visitors, {
        "admonition": stringify,
      });
    }

    function stringify(node)
    {
        const lines = this.block(node).split('\n');
        return "!!! Note\n" + lines.map(l => l.length ? "    " + l : l).join('\n');
    }
}

module.exports = noteReRewriter;