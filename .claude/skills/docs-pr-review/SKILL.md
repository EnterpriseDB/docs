---
name: docs-pr-review
description: >-
  Walks an EDB Docs writer through any open pull request in the docs or
  docs-editorial repos — reading the review comments, understanding what's being
  asked, making the markdown edits, checking them with Vale, and pushing the
  changes back to the PR. Use whenever someone wants to work on a PR: "what's
  the feedback on 1457", "help me address the comments on this PR", "make the
  changes reviewers asked for", "walk me through PR 7203", "push my edits to
  the PR", "reply to the review comments", or names a PR number or URL and wants
  to do something with it. Built for writers who don't want to touch git
  directly — the skill runs every git and gh command and explains what happened
  in plain language.
---

# Docs PR Review Agent

EDB Docs content lives in two GitHub repos, and review happens as PR comments. Addressing that feedback normally means juggling `gh`, `git`, a text editor, Vale, and the GitHub web UI — which is a lot of tooling between a writer and what is fundamentally an editing task.

This skill collapses that. The writer says which PR they're working on; the agent handles every command, makes the edits they describe, checks the prose against EDB's style rules, and pushes back to the PR. **The writer never has to type a git command or know what a rebase is.**

Two rules shape everything below:

- **The writer decides what the words say.** The agent drafts and edits, but the writer approves the substance. Never guess at what a reviewer meant — ask.
- **Nothing leaves the machine without an explicit go-ahead.** Pushing commits and posting comments are visible to the whole team. Both require a deliberate confirmation, every time. See "Safety gates."

## The repos

| Repo | Purpose | Remote in the local clone |
|---|---|---|
| `EnterpriseDB/docs-editorial` | Internal editing repo — most day-to-day work | `editorial` |
| `EnterpriseDB/docs` | Public repo | `public` |
| `EnterpriseDB/docs-sec` | Security content | `docs-sec` |

Base branches: **`develop`** (staging, deployed via Netlify) and **`main`** (production). Most PRs target `develop`.

### The multi-remote trap — read this first

The local clone at `~/docs` has **all three repos configured as remotes in a single working copy**. This is unusual and it breaks the normal `gh` assumption that one directory maps to one repo. `gh` will guess, and it will sometimes guess wrong — silently showing you PRs from `docs` when you meant `docs-editorial`.

**Always pass `--repo` explicitly on every `gh` command.** No exceptions:

```bash
gh pr view 1457 --repo EnterpriseDB/docs-editorial
```

If the writer gives a PR number with no repo, ask which one rather than guessing — the number ranges overlap (both repos have a PR 1457-ish range) and getting it wrong wastes the whole session.

`git config checkout.defaultRemote` is set to `editorial`, so bare `git checkout` favors the editorial repo. Don't rely on that; be explicit.

## Workflow

### Step 1 — Identify the PR

If the writer named a PR number or pasted a URL, confirm the repo and move on.

If they're browsing, list what's open:

```bash
gh pr list --repo EnterpriseDB/docs-editorial --state open --limit 30 \
  --json number,title,author,isDraft,reviewDecision,updatedAt \
  --template '{{range .}}{{.number}}  {{.title}}  (@{{.author.login}}){{"\n"}}{{end}}'
```

Useful filters when they're looking for their own work: `--author @me`, `--search "review-requested:@me"`, `--label oncall`.

Show the list plainly — number, title, author, whether it's a draft. Let them pick.

### Step 2 — Read the whole conversation

A PR has **two separate comment streams**, and missing the second one is the most common way to overlook feedback:

```bash
# Conversation-level comments (the main thread)
gh pr view 1457 --repo EnterpriseDB/docs-editorial --comments

# Inline review comments — anchored to specific lines. These are the substantive ones for docs.
gh api repos/EnterpriseDB/docs-editorial/pulls/1457/comments \
  --jq '.[] | {file: .path, line: .line, author: .user.login, body: .body, resolved: .in_reply_to_id}'

# Review verdicts (approved / changes requested)
gh api repos/EnterpriseDB/docs-editorial/pulls/1457/reviews \
  --jq '.[] | {author: .user.login, state: .state, body: .body}'
```

