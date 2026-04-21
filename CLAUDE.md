# EDB Docs Editorial — Claude Guidelines

## Style rules

- Use American English.
- No em dashes. Use commas, parentheses, or rewrite the sentence.
- No semicolons.
- No metadiscourse. Never open with "This page covers...", "This table depicts...", "In this section...".
- Never use "this" without a noun following it. "This applies..." → "These requirements apply..." or rewrite.
- navTitles must be gerund-based and action-oriented. "Maintenance" → "Maintaining the cluster". "Commit scopes" → "Configuring commit scopes".
- Active voice preferred. "Schema design must separate..." → "Design your schema to separate..."
- No bullet points in prose. Write lists as natural language: "x, y, and z".
- Avoid: "genuinely", "honestly", "straightforward".
- Short, clear sentences. If a sentence has more than two clauses, split it.
- Don't use PostgreSQL unless it's code formatting. Use Postgres instead.
- Style rules are enforced by Vale (.vale.ini)
- Avoid using "normal".

## PGD technical constraints

### Commit scopes
- Use `SYNCHRONOUS COMMIT` not `GROUP COMMIT`. GROUP COMMIT is experimental and not recommended.
- Predefined scopes and their rules (from BDR source):
  - `local protect` = `ASYNCHRONOUS COMMIT`
  - `majority protect` = `MAJORITY ORIGIN GROUP SYNCHRONOUS COMMIT`
  - `adaptive protect` = `MAJORITY ORIGIN GROUP SYNCHRONOUS COMMIT DEGRADE ON (timeout = 10s, require_write_lead = true) TO ASYNCHRONOUS COMMIT`
  - `lag protect` = `MAJORITY ORIGIN GROUP LAG CONTROL (max_lag_time = 30s, max_commit_delay = 10s)`
- `bdr.create_commit_scope()` takes: `commit_scope_name`, `origin_node_group`, `rule`, `wait_for_ready`. No separate type parameter — the type is encoded in the rule string.
- LAG CONTROL can be combined with SYNCHRONOUS COMMIT using AND in the same rule (confirmed in BDR test suite).
- You cannot degrade from SYNCHRONOUS COMMIT to LAG CONTROL (only to ASYNC or same kind).

### Routing
- Do not use "active/active" or "active/passive" for routing configurations. Use "local routing" and "global routing".
- Don't use GUC, use configuration parameter instead
- `enable_raft`: always on, cannot be disabled on subgroups once enabled (confirmed in bdr_functions.c: "Cannot disable Raft once enabled").
- `enable_routing` defaults: off at top-level group, on at subgroup level (local routing is default behaviour).
- For global routing: enable `enable_routing` on the top-level group and disable it on subgroups.
- Connection Manager runs inside each Postgres instance in PGD 6. Default read-write port is 6432.

### Parallel Apply
- Parallel apply is on by default (`bdr.writers_per_subscription` defaults to 2).
- `bdr.max_writers_per_subscription` (default 8) is the hard ceiling and requires a server restart to change.
- `num_writers` is set at the node group level via `bdr.alter_node_group_option()`.
- Parallel apply is incompatible with Eager Replication only. NOT incompatible with SYNCHRONOUS COMMIT (confirmed in bdr_commit.c — the incompatibility check is only for BDR_CS_KIND_GROUP_COMMIT).
- `streaming_mode = writer` recommended for geo-distributed clusters with high write volumes.

### Sequences
- GUC is `bdr.default_sequence_kind` (not `default_seqkind`).
- `bdr.default_sequence_kind = distributed` is the recommended default for geo-distributed clusters.
- Do not use `local` sequences in geo-distributed clusters with multiple write locations — causes insert conflicts.
- `snowflakeid`: 64-bit only, no inter-node communication.
- `galloc`: supports smallint (2-byte), integer (4-byte), and bigint (8-byte); requires quorum for new range allocation.

### Replication sets
- Replication sets are planned for deprecation in the next minor PGD version. Avoid building new content around them.

### Terminology
- "geo-replication" — hyphenated, lowercase.
- Deployment patterns: "two data groups", "three data groups", "multiple locations, data residency". Do not use "active-active" as a routing label.
- Deployment patterns are a PGD Expanded feature.

## Editorial workflow

When asked to proof-check or review a page, report issues found and ask which ones to fix before making any changes.

## Source verification

Before making any technical claim, verify it against:
1. BDR source repo: `/sessions/amazing-dazzling-fermi/mnt/bdr`
2. Existing PGD 6.3 docs: `/sessions/amazing-dazzling-fermi/mnt/docs-editorial/product_docs/docs/pgd/6.3`

Do not invent SQL examples, function signatures, or GUC names without checking the source. Check `bdr--6.3.1.sql` for function signatures and `bdr--6.3.1.sql` / test files for valid syntax examples.

## geo-replication-dba guide

Location: `product_docs/docs/pgd/6.3/geo-replication-dba/`

Current nav (index.mdx):
- topology — Choosing a deployment pattern
- topology-setup — Setting up your topology
- routing — Configuring routing
- commit-scopes — Configuring commit scopes
- managing-lag — Controlling replication lag
- replication-tuning — Tuning replication
- maintenance — Performing cluster maintenance
