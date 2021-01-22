// run: node scripts/normalizeMarkdown.js "product_docs/**/*.mdx"
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
const visit = require('unist-util-visit')
const rehypeParse = require('rehype-parse')
const hast2html = require('hast-util-to-html')
const versionComp = require("semver-compare")
const path = require("path")
const url = require("url")
const slugger = require('github-slugger')
const mdast2string = require('mdast-util-to-string')

;(async () => {

  if (!process.argv[2])
  {
    console.log(`usage:
  ${process.argv[1]} "glob pattern"
example:
  ${process.argv[1]} "product_docs/**/*.mdx"`);
    return;
  }

  const parser = unified()
    .use(remarkParse)
    .use(mdx)
    .use(remarkFrontmatter)
  const indexing = unified()
    .use(remarkMdxEmbeddedHast)
    .use(linkTargetIndexer)
  const transformer = unified()
    .use(remarkMdxEmbeddedHast)
    .use(relativeLinkRewriter);
  const compiler = unified()
    .use(remarkParse)
    .use(require('remark-stringify'), {emphasis: '*', bullet: '-', fences: true})
    .use(mdx)
    .use(remarkFrontmatter)
    .use(remarkMdxEmbeddedHast)

  //const mdxes = await glob('product_docs/docs/epas/13/epas_compat_sql/*rollback*.mdx')
  //const mdxes = await glob('product_docs/docs/efm/4.1/efm_user/04_configuring_efm/01_cluster_properties/index.mdx')
  //const mdxes = await glob('product_docs/docs/efm/3.10/efm_user/04_configuring_efm/05_using_vip_addresses.mdx')
  //const mdxes = await glob("product_docs/docs/epas/**/*.mdx");
  //const mdxes = await glob("product_docs/docs/epas/9.6/01_epas_inst/002_requirements_overview.mdx");
  const mdxes = await glob(process.argv[2]);
  
  // indexing 
  for (const mdxPath of mdxes)
  {
    const file = await read(mdxPath);
    const ast = await parser.parse(file);
    await indexing.run(ast, file);
  }

  // analysis / rewriting
  for (const mdxPath of mdxes)
  {
    const file = await read(mdxPath);
    let ast = await parser.parse(file);
    //ast = await transformer.run(ast, file);
    const normalized = await compiler.stringify(ast);

    await write({
      path: mdxPath,
      contents: normalized
    })

  }

  console.log(index.stats)

})()

function fragmentForHeading(node)
{
  return slugger.slug(mdast2string(node));
}

