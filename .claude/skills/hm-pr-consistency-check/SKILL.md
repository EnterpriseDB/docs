---
name: hm-pr-consistency-check
description: >-
  Checks an incoming Hybrid Manager (HM) docs PR or branch against its downstream
  base branches (for example feature -> release -> develop) and reports content
  elsewhere in product_docs/docs/edb-postgres-ai/ that the change contradicts,
  leaves stale, or leaves with a gap. Use when a writer or reviewer says "check
  this PR for conflicts with the rest of the HM docs", "does PR 1234 contradict
  anything", "what else needs updating because of this change", "consistency check
  on this branch", "downstream impact of this PR", or hands over a PR number,
  URL, or branch name touching Hybrid Manager content and wants it vetted before
  merge. Read-only: it reports findings and never edits, pushes, or comments.
---

# HM PR Consistency Check

Hybrid Manager PRs are usually accurate on their own and still break the docs. A PR documents a removal, renames a setting, adds a prerequisite, or changes a default on one page. Other pages keep saying the old thing. Or the PR leans on a page that exists on one branch and not another. This skill finds those problems before merge.

Three rules govern everything below:

- **Extraction first, inference never.** List what the PR changes as discrete, quoted claims before searching for anything. A finding must quote text from both sides, with file and line. If you can't quote both, it isn't a finding.
- **Read-only.** Never check out a branch, edit a file, push, or post a PR comment. Everything runs against git objects (`git fetch`, `git show`, `git grep`, `git diff`, `git merge-tree`) and the GitHub REST API.
- **Be honest about coverage.** Say what you searched, how, and what you could not verify. A short report with a clear coverage statement beats a long one with guesses.

## Scope

Search root: `product_docs/docs/edb-postgres-ai/` and every child folder. It holds parallel version trees, each with a `hybrid-manager/` subfolder (at last check `innovation-release/`, `1.4/`, `1.3/`). Discover the actual layout each run with `git ls-tree`; new trees appear. Each tree has the same shape: `index.mdx`, `release_notes/`, `overview/` (including `known_issues.mdx`, `supported_versions.mdx`, `architecture.mdx`), `install/`, `using_hybrid_manager/`, `ai-factory/`, `analytics/`, `system/`, and `images/`.

Also check repo-wide, outside the search root, for inbound links to anything the PR renames, moves, or deletes (`product_docs/` and `advocacy_docs/`).

## Step 0: Preflight (always run first)

This skill is distributed through the docs repo, so every user's setup differs. Before any analysis, run these checks, print a short checklist (pass or fail, one line each), and **stop at the first failure with the fix**. Never print token values. All checks are read-only.

| # | Check | How | If it fails |
|---|---|---|---|
| 1 | **In a docs clone** | `git rev-parse --show-toplevel` and `git remote -v`. One remote should point at `EnterpriseDB/docs-editorial`. Note its name (often `editorial` or `origin`). The docs clone can carry several repos as remotes (`editorial`, `public`, `docs-sec`), so always use the editorial remote's name explicitly. | Not in a clone: in a local session, ask the user to start Claude from their docs folder. In a cloud session, see check 5. |
| 2 | **Git is new enough** | `git --version`. Needs 2.38 or later for `git merge-tree --write-tree`. | Tell the user to upgrade git (for example `brew upgrade git`). Without it, fall back to searching the base and PR head separately and say so in coverage. |
| 3 | **`gh` is installed** | `which gh && gh --version` | Tell the user to install it (`brew install gh` on macOS). |
| 4 | **GitHub login works over REST** | `gh api user --jq .login` | If it reports no auth or a bad credential, tell the user to run `gh auth login` in their terminal. **`gh auth status` may say the token is invalid even when REST calls work. Trust the REST result.** Don't use `gh pr view` or `gh pr list`: some sessions block the GraphQL API behind them. |
| 5 | **The repo is reachable** | `gh api repos/EnterpriseDB/docs-editorial --jq '.full_name, .permissions.pull'` | `HTTP 403: GitHub access to this repository is not enabled for this session` in a cloud session means the repo isn't attached yet: attach it with `add_repo` (read access is enough), `git clone --depth 1` with a long timeout, then `register_repo_root`. If the error mentions SAML or SSO, the token needs authorizing for the EnterpriseDB organization; relay the error text and the link it gives. Anything else: report the exact error and stop. Don't guess. |
| 6 | **Fetch works** | `git ls-remote --heads <editorial-remote> develop` | Report the exact error. A host-key or permission error means the remote isn't usable from this machine; say what you saw and what you'd need. |
| 7 | **This skill is current** | See "Keeping this skill current" below. | Warn, don't block: tell the user a newer version exists and how to get it, then continue. |

