// run: node scripts/normalize/slashEscapedLessThan.js "product_docs/**/*.mdx"
// purpose:
//  replace the pattern \< left by the juicer with the &lt; entity
//  this actually works properly

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
  const badLTEscLine = /^(.*)(\\<)(.*)$/gm;
  const entity = "&lt;";
  const replaceBadEscs = (line, before, esc, after) => {
    let ticCount = 0;
    for (let i = 0; i < line.length; ++i) {
      if (line[i] === "`") ticCount++;
      if (line[i] === "\\" && line[i + 1] === "<" && !ticCount % 2)
        line = line.slice(0, i) + entity + line.slice(i + 2);
    }
    return line;
  };

  for (const filepath of files) {
    const file = await read(filepath);

    let normalized = file.contents
      .toString()
      .replace(badLTEscLine, replaceBadEscs);

    if (normalized !== file.contents.toString()) {
      console.log(filepath);
      await write({
        path: filepath,
        contents: normalized,
      });
    }
  }
})();
