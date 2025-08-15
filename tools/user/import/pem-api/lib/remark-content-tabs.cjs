const unified = require("unified");
const html = require("rehype-parse");
const visit = require("unist-util-visit");

module.exports = (config = { tag: "===", type: "tab"}) => {
  return function () {
    attacher.call(this, config);
  };
};

const NEWLINE = "\n";

// escape regex special characters
function escapeRegExp(s) {
  return s.replace(new RegExp(`[-[\\]{}()*+?.\\\\^$|/]`, "g"), "\\$&");
}

function attacher(config) {
  const pipeline = this;
  const regex = new RegExp(
    `${escapeRegExp(config.tag)} ?(?: *(.*))?\n`,
    "i",
  );
  const escapeTag = new RegExp(escapeRegExp(`\\${config.tag}`), "g");

  attachParser(pipeline.Parser);
  attachCompiler(pipeline.Compiler);

  return hastFriendlyTransformer;

  function attachParser(parser) {
    if (
      !parser ||
      !parser.prototype ||
      !parser.prototype.blockTokenizers ||
      !parser.prototype.blockMethods
    )
      return;

    // add tokenizer to parser after fenced code blocks
    parser = parser.prototype;
    parser.blockTokenizers[config.type] = blockTokenizer;
    parser.blockMethods.splice(
      parser.blockMethods.indexOf("fencedCode") + 1,
      0,
      config.type,
    );
    parser.interruptParagraph.splice(
      parser.interruptParagraph.indexOf("fencedCode") + 1,
      0,
      [config.type],
    );
    parser.interruptList.splice(
      parser.interruptList.indexOf("fencedCode") + 1,
      0,
      [config.type],
    );
    parser.interruptBlockquote.splice(
      parser.interruptBlockquote.indexOf("fencedCode") + 1,
      0,
      [config.type],
    );
  }

  // the tokenizer is called on blocks to determine if there is an admonition present and create tags for it
  function blockTokenizer(eat, value, silent) {
    const ctx = this;
    checkParserEscapes(ctx);

    // stop if no match or match does not start at beginning of line
    const match = regex.exec(value);
    if (!match || match.index !== 0) return false;
    // if silent return the match
    if (silent) return true;

    const now = eat.now();
    const totalAvailableLength = value.length;
    let [opening, title] = match;
    const food = [];
    let content = [];
    let indentSize = match.index + (title ? Math.min(value.indexOf(title), 4) : 3);
    let minIndent = -1;
    let quoted = false;

    // We wish to treat a title that (after trimming, unquoting) is empty as
    // effectively the same as one that is unset (that is, fall back on tag)
    // regex produces null, so normalize that now.
    title = title === null ? "" : title;

    if (title) {
      title = title.trim();
      if (title.startsWith('"') || title.startsWith("'")) {
        title = title.slice(1, title.indexOf(title[0], 1));
        quoted = true;
      }
    }

    // consume lines until a closing tag
    let idx = 0,
      empties = 0,
      indented,
      foundEndTag = false,
      endIndent = false;
    while ((idx = value.indexOf(NEWLINE)) !== -1) {
      // grab this line and eat it
      const next = value.indexOf(NEWLINE, idx + 1);
      const line =
        next !== -1 ? value.slice(idx + 1, next) : value.slice(idx + 1);

      let indent = 0,
        empty = false;
      if (indented !== false) {
        let pos = 0;
        for (let c of line) {
          if (c === " ") indent += 1;
          else if (c === "\t") indent += 4 - (indent % 4);
          else break;
          ++pos;
        }
        empty = pos >= line.length;

        if (!indented && !empty) indented = indent >= indentSize;

        if (indented && indent >= indentSize && !empty) 
          minIndent = minIndent === -1 ? indent : Math.min(minIndent, indent);

        empties = empty ? empties + 1 : 0;
      }

      if (indented && indent < indentSize && !empty) {
        while (empties--) {
          value = food.pop() + NEWLINE + value;
          content.pop();
        }
        endIndent = true;
      }

      // the closing tag is NOT part of the content, but avoid matching a following tab
      const endTag = line.startsWith(config.tag),
        startsNew = regex.test(line + NEWLINE);

      if (endTag && startsNew) break;

      if (endIndent && !endTag) break;

      food.push(line);
      value = value.slice(idx + 1);

      // disambiguate an indented code block in a fenced tab
      if (endTag) {
        indented = false;
        foundEndTag = true;
        break;
      }

      content.push(line);
    }

    if (minIndent > indentSize)
      indentSize = minIndent;

    if (indented) {
      for (let i = 0; i < content.length; ++i) {
        let indent = 0,
          pos = 0;
        for (let c of content[i]) {
          if (c === " ") indent += 1;
          else if (c === "\t") indent += 4 - (indent % 4);
          ++pos;
          if (indent >= indentSize) break;
        }
        content[i] = content[i].slice(pos);
        ctx.offset[i + 1] = (ctx.offset[i + 1] || 0) + pos;
      }
    }

    // consume the processed tag and replace escape sequences
    const contentString = content.join(NEWLINE).replace(escapeTag, config.tag);
    const edibleString = opening + food.join(NEWLINE);
    const add = eat(edibleString);

    // detect common error: screwing up indent and/or forgetting to close fence
    // do quick check against the content in context first, then look at entire file length
    if (
      edibleString.length >= totalAvailableLength &&
      !indented &&
      edibleString.length + now.offset >= String(ctx.file).length
    ) {
      const warning =
        "Fenced tab ran until the end of the document - verify that it was properly closed or indented!";
      ctx.file.message(warning, eat.now());
      console.warn(`
${ctx.file.path}
  ${now.line}:${now.column} warning ${warning}`);
    } // also warn about just failing to close a fenced tab
    else if (contentString.length && !indented && !foundEndTag) {
      const warning =
        "Fenced tab with no closing tag - verify that it was properly closed or indented!";
      ctx.file.message(warning, eat.now());
      console.warn(`
${ctx.file.path}
  ${now.line}:${now.column} warning ${warning}`);
    }

    let titleOffset = title === "" ? -1 : opening.indexOf(title);
    if (titleOffset < 0)
      titleOffset = indentSize + (quoted ? 2 : 1);
    const titleNow = Object.assign({}, now, {
      column: now.column + titleOffset,
      offset: now.offset + titleOffset,
    });

    // parse the title in inline mode
    const titleNodes = {
      type: config.type + "-heading",
      children: ctx.tokenizeInline(
        title === "" && quoted ? "" : title,
        titleNow,
      ),
    };

    ++now.line;
    now.column = 1;
    now.offset += opening.length;

    // parse the content in block mode
    const exit = ctx.enterBlock();
    const contentNodes = {
      type: config.type + "-content",
      children: ctx.tokenizeBlock(contentString, now),
    };
    exit();

    return add({
      type: config.type,
      quoted,
      indentSize: indented ? indentSize : 0,
      spread: false,
      children: [titleNodes, contentNodes],
    });
  }

  function checkParserEscapes(context) {
    if (!context.escape.includes(config.tag[0]))
      context.escape.push(config.tag[0]);
  }

  function checkCompilerEscapes(compiler) {
    // these are the elements that tab parsing is
    // most likely to interfere with; ensure that they're written out
    // with the necessary escapes.
    const intercept = [
      "blockquote",
      "heading",
      "list",
      "html",
      "definition",
      "table",
      "paragraph",
    ];

    let originals = {},
      intercepted = false;

    const tagRegex = new RegExp("^" + escapeRegExp(config.tag), "gm");
    if (!intercepted) {
      for (let handlerName of intercept) {
        originals[handlerName] = compiler.prototype.visitors[handlerName];
        compiler.prototype.visitors[handlerName] = escape;
      }
      intercepted = true;
    }

    function escape(node) {
      let ret = originals[node.type].apply(this, arguments);
      ret = ret.replace(tagRegex, "\\$&");
      return ret;
    }
  }

  // allow round-tripping back to Markdown
  function attachCompiler(compiler) {
    if (!compiler || !compiler.prototype || !compiler.prototype.visitors)
      return;

    checkCompilerEscapes(compiler);

    compiler.prototype.visitors[config.type] = function (node) {
      const ctx = this;

      if (!node.children || !node.children.length) return;

      let heading = node.children.find((n) => n.type === config.type + "-heading");
      let content = node.children.find((n) => n.type === config.type + "-content");

      if (!heading) {
        console.error("Invalid tab node", node);
        return;
      }

      heading = ctx.all(heading).join("");
      content = content ? ctx.block(content) : "";

      // no good way to distinguish between a content-free indented tab
      // and a fenced tab that includes *the rest of the document*
      // so if no content, make sure to write as fenced.
      if (!content) node.indentSize = 0;

      if (content && node.indentSize)
        content = content
          .split(NEWLINE)
          .map((l) => (l ? " ".repeat(node.indentSize) + l : l))
          .join(NEWLINE);

      if (heading || node.quoted) {
        const quote = node.quoted ? (heading.includes('"') ? "'" : '"') : "";
        heading = quote + heading + quote;
      }

      let keywordSpace = "";
      if (node.indentSize > config.tag.length)
        keywordSpace = " ".repeat(node.indentSize - config.tag.length);
      else if (!content) keywordSpace = " ";

      return (
        config.tag +
        keywordSpace +
        heading +
        NEWLINE +
        (node.spread && content ? NEWLINE : "") +
        (content ? content : "") +
        (!node.indentSize && content ? NEWLINE : "") +
        (!node.indentSize ? config.tag : "")
      );
    };
  }

  function hastFriendlyTransformer(tree) {
  }
}