function cleanseId(id)
{
  return slugger.slug(id.replace(/^[^#]*#+/, '')
      .replace(/[_-]/g, " ")
      .replace(/\s+/g, " "))
    .toLowerCase();
}

function generateRelativeUrl(source, dest, id)
{
  let sourceChunks = source.split(path.sep),
    destChunks = dest.split(path.sep),
    result = [],
    pos = 0;

  // skip identical parts of the paths
  while (pos < sourceChunks.length && pos < destChunks.length
    && sourceChunks[pos] === destChunks[pos] )
    pos++;

  // generate the results from both ends: walking up the tree from the source, down from the dest
  while (pos < sourceChunks.length || pos < destChunks.length)
  {
    // this needs to change if NOT canonicalizing paths ending in slashes - we would refrain from prepending for ANY mdx file
    if (pos < sourceChunks.length && sourceChunks[pos] !== 'index.mdx')
      result.unshift("..");
    if (pos < destChunks.length && destChunks[pos] !== 'index.mdx')
      result.push(encodeURIComponent(destChunks[pos].replace(/\.mdx$/, '')))
    pos++;
  }
  // append ID and run away
  return result.join('/') + "#" + encodeURIComponent(id);
}


const index = {
  stats: {},
  linkIdByKey: {},
  versionsForProduct: {},

  keyId: (id) => '#' + cleanseId(id),
  valuePathId: (filepath, id, product, version) => 
  {
    return {path: filepath, id, product, version};
  },

  addValue: (key, value, reportCollisions=true) =>
  {
    if (reportCollisions 
      && index.linkIdByKey[key] 
      && index.linkIdByKey[key].path !== value.path)
    {
      index.stats.idCollisions = (index.stats.idCollisions||0)+1;
      console.error(`COLLISION: ${key} matches:
      ${index.linkIdByKey[key].path} #${index.linkIdByKey[key].id}
      ${value.path} #${value.id}
    ...the latter will be used`);
    }

    index.linkIdByKey[key] = value;
  },

  keyProductVersion: (product, version, id) => 
  {
    index.versionsForProduct[product] = index.versionsForProduct[product] || [];
    if (!index.versionsForProduct[product].includes(version))
      index.versionsForProduct[product].push(version);

    return "pfk:" + product + version + index.keyId(id);
  },

  keyProductMaxVersion: (product, id) =>
  {
    index.versionsForProduct[product] = index.versionsForProduct[product] || [];
    return index.keyProductVersion(product, index.versionsForProduct[product].sort(versionComp).pop(), id);
  },

  lookupIdByProductVersion: (id, product, version) =>
    index.linkIdByKey[index.keyProductVersion(product, version, id)],
  lookupIdGlobal: (id) => index.linkIdByKey[index.keyId(id)],

  keySubdir: (subdir, id) => "dir:" + subdir + index.keyId(id),
  lookupIdBySubdir: (id, subdir) => index.linkIdByKey[index.keySubdir(subdir, id)],

  keyFilepath: (filepath, id) => filepath + index.keyId(id),
  lookupIdByFile: (id, filepath) => index.linkIdByKey[index.keyFilepath(filepath, id)],

  productVersionForPath: (filepath) =>
  {
    let [,prod,ver] = filepath.match(/^product_docs\/docs\/([^\/]+)\/([\d\.]+)\//)||[null, null, null];
    if (prod && ver) return [prod, ver];
    return [null, null];
  },

  indexRegisteredId: (filepath, id) =>
  {
    // attempt to determine product and version from path
    // then associate id with product and version
    let [prod,ver] = index.productVersionForPath(filepath);
    if (prod && ver)
    {
      let value = index.valuePathId(filepath, id, prod, ver);
      let key = index.keyProductVersion(prod, ver, id);
      index.addValue(key, value);
      let maxKey = index.keyProductMaxVersion(prod, id);
      if (maxKey === key)
        index.addValue(index.keyId(id), value);
      index.stats.globalIdsIndexed = (index.stats.globalIdsIndexed||0)+1;
    }
    else
      console.error("bad path for registered ID: " + filepath)

    index.indexId(filepath, id)
  },

  indexId: (filepath, id) =>
  {
    // this should be available in the file where it is referenced 
    // and in other files in the same subdirectory
    let key = index.keyFilepath(filepath, id);
    let value = index.valuePathId(filepath, id);
    index.addValue(key, value);
    key = index.keySubdir(path.dirname(filepath), id);
    index.addValue(key, value);
    index.stats.localIdsIndexed = (index.stats.localIdsIndexed||0)+1;
  },
};    

function linkTargetIndexer()
{
  return function(tree, file)
  {
    visit(tree, indexer)

    function indexer(node)
    {
      if (node.properties && node.properties.id)
      {
        if (node.properties.className && node.properties.className.includes("registered_link"))
          index.indexRegisteredId(file.path, node.properties.id);
        else
          index.indexId(file.path, node.properties.id);
      }
      else if (node.type === "heading")
      {
        index.indexId(file.path, fragmentForHeading(node));
      }
    }
  }
  
}

function relativeLinkRewriter()
{
  return transformer;

  function transformer(tree, file)
  {
    const relativeUrl = /^(?!http)[^#]*#/;

    visit(tree, ['link', 'element'], visitor)

    function visitor(node)
    {
      if (node.type === "element" && node.tagName === "a" 
      && node.properties.href && relativeUrl.test(node.properties.href))
      {
        const newUrl = testId(file.path, node.properties.href);
        if (newUrl) node.properties.href = newUrl;
      }
      if (relativeUrl.test(node.url))
      {
        const newUrl = testId(file.path, node.url);
        if (newUrl) node.url = newUrl;
      }
    }

    function testId(filepath, id)
    {
      index.stats.relativeLinksChecked = (index.stats.relativeLinksChecked||0)+1;
      const [prod, ver] = index.productVersionForPath(filepath);
      const byFile = index.lookupIdByFile(id, filepath),
        bySubdir = index.lookupIdBySubdir(id, path.dirname(filepath)),
        byProdVer = index.lookupIdByProductVersion(id, prod, ver),
        byGlobal = index.lookupIdGlobal(id);
  
      if (byFile)
      {
        index.stats.targetsFoundInSameFile = (index.stats.targetsFoundInSameFile||0)+1;
        //console.log(`found ${id} in same file`);
        return generateRelativeUrl('', '', byFile.id);
      }
      else if (bySubdir)
      {
        index.stats.targetsFoundInSiblingFile = (index.stats.targetsFoundInSiblingFile||0)+1;
        //console.log(`found ${id} in sibling`);
        return generateRelativeUrl(filepath, bySubdir.path, bySubdir.id);
      }
      else if (byProdVer)
      {
        index.stats.targetsFoundRegisteredInSameProductAndVersion = (index.stats.targetsFoundRegisteredInSameProductAndVersion||0)+1;
        //console.log(`found ${id} in product and version: ${byProdVer.path}`);
        return generateRelativeUrl(filepath, byProdVer.path, byProdVer.id);
      }
      // this one is sketchy - I'm not at all certain it was intended or makes sense
      // so here's the rules:
      // - id must not match anywhere more relevant
      // - cannot match across versions for the same product
      else if (byGlobal && byGlobal.product !== prod)
      {
        index.stats.targetsFoundRegisteredCrossProductVersion = (index.stats.targetsFoundRegisteredCrossProductVersion||0)+1;
        //console.log(`found ${id} globally: ${byGlobal.path}`);
        return generateRelativeUrl(filepath, byGlobal.path, byGlobal.id);
      }
      else
      {
        index.stats.targetsNotFound = (index.stats.targetsNotFound||0)+1;
        console.error(`No target for ${id} in ${filepath}`);
      }

      return null;
    }
  }
}

function remarkMdxEmbeddedHast()
{
  const compiler = this.Compiler;
  if (compiler && compiler.prototype && compiler.prototype.visitors)
    attachCompiler(compiler);
  return transformer;

  function transformer(tree, file)
  {
    visit(tree, 'jsx', visitor)

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
        if (hast.children && hast.children.length
          && (hast.children.length > 1 || 
            (hast.children[0].data && hast.children[0].data.position && hast.children[0].data.position.closing)))
        {
          node.type = "jsx-hast";
          node.children = hast.children;
        }            
      }
    }
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