Print the result like:

```
Preflight: in clone (remote: editorial) | git 2.43 | gh 2.89 | gh login ok (REST) | repo reachable | fetch ok | skill current
```

If a check is ambiguous, say what you saw and what you'd need. Don't guess a fix beyond what the output shows.

## Environment notes

Use the **GitHub REST API through `gh api`** for everything about PRs. Always name the repo explicitly: `EnterpriseDB/docs-editorial` (where most PRs live), `EnterpriseDB/docs` (public), or `EnterpriseDB/docs-sec`. If the writer gives a PR number without a repo, ask which one; number ranges overlap.

Local branches go stale. Always fetch and compare **remote refs**, never local branch names.

## Workflow

### Step 1: Identify the PR

```bash
R=EnterpriseDB/docs-editorial
gh api repos/$R/pulls/<N> --jq '{number,title,base:.base.ref,head:.head.ref,head_sha:.head.sha,draft,changed_files}'
gh api repos/$R/pulls/<N>/files --paginate --jq '.[] | [.status,.filename,.additions,.deletions] | @tsv'
```

If the writer gave only a branch name, find its PR: `gh api "repos/$R/pulls?head=EnterpriseDB:<branch>&state=open"`. No PR yet is fine; ask which base it will target.

If no changed file is under `product_docs/docs/edb-postgres-ai/`, say so and stop.

### Step 2: Resolve the branch chain

The chain is the ordered list of bases the change flows into, nearest first, for example `PR branch -> release-hm-2026.11 -> develop`. Branch names are not consistent in this repo (`develop`, `release-hm-2026.11`, `release-2026.8`, `hm_1.3`), and release branches are long-lived forks, so never infer the chain from names alone.

1. **The PR's base** (`base.ref` from Step 1) is link 1.
2. **Walk up**: is that base itself the head of an open PR into something else?
   `gh api "repos/$R/pulls?head=EnterpriseDB:<base>&state=open" --jq '.[] | {number,base:.base.ref,title}'`
   If yes, follow it. Repeat until you reach `develop`.
3. **Ancestry check** for anything unresolved: `git merge-base --is-ancestor`, `git rev-list --count A..B`.
4. **Ask the writer** if any doubt remains.

**Always show the chain and get a one-line confirmation before comparing anything.** A wrong chain makes the report meaningless. Leave `main` out unless asked; it is production and is promoted from `develop`.

### Step 3: Fetch into named refs

Fetch every ref into its own name. **Never fetch several refs in one command and then rely on `FETCH_HEAD`**: it points at whichever ref was fetched first, which may not be the PR. Cross-check the PR head against `head_sha` from the API.

```bash
git fetch --depth=300 <editorial-remote> \
  '+refs/heads/<release-base>:refs/remotes/<editorial-remote>/<release-base>' \
  '+refs/heads/develop:refs/remotes/<editorial-remote>/develop' \
  '+refs/pull/<N>/head:refs/remotes/<editorial-remote>/pr-<N>'
git rev-parse <editorial-remote>/pr-<N>   # must equal head_sha from the API
```

Depth 300 was enough for `merge-tree` to find merge bases in this repo. If `merge-tree` reports no merge base, deepen with a bounded fetch (`--depth=1000`). Don't use `--unshallow`. In the commands below, `origin/` stands for whatever the editorial remote is called.