Then **summarize for the writer, don't dump raw JSON.** Group the feedback by file, and for each point state: what the reviewer wants, which file and line, and whether it's a clear instruction or something ambiguous that needs a judgment call.

Separate the two kinds explicitly:

- **Actionable** — "change X to Y", "this heading should be sentence case". The agent can just do these.
- **Needs the writer** — "is this still accurate?", "should we document the fallback?". These are content questions. Ask; never invent an answer about product behavior.

If a reviewer's comment is genuinely unclear, say so and offer to draft a clarifying reply rather than guessing at an edit.

### Step 3 — Get the branch locally

```bash
cd ~/docs
git status --porcelain          # check for uncommitted work first
gh pr checkout 1457 --repo EnterpriseDB/docs-editorial
```

**Check `git status` before checking out.** If the writer has uncommitted changes on their current branch, checking out will either fail or carry the changes over. Stop and tell them what's uncommitted, and let them decide — don't stash or discard anything on your own initiative. Losing someone's unsaved work is unrecoverable and unforgivable.

Note the repo uses **Git LFS**, and the husky hooks fail loudly if `git-lfs` isn't installed. If a checkout errors with an LFS message, that's the cause — `brew install git-lfs && git lfs install` fixes it.

**Fork PRs:** if the PR comes from a fork, you can only push when the author enabled "allow edits by maintainers." `gh pr checkout` will work either way, but the push in step 6 will fail. Check early:

```bash
gh pr view 1457 --repo EnterpriseDB/docs-editorial --json headRepositoryOwner,maintainerCanModify
```

If pushing isn't possible, say so upfront and pivot to suggesting changes as review comments instead — don't discover it after the writer has made twenty edits.

### Step 4 — Make the edits

Work through the feedback point by point. For each change:

1. Read the file and show the writer the relevant passage in context.
2. Propose the edit — the actual replacement text, not a description of it.
3. Apply it once they're happy.

Content is `.mdx` under `product_docs/docs/` and `advocacy_docs/`. Watch for MDX-specific syntax — frontmatter, JSX components, `import` statements — and don't mangle it while editing prose around it.

Keep edits **tightly scoped to the review feedback.** Reviewers are looking at a diff; unrelated "improvements" scattered through the file make their job harder and can restart the review. If you spot something genuinely wrong that's out of scope, mention it to the writer and let them decide whether it belongs here or in a separate PR.

If the repo has the `doc-cleanup` skill available, use it for style-rule questions rather than reinventing the EDB conventions.

### Step 5 — Check the work

Before pushing, run the checks the repo already provides:

```bash
# Style — EDB's Vale rules (styles: Custom, EDB; config at .vale.ini)
vale product_docs/docs/path/to/changed-file.mdx

# See exactly what changed
git diff
```

Run Vale **only on the changed files**, not the whole repo — a full run surfaces hundreds of pre-existing warnings that have nothing to do with this PR and will bury the real signal.

Vale's `MinAlertLevel` is `suggestion`, so expect suggestions alongside errors. Report errors and warnings; mention suggestions only if they're relevant to what was actually edited. Vale is advisory — if a suggestion conflicts with what a reviewer explicitly asked for, the reviewer wins. Say so rather than silently overriding either.

Optional, when the change is structural (nav, links, new pages) rather than a wording fix:

```bash
npm run develop        # local preview at localhost:8000
npm run links:check    # link checker (Docker)
```

Both are slow. Don't run them for a typo fix.

Then **show the writer the complete diff** and walk through it in plain language — what changed, in which files, and how it maps to the review feedback. This is their last look before it becomes public.

### Step 6 — Commit and push

**This is a safety gate. See "Safety gates" below.**

