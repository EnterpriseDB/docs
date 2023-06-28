// Create redirects based on git renames detected between this and a base branch 
// Takes one optional parameter: the name of the base branch (default: develop)
// Aims to be idempotent for a given branch: running twice will not change anything if the branch itself hasn't changed 

import path from "path";
import { fileURLToPath } from "url";
import yaml from "yaml";
import { exec, execSync } from "child_process";
import glob from "fast-glob";
import { readFile, writeFile } from "fs/promises";

const args = process.argv.slice(2);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.resolve(__dirname, "../../../..");
const baseBranch = args[0] || "origin/develop";


// first bit of this script is synchronous - there's absolutely nothing we can do until git gives us the list of renames,
// and I don't feel like dealing with the crufty old exec() interface
// Note that it's entirely possible for the list of renames to have the same
// files listed multiple times, forming a chain - that gets handled later
// For when I inevitably forget why I did it this way:
// - https://git-scm.com/docs/gitrevisions
// - https://git-scm.com/docs/git-log
let branch = "";
let renames = [];
try {
  branch = execSync("git rev-parse --abbrev-ref HEAD", {cwd: basePath}).toString().trim();
  renames = execSync(`git log --diff-filter=R --name-status --pretty=format: ${baseBranch}..${branch}`, {cwd: basePath}).toString()
    .split('\n')
    .filter(l => l.startsWith("R") && l.endsWith(".mdx"))
    .map(l => l.split('\t').slice(1));
} catch (e) {
  throw new Error("Error running git: " + e.toString());
}


// this does everything else: 
// - creates a map of current path names to redirects based on the git-identified renames 
// - reads each mdx file in turn
// - finds an appropriate redirect if possible 
// - adds, updates or removes a redirect for this branch 
// - writes out the file (if it has changed)
// A comment in the frontmatter YAML is used to associate *at most one* redirect with the current branch.
// This script will only touch redirects tagged with a comment for the current branch name
const run = async () => {

  const fsPathToURLPath = (fsPath) => {
    // 1. strip leading product_docs/docs and advocacy_docs
    // 2. strip trailing index.mdx
    // 3. strip trailing .mdx
    // 4. strip trailing / 
    return fsPath.replace(/^advocacy_docs|^product_docs\/docs|\/index\.mdx$|\.mdx$/g, '').replace(/\/$/, '');
  };

  const mapRenames = {};
  const mapCurrentPathToRedirect = {};
  for (const [before, after] of renames)
  {
    // handle chains of renames such that when:
    // b->c
    // a->b
    // mapCurrentPathToRedirect[c] = a 
    mapRenames[before] = after;
    const key = mapRenames[after] || after;

    const oldUrlPath = fsPathToURLPath(before);
    const newUrlPath = fsPathToURLPath(after);
    const redirectPath = path.relative(newUrlPath, oldUrlPath);
    mapCurrentPathToRedirect[key] = redirectPath;
  }

  const sourceFiles = await glob([path.resolve(basePath, "product_docs/**/*.mdx"), path.resolve(basePath, "advocacy_docs/**/*.mdx")]);

  let found = 0, updated = 0;
  for (const sourcePath of sourceFiles)
  {
    const redirectPath = mapCurrentPathToRedirect[path.relative(basePath, sourcePath)];
    if (redirectPath)
      found++;
    const origContent = await readFile(sourcePath, "utf8");
    const newContent = await replaceRedirect(origContent, redirectPath, {sourcePath, branch});
    if (newContent !== origContent )
    {
      updated++;
      await writeFile(sourcePath, newContent, "utf8");
    }
  }

  console.log(`${renames.length} renames identified, ${found} redirects identified, ${updated} files updated`);


};

const replaceRedirect = async (content, redirectPath, {sourcePath, branch}) => {
  const frontmatterRE = /^(?<open>---\s*?\n)(?<yaml>.+?\n)(?<close>---\s*?(?:\n|$))/s;
  const tagComment = "generated for " + branch;

  const frontmatterYaml = content.match(frontmatterRE)?.groups?.yaml;
  if (!frontmatterYaml) {
    console.warn("No frontmatter for " + sourcePath);
    return content;
  }
  const frontmatter = yaml.parseDocument(frontmatterYaml);
  if (frontmatter.errors.length) {
    const combinedErrors = frontmatter.errors
      .map((error) =>
        error?.linePos?.length
          ? `${sourcePath}:${error.linePos[0].line + 1}:${error.linePos[0].col}
${error.message}`
          : error.toString(),
      )
      .join("\n");
    console.warn("Error parsing frontmatter for " + sourcePath, combinedErrors);
    return content;
  }

  if (!frontmatter.contents.get) {
    console.warn("Wrong data format for frontmatter in " + sourcePath);
    return content;
  }

  let redirects = frontmatter.contents.get("redirects");
  
  // create section if needed
  if (redirectPath && !redirects?.items)
  {
    const seq = frontmatter.createNode([redirectPath]);
    seq.items[0].comment = tagComment;
    frontmatter.contents.delete("redirects");
    frontmatter.contents.add({key: "redirects", value: seq });
    redirects = frontmatter.contents.get("redirects")
  }

  // handle the cases where a redirect for this branch was already added. 
  // if we have a new redirect (possibly added right above), we'll update the existing value
  // otherwise, we'll remove it
  // this allows for this process to be run multiple times as a branch evolves without making a complete mess
  let found = false;
  for (let i = 0; i < redirects?.items?.length; ++i) {
    if (redirects.items[i].comment !== tagComment) continue;
    if (redirectPath)
    {
      redirects.items[i].value = redirectPath;
    }
    else
    {
      redirects.items.splice(i, 1);
      // if we just removed the last redirect, remove the key entirely
      if (!redirects.items.length)
      {
        frontmatter.contents.delete("redirects");
        redirects = null;
      }
    }
    found = true;
    break;
  }

  // if there's nothing to add, and there was nothing to remove, don't bother changing anything
  if (!found && !redirectPath)
    return content;

  // there are redirects, but not *this* redirect, so add a new one
  if (!found && redirectPath)
  {
    const item = new yaml.Scalar(redirectPath);
    item.comment = tagComment;
    redirects.items.push(item);
  }

  return content.replace(
    frontmatterRE,
    (_, open, fmYaml, close) => open + frontmatter.toString({lineWidth: 0}) + close,
  );
};

run();