### Step 4: Extract the claims (before any searching)

```bash
git diff --find-renames --name-status origin/<base1>...origin/pr-<N> -- product_docs/docs/edb-postgres-ai
git diff --find-renames --unified=0   origin/<base1>...origin/pr-<N> -- product_docs/docs/edb-postgres-ai
```

Write a numbered claim inventory, one line per discrete fact the PR adds, changes, or removes, with the exact old and new wording quoted. Claim types:

- **Values**: defaults, limits, sizes, ports, timeouts
- **Names**: product, feature, component, scenario, setting, CLI command or flag, annotation, UI label, image or chart name
- **Versions and timing**: which release introduces, removes, or deprecates something; supported Kubernetes distros and versions; operator, agent, and Postgres compatibility; EOL dates
- **Procedures**: steps added, removed, reordered; prerequisites; permissions; order of operations
- **Behavior**: what happens on upgrade, restore, failover, migration; what is or isn't supported; error messages
- **Structure**: files added, renamed, moved, deleted; navigation, `navTitle`, `redirects`; headings and anchors others link to
- **Status**: GA vs preview, known issues added or resolved, release-note entries

Quote, don't paraphrase. If the diff is large (more than about 40 claims), group by theme.

### Step 5: Build the comparable views

For each base in the chain, build the **merged view**: what the docs say once the PR lands there.

```bash
git merge-tree --write-tree --name-only origin/<base> origin/pr-<N>   # first line = tree ID
```

Search that tree with `git grep` (nothing is checked out). Three things to get right:

- **Upstream content comes along.** Merging the PR head onto a base also merges everything the PR's branch carries from upstream bases. A page the PR edits may simply not exist on `develop` yet because it arrives when the release branch merges. That is expected, not a finding. Note it once as base drift ("these files reach `develop` through PR #X").
- **Attribute conflicts correctly.** Conflicts from merging a release branch onto `develop` exist before the PR does. Compare the conflict list of `merge-tree origin/develop origin/<release-base>` (baseline) against `merge-tree origin/develop origin/pr-<N>`. Report only the **difference** as caused by the PR; mention the baseline conflicts separately if they touch a file relevant to a claim.
- **Non-zero exit means conflicts.** The tree is still searchable, but files may contain conflict markers. Say so.

### Step 6: Account for in-flight PRs

Other open PRs may already fix, or collide with, what you find. **Find them by the files they touch, never by title.** A title filter misses PRs like "AI Factory - Removal" that have none of the obvious keywords. Check open PRs against **every base in the chain, `develop` included**, not only the PR's own base.

```bash
# every open PR against each base in the chain (loop over the bases); skip this PR itself
gh api "repos/$R/pulls?state=open&base=<base>&per_page=100" --paginate --jq '.[].number'
# for each number M, keep it only if it touches the HM search root
gh api repos/$R/pulls/<M>/files --paginate --jq '.[].filename' | grep -c '^product_docs/docs/edb-postgres-ai/'
```

Then narrow to the PRs whose files overlap this PR's files or the pages your claims point at (read the file list; a PR that removes or rewrites a whole section is relevant even if its title is unrelated). Report the number of open PRs you checked and how many overlapped, so a miss is visible. For each overlapping PR, fetch its head into `origin/pr-<M>`, check whether it conflicts with this PR (`git merge-tree --write-tree origin/pr-<M> origin/pr-<N>`; note any `CONFLICT` lines, and compare against the same merge without this PR so you only blame this PR for the difference), and build a **combined tree** (the tree ID from that command) to search. Then each gap is one of:

- **Open**: not covered by anything in flight.
- **Covered by #M**: that PR's diff already addresses it. Say so and cite the PR.
- **Collides with #M**: both edit the same lines or file; flag who needs to rebase.

This stops you reporting work a teammate has already done, and catches duplicate or colliding edits.

### Step 7: Search for contradictions, stale content, and gaps