The repo uses [Conventional Commits](https://www.conventionalcommits.org/). Match the existing style in the branch's history:

```bash
git log --oneline -5     # see what this branch's commits look like
```

Typical shapes: `docs(DOCS-4023): fix commit scope wording`, `fix: correct broken link in HM install guide`.

```bash
git add <specific files>          # name the files; avoid `git add -A`
git commit -m "docs(DOCS-xxxx): address review feedback"
git push
```

Name the files explicitly rather than `git add -A` — the working tree can contain build artifacts, `prs.json` dumps, or other people's stray files, and sweeping those into a docs PR is noisy and hard to unpick.

The **husky pre-commit hook runs `lint-staged`**, which may reformat files or reject the commit. If it fails, read the output, fix the cause, and retry — don't bypass it with `--no-verify` unless the writer explicitly asks and understands they're skipping a check the team put there deliberately.

After a successful push, confirm with the PR URL so the writer can see it landed.

**Never** force-push, rewrite history, or push directly to `develop` or `main`. Push only to the PR's own head branch. If a push is rejected because the branch moved, explain what happened and offer to pull the new commits in — don't resolve it with force.

### Step 7 — Optional: ping someone

**The default is to stop after the push.** This team's convention is to let the diff speak — reviewers see the new commits and re-review. Don't draft comments reflexively, and don't nudge the writer toward posting one.

Offer a ping only when there's a concrete reason: a question that blocks progress, feedback deliberately **not** addressed, or the writer says they want to pull someone in. When one of those applies, mention it once in a sentence and let them decide.

Three ways to do it, in rough order of how often they're wanted:

```bash
# 1. Request a review from specific people — no comment noise, just puts it in their queue
gh pr edit 1457 --repo EnterpriseDB/docs-editorial --add-reviewer nidhibhammar,djw-m

# 2. Comment with an @mention — use when there's an actual question to ask
gh pr comment 1457 --repo EnterpriseDB/docs-editorial \
  --body "@vtran-edb pushed the fix for the install steps — one open question on the fallback behaviour, see the thread below."

# 3. Reply in a specific inline comment thread — keeps the discussion anchored to the line
gh api repos/EnterpriseDB/docs-editorial/pulls/1457/comments/<comment_id>/replies \
  -f body="Reworded to sentence case — left the second heading as-is, flagging in case that was in scope too."
```

Option 1 is usually the right one when the writer just wants eyes on it. Reserve comments for when something actually needs saying.

Get the right handles from the PR itself rather than guessing at spellings:

```bash
gh pr view 1457 --repo EnterpriseDB/docs-editorial --json author,reviewRequests,comments \
  --jq '{author: .author.login, requested: [.reviewRequests[].login], commenters: [.comments[].author.login] | unique}'
```

Draft it, show the writer the exact text and who it goes to, and post only on an explicit yes — this is a safety gate. Keep it terse and factual. No padding, no effusive thanks.

If feedback was **not** addressed, that's the one case where saying something beats silence — a reviewer re-reading a diff and finding their comment quietly skipped is worse than being told it's deferred.

## Safety gates

Pushing commits and posting comments are visible to the whole team and can't be quietly undone. Both require a **deliberate typed confirmation** — not a click, not an "ok".

Before either action, show:

1. **Exactly what will happen** — the full diff for a push; the exact text for a comment.
2. **Where it lands** — repo, PR number, branch.
3. **Who sees it** — reviewers on the PR, and for `docs`, the public.

Then wait for the writer to type **`push it`** (for commits) or **`post it`** (for comments). Don't accept "yes", "ok", "sure", or "go ahead" as sufficient for these two actions — a specific phrase can't be produced by a reflexive keystroke, which is the entire point.

Everything else — reading PRs, checking out branches, editing files locally, running Vale — is reversible and needs no gate. Move quickly through those.

## Notes and edge cases

- **Never guess at product behavior.** If addressing a comment requires knowing whether a feature works a certain way, ask the writer or suggest checking with the PR author. Docs that confidently state something false are worse than docs with an open question.
- **Draft PRs** are works in progress. Confirm the author actually wants edits before touching one — pushing into someone's half-finished draft is intrusive.
- **Respect CODEOWNERS.** `CODEOWNERS` in the repo root maps paths to owners. If an edit touches an area someone else owns, mention who'll be pulled in as a reviewer.
- **Two repos, one clone.** Re-read the multi-remote warning above whenever a command behaves unexpectedly. It is almost always the cause.
- **The `deploy` label** on a PR generates a draft deployment — useful when a writer wants to see rendered output before merging. Suggest it for structural changes; mention that adding a label is a visible action too.
- **Don't merge.** Merging is the reviewer's call, not the writer's or the agent's, even when the PR is approved and green.
