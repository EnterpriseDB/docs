// run: node scripts/normalize/markdown.js "product_docs/**/*.mdx"
// purpose: 
//  read in mdx files, parse them, stringify them, write them back out again
//  optionally, do some other stuff to the AST in between parsing and stringifying. 
//
const {read, write} = require('to-vfile')
const remarkParse = require('@mdx-js/mdx/node_modules/remark-parse')
const mdx = require('remark-mdx')
const unified = require('@mdx-js/mdx/node_modules/unified')
const remarkFrontmatter = require('remark-frontmatter')
const glob = require('fast-glob')
const remarkMdxEmbeddedHast = require('./lib/mast-embedded-hast')
const {linkTargetIndexer, relativeLinkRewriter, index} = require('./lib/relativelinks')
const remarkStringify = require('remark-stringify')
const noEscapeImageAlt = require('./lib/no-escape-image-alt')
//const stripImageAlt = require('./lib/strip-image-alt')
const tableFormatter = require('./lib/table-formatter')
const {docs1LinkRewriter, linkStats} = require('./lib/docs1-link-rewriter')
const noteRewriter = require('./lib/note-rewriter.js')
const codeInTables = require('../../src/plugins/code-in-tables.js')
const admonitions = require('remark-admonitions')

;(async () => {

  if (!process.argv[2])
  {
    console.log(`usage:
  ${process.argv[1]} <glob pattern index> [glob pattern rewrite]

  (if no rewrite pattern is given, all indexed files will be rewritten)
example:
  ${process.argv[1]} "product_docs/**/*.mdx" product_docs/docs/pem/8.0/index.mdx`);
    return;
  }

  const parser = unified()
    .use(remarkParse)
    .use(admonitions, { tag: '!!!', icons: 'none', infima: true })
    .use(mdx)
    .use(remarkFrontmatter)
  const indexing = unified()
    .use(remarkMdxEmbeddedHast)
    .use(linkTargetIndexer)
    .use(codeInTables)
  const transformer = unified()
    .use(remarkMdxEmbeddedHast)
    .use(noteRewriter)
    .use(relativeLinkRewriter)
    .use(tableFormatter)
    .use(codeInTables)
    .use(docs1LinkRewriter)
//    .use(stripImageAlt)
  const compiler = unified()
    .use(remarkParse)
    .use(remarkStringify, {emphasis: '*', bullet: '-', fences: true})
    .use(mdx)
    .use(remarkFrontmatter)
    .use(remarkMdxEmbeddedHast)
    .use(admonitions, { tag: '!!!', icons: 'none', infima: true })
    .use(noteRewriter)
    .use(codeInTables)
    .use(noEscapeImageAlt)

    const mdxesToIndex = await glob(process.argv[2]);
    const mdxesToWrite = (process.argv[3] && await glob(process.argv[3])) || mdxesToIndex;

  // indexing 
  for (const mdxPath of mdxesToIndex)
  {
    const file = await read(mdxPath);
    const ast = await parser.parse(file);
    await indexing.run(ast, file);
  }

  // analysis / rewriting
  for (const mdxPath of mdxesToWrite)
  {
    const file = await read(mdxPath);
    let ast = await parser.parse(file);
    ast = await transformer.run(ast, file);
    const normalized = await compiler.stringify(ast);

    if (normalized !== file.contents.toString())
    {
      console.log("writing: " + mdxPath)
      await write({
        path: mdxPath,
        contents: normalized
      })
    }

  }

  console.log(index.stats, linkStats)

})()