For **each claim**, search the merged (and combined) tree of **each base** across the whole search root, not only the PR's folder:

```bash
git grep -n -i -F -e "<old term>" -e "<new term>" <tree> -- product_docs/docs/edb-postgres-ai
```

Search for the old wording, the new wording (other pages may contradict it), and neighbors: synonyms, the same value elsewhere, the CLI form vs the UI form, the same step in another platform's guide.

**Keep the search specific.** Broad topic words ("migration", "scenario") return hundreds of hits. Use the claim's distinctive terms (an annotation name, an exact error string, a component name), count hits per file to find the heavy files, then read the context of each. Read the line before deciding. A grep hit is a lead, not a finding.

**Don't flag history as stale.** Older release notes and upgrade guides for earlier versions correctly describe what was true then. Exclude them unless the PR changes what a past release did.

**Where HM contradictions usually hide:**

- `release_notes/` (new entry needed; older entries that now conflict) and `overview/known_issues.mdx`
- `overview/supported_versions.mdx` and compatibility matrices
- Every `install/` guide and `install/configuration/`, including **sample manifests and YAML examples** that a reader will copy and apply (`spec.scenarios`, `values.yaml`, `HybridControlPlane`). A removed option still listed in a sample manifest is a high-impact miss.
- Every platform install guide for changed prerequisites
- `using_hybrid_manager/upgrading_hm/` including the **index page**, which often has a cross-version summary of changes
- `using_hybrid_manager/edbctl/`, `system/` (faq, glossary, concepts, specs), `overview/architecture.mdx`, `images/` alt text
- Whole feature doc sets for something the PR removes or deprecates (every page of that set needs the banner or removal, not just its landing page)
- Landing and `index.mdx` pages that repeat feature lists
- Link targets: for every renamed, moved, or deleted file or heading, `git grep` the old path and anchor across `product_docs/` and `advocacy_docs/`. Verify each new link and anchor the PR adds resolves in the merged tree of every base.

**Classify each hit:**

| Category | Meaning |
|---|---|
| **Contradiction** | A page states something that cannot be true if the PR's claim is true. |
| **Stale** | Not strictly false, but incomplete or misleading because of the PR (old name, old step list, old default, a sample that still includes a removed option). |
| **Gap** | The PR creates something other content should cover and doesn't: a removal with no banner on the affected pages, a summary page that omits the new change, a new prerequisite missing from sibling guides, a removed page with no redirect, a link to a page absent on that base. |
| **Timeline conflict** | Two pages disagree on *when* something changed (which release added, removed, or deprecated it). Quote both and don't pick a winner. |
| **Base drift** | The page differs between bases in a way that matters, the PR depends on a page missing on a base, or merging adds a conflict. |
| **Collision** | An in-flight PR edits the same file or lines. |
| **Sibling-version candidate** | The same fact appears in another version tree. **Not a contradiction by default**; versions legitimately differ. Report as "decide whether this applies to <tree>". Escalate only if the PR claims to apply to all versions. |

**Rules for judging:**

- Treat the PR as accurate for the version and base it targets. The question is what *else* is now wrong.
- Check the version tree before calling anything a contradiction.
- If you can't tell which side is right, mark **Needs SME decision**, quote both, and write the question to ask. Timeline conflicts almost always land here.
- Before concluding a Gap, search alternate wording and say what you searched.
- Drop anything you can't back with quotes and file paths on both sides.

For very large PRs, you may fan out one read-only subagent per top-level folder, giving each the claim inventory, tree IDs, in-flight PR list, and these rules. Merge and de-duplicate their findings.

### Step 8: Report

Write it the way a colleague would: short, specific, plain words. Lead with the question or ask. One line per finding, with a file path and line, and quote only the few words that show the problem. No filler, no restating the method, no bold-everything, no headers for sections that have one item.

**Default (chat reply and anything posted to a PR):**

