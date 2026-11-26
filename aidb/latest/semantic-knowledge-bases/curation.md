---
title: Descriptions and curation
description: Write object descriptions, protect them from accidental overwrites, and optionally route changes through a review queue before they go live.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/curation/
lastModified: 2026-11-26T13:15:29+05:30
---

# Descriptions and curation

A well-commented schema produces a far more useful semantic KB — see [Indexing your schema](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/#indexing-your-schema). You can always write those comments with plain `COMMENT ON`, but `aidb.add_comment_to_object()` does the same write and reconciles every knowledge base that indexes the object, so the new text is searchable immediately, without waiting for a crawl.

A semantic KB can add, protect, and remove descriptions safely — resolving concurrent edits and auditing every change along the way — and, if you turn on curation, hold each write for review before it goes live.

This applies to any table, view, column, or constraint (`object_type => 'table' | 'view' | 'column' | 'constraint'`) — it's a general knowledge-base capability, not something specific to [relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/). Commenting on a constraint is also how you give a crawled relationship a business-readable name. See [Relationships and comment curation](#relationships-and-comment-curation).

## Writing a description

Call `aidb.add_comment_to_object()` with the schema, object name, and comment text to write a description and reconcile every KB that indexes the object in one step:

```sql
SELECT jsonb_pretty(aidb.add_comment_to_object(
  'bank', 'transactions', 'A movement of money against an account.', kb_name => 'bank_kb'));
```

```output title="Output"
 {
     "current": "A movement of money against an account.",
     "outcome": "applied",
     "previous": null,
     "knowledge_bases_reconciled": [
         "bank_kb"
     ]
 }
```

`knowledge_bases_reconciled` names every KB updated by the write — an object can be indexed by more than one.

> **Note: Breaking change at 7.7.0**
>
> `mode` defaults to `'add'`, and `'add'` now refuses when a description already exists, rather than overwriting it silently:
>
> ```sql
> SELECT aidb.add_comment_to_object('bank', 'transactions', 'Another go.', kb_name => 'bank_kb');
> ```
>
> ```output title="Output"
> ERROR:  Invalid parameters: bank.transactions already has a description, and mode is 'add'.
> Current: "A movement of money against an account.". To replace it, call again with mode => 'edit'
> ```
>
> Callers that relied on the old overwrite behavior must pass `mode => 'edit'` explicitly:
>
> ```sql
> SELECT jsonb_pretty(aidb.add_comment_to_object('bank', 'transactions',
>   'A movement of money against an account, positive or negative.',
>   kb_name => 'bank_kb', mode => 'edit'));
> ```

## Protecting existing descriptions

A description AIDB didn't write is treated as a person's work — `mode => 'edit'` alone won't overwrite it:

```sql
SELECT aidb.add_comment_to_object('bank', 'customers', 'Our retail banking customers.',
  kb_name => 'bank_kb', mode => 'edit');
```

```output title="Output"
ERROR:  Invalid parameters: bank.customers has a description this system did not write, so it is
treated as a person's. Pass force => true to replace it. Current: "People who bank with us."
```

```sql
SELECT jsonb_pretty(aidb.add_comment_to_object('bank', 'customers', 'Our retail banking customers.',
  kb_name => 'bank_kb', mode => 'edit', force => true));
```

## Handling concurrent edits

Pass what you last read as `expected_comment`, and the write fails if someone changed the description in the meantime — optimistic concurrency without a lock:

```sql
SELECT aidb.add_comment_to_object('bank', 'customers', 'Newer text.',
  kb_name => 'bank_kb', mode => 'edit', expected_comment => 'Something else');
```

```output title="Output"
ERROR:  Invalid parameters: the description has changed since it was read. Expected "Something else",
found "Our retail banking customers."
```

## Removing a description

`aidb.remove_comment()` clears a description the same way `add_comment_to_object()` writes one, and it's the direct route: it doesn't need a `mode` argument, since there's nothing to protect against once the comment is gone.

```sql
SELECT jsonb_pretty(aidb.remove_comment('bank', 'transactions', kb_name => 'bank_kb'));
```

`remove_comment()` takes the same `expected_comment` and `force` protections as `add_comment_to_object()`, so a description a person wrote still needs `force => true` to remove.

## Auditing changes

Semantic KB operations, including description changes, are recorded in an audit log. For a description write, the record includes whether the write was forced and what it discarded. A superuser, or a login that belongs to the semantic KB's owner role, reads the log with `aidb.semantic_kb_audit()`:

```sql
SELECT ts, op, func, actor_name, object_ref, detail
FROM aidb.semantic_kb_audit(kb_name => 'bank_kb', op => 'annotate')
ORDER BY ts DESC LIMIT 3;
```

An applied description is recorded as `annotate`. A description held for review is recorded as `propose` until a reviewer approves or rejects it. For the operation categories, record contents, retention, and pruning, see [Auditing semantic KB operations](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/auditing/).

## Reviewing before it's live

With curation on for a KB, enabled by calling `aidb.update_semantic_kb_curation(kb_name, true)`, a write doesn't take effect. It queues for review instead:

1. Turn on curation for the KB:

   ```sql
   SELECT aidb.update_semantic_kb_curation('bank_kb', true);
   ```

   ```output title="Output"
        update_semantic_kb_curation
   --------------------------------------
    {"current": true, "previous": false}
   (1 row)
   ```

2. Write a description as usual. With curation on, it queues instead of applying:

   ```sql
   SELECT jsonb_pretty(aidb.add_comment_to_object(
     'bank', 'accounts', 'An account a customer holds with the bank.', kb_name => 'bank_kb'));
   ```

   ```output title="Output"
    {
        "current": null,
        "outcome": "queued",
        "previous": null,
        "proposed": "An account a customer holds with the bank.",
        "knowledge_bases": [
            "bank_kb"
        ]
    }
   ```

   > **Note: Check outcome, not just the absence of an error**
   >
   > `outcome` is `"queued"`, not `"applied"`, and the live comment is unchanged. A caller that only checks for the absence of an error will believe the write succeeded.

3. Review the queue and approve or reject the proposal:

   ```sql
   SELECT object, object_type, proposed_comment, proposed_by FROM aidb.list_proposed_comments('bank_kb');

   SELECT jsonb_pretty(aidb.resolve_object_comment('bank_kb', 'bank', 'accounts', 'approve'));
   ```

   `decision` is `'approve'` or `'reject'`. Once approved, the live comment updates and the KB reconciles it, the same as an uncurated write.

4. Turn curation back off, the same way you turned it on:

   ```sql
   SELECT aidb.update_semantic_kb_curation('bank_kb', false);
   ```

> **Note: resolve\_object\_comment and update\_semantic\_kb\_curation are deliberately SQL-only**
>
> Neither is registered as a native agent tool — see [Native tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/#semantic-knowledge-bases). An agent holding either could approve its own proposal or switch off the review that governs it, so approving a proposal and toggling curation both stay with a person, by design.

## Relationships and comment curation

Comment curation and [relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/) are separate features that don't gate each other, even though the two can look related at a glance:

- `update_semantic_kb_curation()` controls comment writes only. Relationship writes never consult it.
- A relationship an agent records is always stored as `status = 'proposed'`, regardless of the curation setting. A person approves it by re-asserting it with `aidb.add_relationship()`. `aidb.accept_relationship_candidates()` accepts only candidates derived from query history, and `resolve_object_comment()` doesn't apply to relationships.
- `object_type => 'constraint'` is how a person attaches a business-readable description to a relationship the crawl found — see [Verifying what the crawl found](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/#verifying-what-the-crawl-found), where a constraint's comment becomes that relationship's `description`.

This writes the description [the crawl example](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/#verifying-what-the-crawl-found) shows already attached to `accounts_cust_id_fkey`:

```sql
SELECT jsonb_pretty(aidb.add_comment_to_object(
  'bank', 'accounts', 'Every account belongs to exactly one customer.',
  object_type => 'constraint', constraint_name => 'accounts_cust_id_fkey', kb_name => 'bank_kb'));
```

The same call accepts `object_type => 'column'` with `column_name` to comment on a column instead.

## Common errors

There are no custom SQLSTATEs on this surface — match on message text, and most of it carries the `Invalid parameters: ...` prefix. Three of these are covered where they come up: `mode => 'add'` refusing an existing description (see [Writing a description](#writing-a-description)), a protected description refusing an overwrite (see [Protecting existing descriptions](#protecting-existing-descriptions)), and a stale `expected_comment` refusing a concurrent edit (see [Handling concurrent edits](#handling-concurrent-edits)).

`mode` and `decision` are controlled vocabularies too, validated at the point they're read, with the allowed values listed in the error:

```sql
SELECT aidb.add_comment_to_object('bank', 'events', 'x', kb_name => 'bank_kb', mode => 'bogus');
```

```output title="Output"
ERROR:  Invalid parameters: mode 'bogus' is not one of 'add' or 'edit'
```

```sql
SELECT aidb.resolve_object_comment('bank_kb', 'bank', 'events', 'maybe');
```

```output title="Output"
ERROR:  Invalid parameters: decision 'maybe' is not one of 'approve' or 'reject'
```

A valid decision still fails if there's nothing to decide on:

```sql
SELECT aidb.resolve_object_comment('bank_kb', 'bank', 'events', 'approve');
```

```output title="Output"
ERROR:  Invalid parameters: bank.events has no comment awaiting a decision
```

## Next steps

- See how a crawled relationship's `description` comes from a constraint comment in [Relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/).
- Find the tables, views, and columns that still lack a description in [Inspecting semantic KB health](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/health/#finding-descriptions-to-add).
- Review the full search surface, including proposed content, in [Searching a semantic KB](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/).
- Look up every curation function's full parameters and return columns in the [reference](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/#managing-descriptions-and-curation).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
