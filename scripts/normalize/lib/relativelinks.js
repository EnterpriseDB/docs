const visit = require('unist-util-visit')
const versionComp = require("semver-compare")
const path = require("path")
const slugger = require('github-slugger')
const yaml = require('js-yaml')
const mdast2string = require('mdast-util-to-string')

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
        index.indexId(file.path, slugger.slug(mdast2string(node)));
      }
      else if (node.type === 'yaml')
      {
        let metadata = yaml.load(node.value);
        if (metadata.title)
          index.indexId(file.path, slugger.slug(metadata.title));
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

    visit(tree, ['link', 'element', 'inlineCode'], visitor)

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
      else if (node.type === 'inlineCode')
      {
        const codeLink = node.value.match(/^(\w[^\-<]+) <([^>]+)>$/);
        if (codeLink)
        {
          let text = codeLink[1],
            href = codeLink[2] && testId(file.path, codeLink[2]);
          if (href && text)
          {
            node.type = "link";
            node.url = href;
            node.children = [ { type: 'text', value: text } ];
          }
          console.log(node.value + " -> " + href);
        }
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
  
      if (byFile && !byFile.invalid)
      {
        index.stats.targetsFoundInSameFile = (index.stats.targetsFoundInSameFile||0)+1;
        //console.log(`found ${id} in same file`);
        return generateRelativeUrl('', '', byFile.id);
      }
      else if (bySubdir && !bySubdir.invalid)
      {
        index.stats.targetsFoundInSiblingFile = (index.stats.targetsFoundInSiblingFile||0)+1;
        //console.log(`found ${id} in sibling`);
        return generateRelativeUrl(filepath, bySubdir.path, bySubdir.id);
      }
      else if (byProdVer && !byProdVer.invalid)
      {
        index.stats.targetsFoundRegisteredInSameProductAndVersion = (index.stats.targetsFoundRegisteredInSameProductAndVersion||0)+1;
        //console.log(`found ${id} in product and version: ${byProdVer.path}`);
        return generateRelativeUrl(filepath, byProdVer.path, byProdVer.id);
      }
      // this one is sketchy - I'm not at all certain it was intended or makes sense
      // so here's the rules:
      // - id must not match anywhere more relevant
      // - cannot match across versions for the same product
      else if (byGlobal && byGlobal.product !== prod && !byGlobal.invalid)
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

const index = {
  stats: {},
  linkIdByKey: {},
  versionsForProduct: {},

  keyId: (id) => 
  {
    let key = id.replace(/^[^#]*#+/, '');
    try
    {
      // may or may not be encoded properly; try to decode, but continue if not possible 
      key = decodeURIComponent(key);
    } catch {}
    key = key.replace(/[_-]/g, "")
    .replace(/\s+/g, "")
    return '#' + slugger.slug(key).toLowerCase();
  },
  valuePathId: (filepath, id, product, version) => 
  {
    return {path: filepath, id, product, version};
  },

  addValue: (key, value) =>
  {
    if ( index.linkIdByKey[key] && index.linkIdByKey[key].path !== value.path)
    {
      // some collisions are expected: global and index-directory. 
      // Just eliminate the latter (mark the path as invalid) and ignore the former
      if (/^dir:i:/.test(key))
      {
        index.linkIdByKey[key].invalid = true;
        return;
      }
      if (!/^#/.test(key))
      {
        index.stats.idCollisions = (index.stats.idCollisions||0)+1;
        console.error(`COLLISION: ${key} matches:
        ${index.linkIdByKey[key].path} #${index.linkIdByKey[key].id}
        ${value.path} #${value.id}
      ...the latter will be used`);
      }   
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

  keySubdir: (subdir, id, isIndex) => "dir:" + (isIndex ? 'i:' : '') + subdir + index.keyId(id),
  // index files get to "live" in both the directory they're in, and that directory's parent - but the former takes precedence.
  lookupIdBySubdir: (id, subdir) => index.linkIdByKey[index.keySubdir(subdir, id)] || index.linkIdByKey[index.keySubdir(subdir, id, true)],

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
    // index.mdx files effectively live in their "parent" directory, so they get indexed both places (but with lower priority)
    let key = index.keyFilepath(filepath, id);
    let value = index.valuePathId(filepath, id);
    index.addValue(key, value);
    let subdir = path.dirname(filepath);
    if (path.basename(filepath) === 'index.mdx')
      subdir = path.dirname(subdir);
    key = index.keySubdir(subdir, id, true);
    index.addValue(key, value);
    index.stats.localIdsIndexed = (index.stats.localIdsIndexed||0)+1;
  },
};    

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
    // base path in our system is always the directory the file is in, so no need to back up 
    if (pos < sourceChunks.length-1 )
        result.unshift("..");
    if (pos < destChunks.length && destChunks[pos] !== 'index.mdx')
      result.push(encodeURIComponent(destChunks[pos].replace(/\.mdx$/, '')))
    pos++;
  }
  // there's a bit of potential ambiguity here: a bare fragment could refer to
  // either an ID in the file where it is referenced, or in the index.mdx file
  // next to it. To refer to the latter, a CWD path (single dot) is needed
  if (!result.length && source !== dest)
    result.push('.');
  // append ID and run away
  return result.join('/') + (result.length ? '/' : '') + "#" + encodeURIComponent(id);
}

module.exports = {linkTargetIndexer, relativeLinkRewriter, index}
