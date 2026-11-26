---
title: Semantic knowledge bases
description: Index your database's schema metadata into a semantic knowledge base for natural-language schema search, agent tools, and text-to-SQL.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/
lastModified: 2026-11-26T13:15:29+05:30
---

# Semantic knowledge bases

A semantic knowledge base (semantic KB) indexes your database's schema (tables, views, columns, and their comments) into a searchable vector store, so an [agent](https://www.enterprisedb.com/docs/aidb/latest/agents/) can find the right relations and columns by meaning instead of guessing from column names. This is the foundation for accurate text-to-SQL: turning a natural-language question into a correct SQL query grounded in your actual schema. You can run the same searches yourself too.

## Semantic KB vs. vector knowledge base

A semantic KB and a [vector knowledge base](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/) both store embeddings and answer similarity searches, but they index different things and solve different problems.

|                 | Vector knowledge base                                                                                                                              | Semantic knowledge base                                     |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| What it embeds  | Your data (rows, documents, images)                                                                                                                | Your schema (table, view, and column metadata)              |
| What you search | Content, by meaning                                                                                                                                | Schema structure, by meaning                                |
| Created by      | `aidb.create_pipeline()` with a [`KnowledgeBase` step](https://www.enterprisedb.com/docs/aidb/latest/data-pipelines/pipeline-steps/#knowledgebase) | `aidb.create_semantic_kb()`                                 |
| Typical use     | Retrieval-augmented generation, semantic search                                                                                                    | Natural-language schema discovery, agent tools, text-to-SQL |

If you want to search what's in your database, use a vector knowledge base. If you want to search how your database is shaped, to find the tables and columns a question maps to, use a semantic KB.

## Indexing your schema

When a semantic KB crawls its schemas, it embeds one entry per structural element:

- Tables contribute their table definition and any table comment.
- Views contribute their view definition and any view comment.
- Columns contribute each column's definition (name, type, nullability, default) and any column comment.

Each entry has an `entity_type` of `Table`, `View`, or `Column`. Comments matter: a well-commented schema produces a far more useful semantic KB, because the natural-language intent in `COMMENT ON` statements is embedded alongside the structural definition and can be matched directly — see [Descriptions and curation](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/curation/) for writing those comments in a governed way.

A semantic KB also crawls your foreign keys into relationships — which tables join, on which columns, and how much that claim can be trusted — so it can answer not just "what tables exist" but "how do they connect." See [Relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/).

## In this section

| Page                                                                                                           | What it covers                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Searching a semantic KB](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/)   | The schema-search functions: `semantic_kb_search`, `get_metadata`, comment search, and filters                                                                           |
| [Relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/)         | How tables join: the foreign-key crawl, join-path finding, manually added relationships, and drift detection                                                             |
| [Query history](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/query-history/)         | Learning from the SQL your database already runs: importing history, excluding an application's SQL, searching past queries, and accepting joins no foreign key declares |
| [Business glossary](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/business-glossary/) | Importing business terms, binding them to tables and columns, and searching by those terms                                                                               |
| [Descriptions and curation](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/curation/)  | Writing object descriptions with `add_comment_to_object`, concurrency, auditing, and an optional review queue                                                            |
| [Auditing operations](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/auditing/)        | Reading the audit log, operation categories, what each record contains, and retention and pruning                                                                        |
| [Inspecting health](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/health/)            | Checking description coverage, queued schema changes, orphaned relationships and aliases, and recorded usage, and who can read the details                               |
| [Semantic aliases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/semantic-aliases/)   | Named, parameterized SQL queries with vectorized descriptions, enabling reusable, governed text-to-SQL                                                                   |
| [Text-to-SQL](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/text-to-sql/)             | How an AIDB agent uses the KB's search tools to discover schema and generate correct SQL                                                                                 |
| [Example](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/example/)                     | A worked end-to-end example over a sample schema                                                                                                                         |

## Getting started

Create a semantic KB over one or more schemas with `aidb.create_semantic_kb()`. It embeds the schema metadata with the model you pass, builds the KB's internal vector table, and crawls the schemas immediately:

