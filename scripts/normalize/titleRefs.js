// run: node scripts/normalize/titleRefs.js "product_docs/**/*.mdx"
// purpose:
//  replace the <span class="title-ref">...</span> elements left by the juicer
//  with either inline code or links

const { read, write } = require("to-vfile");
const glob = require("fast-glob");
const isAbsoluteUrl = require("is-absolute-url");

(async () => {
  if (!process.argv[2]) {
    console.log(`usage:
  ${process.argv[1]} "glob pattern"
example:
  ${process.argv[1]} "product_docs/**/*.mdx"`);
    return;
  }

  const files = await glob(process.argv[2]);
  const titleRef =
    /(?:<span class="title-ref">([^<]*?)(?:(?:<|&lt;)+(.*?)(?:>|&gt;)+)*?<\/span>)|(?:`` `([^`]*?)`` \\?(?:&lt;|<)([^>]*?)><span class="title-ref">([^<]*?)<\/span>)|(?:`` `([^`]+)`` \\?(?:&lt;|<)([^>]*)>\\`)/g;
  const cleanup1 = /\\`\\` *([^\\]+) *\\`\\`/g;
  const cleanup2 = /`?`([^\n`]{3,}?)`\\?`/g;
  const replaceRefs = (
    _,
    text1,
    href1,
    text2,
    href2,
    prologue,
    text3,
    href3,
  ) => {
    let textContent = (text1 || text2 || text3 || "")
      .replace(/\\\\/g, "\\")
      .trim()
      .replace(/\\$/g, "")
      .trim();
    let href = (href1 || href2 || href3 || "")
      .replace(/[\s\\]/g, "")
      .replace(/^<|>$/g, "");
    prologue = prologue || "";
    if (!textContent && href) {
      textContent = `&lt;${href}>`;
      href = "";
    }
    if (href && !isAbsoluteUrl(href)) href = "#" + href;

    let result = "";
    if (href) result = `[${textContent}](${href})` + prologue;
    else result = "`" + textContent + "`" + prologue;
    return result;
  };

  for (const filepath of files) {
    const file = await read(filepath);

    let normalized = file.contents.toString().replace(titleRef, replaceRefs);

    if (normalized !== file.contents.toString()) {
      normalized = normalized
        .replace(cleanup1, "`$1`")
        .replace(cleanup2, " `$1` ");

      console.log(filepath);
      await write({
        path: filepath,
        contents: normalized,
      });
    }
  }
})();