```
Checked #<N> against <bases> and open PRs <#a, #b>. First pass, not SME-reviewed.

**Question:** <the decision someone has to make, with the 1-3 quotes that conflict>

**Not covered by any of those PRs:**
- `<path>:<line>` <what it still says, in a few words>
- ...

**Heads-up:** <collisions and base drift, one or two lines>

Not checked: <short list>
```

Rules for the default report:

- Order: questions that need an SME first (they block the rest), then contradictions, gaps, stale items, drift and collisions.
- Drop any section that is empty. Say "nothing found" in one line if so, plus what you searched.
- Mark a finding **Covered by #M** or **Collides with #M** when an in-flight PR already handles it, and leave covered items out of the "Not covered" list.
- Group repeats: "the five `migration_portal/` pages have no removal notice", not five lines.
- Skip severity labels and categories unless the writer asks. Use them to order the list, not to decorate it.
- Don't claim certainty you don't have. "Possibly stale, depends on the answer above" beats a confident wrong call.

**Full report (only when the writer asks for detail or the coverage record):** add the preflight line, the confirmed chain, refs compared with SHAs, the claim inventory, terms and trees searched, how many open PRs were checked and how many overlapped, what wasn't verified, and the exact `git` and `gh` commands run.

Do not post a report to a PR, or edit one already posted, without the writer's go-ahead. Keep long reports in the conversation and offer to save them as a markdown file outside the repo. Do not write files into the clone.

## Safety gates

- Never post the report as a PR comment, push, or edit files unless the writer explicitly asks and confirms. Comments are visible to the whole team.
- To act on the findings (edit the markdown, run Vale, push to the PR), hand off to the `docs-pr-review` skill.
- `git fetch` only updates remote-tracking refs and is fine. Never run `checkout`, `reset`, `merge`, `rebase`, or `stash` in a clone that may hold the writer's uncommitted work or other worktrees.

## Keeping this skill current

This skill lives in the docs repo at `.claude/skills/hm-pr-consistency-check/SKILL.md` and reaches everyone through git. There is no separate install. Whoever has the repo checked out and up to date has the latest version.

**Freshness check (preflight check 7).** Compare the user's copy with `develop` on the editorial remote:

```bash
git fetch <editorial-remote> develop
git diff --quiet HEAD <editorial-remote>/develop -- .claude/skills/hm-pr-consistency-check/SKILL.md \
  && echo "skill current" || echo "skill differs from develop"
```

If it differs, say which direction: `git log --oneline HEAD..<editorial-remote>/develop -- .claude/skills/hm-pr-consistency-check` lists newer commits on `develop`. If there are any, tell the user: "A newer version of this skill is on develop. Update your branch (or switch to develop and pull) to get it." Don't pull or switch branches for them. If the only difference is local uncommitted edits to the skill, say so and carry on.

**Improving the skill.** Anyone who finds a miss, a false positive, or a better check can edit this file and open a normal PR to `develop`. When you learn something from a real run (a new place contradictions hide, a git quirk, a recurring false positive), offer to draft that change as a short diff for the writer to PR. Keep edits small and say what real PR or situation prompted them.

## Common mistakes

- Skipping the preflight, then failing halfway with a confusing git or auth error.
- Skipping the chain confirmation and comparing against the wrong base.
- Using `FETCH_HEAD` after a multi-ref fetch, so you review the wrong commit.
- Searching only the folder the PR touched. The point is the rest of the tree.
- Treating a difference between version trees as a contradiction.
- Reporting a hit without both quotes and paths, or without reading the surrounding lines.
- Flagging older release notes and upgrade guides as stale.
- Finding in-flight PRs by title keyword, or only on the PR's own base. Match on files touched, across every base in the chain including `develop`.
- A long, headered, bolded report where a few plain lines would do.
- Reporting a gap that an in-flight PR already closes, or blaming the PR for conflicts that exist between the base branches already.
- Treating "file absent on develop" as an error when it arrives through the release-to-develop PR.
- Forgetting release notes, known issues, the upgrade index page, and sample manifests, which are the most common misses.