```sql
SELECT aidb.create_semantic_kb(
name    => 'analytics_kb',
    model   => 'bge-small-en-v1.5-f16',
    schemas => ARRAY['my_schema'],
    auto_processing => 'Live'
);
```

`model` is the embedding model and is always required. A semantic KB uses a single embedding model for all of its metadata (and for any [semantic aliases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/semantic-aliases/) that are members of it), so search always compares vectors in the same space. A local model such as `bge-small-en-v1.5-f16` downloads from Hugging Face the first time it's used, so the first call is slow and fails without network access. To download it in advance, run `SELECT aidb.encode_text('bge-small-en-v1.5-f16', 'test');`. See [Local models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/). `auto_processing` controls how the KB reacts to schema changes after this — `Disabled` (the default), `Live`, or `Background`.

When exactly one semantic KB exists, you can omit `name`/`kb_name` from every semantic KB function, and the call resolves to that KB. An omitted name at creation registers it under the fixed name `default_semkb`.

For every management function's full parameters, the `auto_processing` modes, and every search, relationship, and curation function, see the [Semantic knowledge bases reference](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/).

## Using a semantic KB

- Directly, in SQL: call the [search functions](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/) (`aidb.semantic_kb_search()` and friends) to find the schema entities a question maps to.
- From an agent: the KB search functions are registered as native [agent tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/#semantic-knowledge-bases), so an AIDB agent can discover schema and answer questions with [text-to-SQL](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/text-to-sql/). Each KB also publishes a managed [agent plugin](https://www.enterprisedb.com/docs/aidb/latest/agents/plugins/#managing-a-semantic-kb-plugin), named `semkb_<kb_name>`, that you can attach to an agent to give it the KB's context and three bound search tools.
- Through saved queries: capture recurring questions as [semantic aliases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/semantic-aliases/), parameterized SQL with a natural-language description that search can find by meaning.

## Related documentation

- [Agents](https://www.enterprisedb.com/docs/aidb/latest/agents/), which covers building the in-database agents that call semantic KB search functions as tools.
- [Semantic knowledge base tools](https://www.enterprisedb.com/docs/aidb/latest/tools/native-tools/#semantic-knowledge-bases), which lists the native tool catalog entries for the KB functions.
- [Knowledge bases](https://www.enterprisedb.com/docs/aidb/latest/knowledge-bases/), which covers vector knowledge bases for semantic and hybrid search over your data.
- [Semantic knowledge bases reference](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/), the full API reference for every semantic KB function.

* [Searching](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/): Run natural-language schema search against a semantic knowledge base with semantic\_kb\_search and the schema-metadata functions.
* [Relationships](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/relationships/): Discover how tables join, find paths between tables with no shared foreign key, and record joins the schema doesn't declare.
* [Query history](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/query-history/): Learn from the SQL your database runs. Import query history, exclude an application's SQL, search past queries, and accept undeclared joins as relationships.
* [Business glossary](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/business-glossary/): Import a business glossary or ontology into a semantic KB with aidb.semantic\_kb\_import\_concepts(), so that aidb.semantic\_kb\_search() finds tables and columns by business terms.
* [Curation](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/curation/): Write object descriptions, protect them from accidental overwrites, and optionally route changes through a review queue before they go live.
* [Auditing](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/auditing/): Read the audit log of semantic knowledge base operations, see which operations AIDB records, and control how long it keeps records.
* [Health](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/health/): Check description coverage, queued schema changes, orphaned relationships and aliases, and recorded usage for a semantic knowledge base.
* [Semantic aliases](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/semantic-aliases/): Define named, parameterized SQL queries with vectorized descriptions so recurring questions map to trusted, reusable queries.
* [Text-to-SQL](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/text-to-sql/): How an AIDB agent uses a semantic knowledge base's search functions as tools to discover schema and answer questions with SQL.
* [Example](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/example/): A worked end-to-end example — comment a schema, index it into a semantic knowledge base, search it, and save and run an alias.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
