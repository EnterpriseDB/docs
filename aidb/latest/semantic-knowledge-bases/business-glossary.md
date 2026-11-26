---
title: Business glossary
description: Import a business glossary or ontology into a semantic KB with aidb.semantic_kb_import_concepts(), so that aidb.semantic_kb_search() finds tables and columns by business terms.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/business-glossary/
lastModified: 2026-11-26T13:15:29+05:30
---

# Business glossary

A semantic KB finds tables and columns by their names and comments, but people often search with business words that don't appear in them. A business glossary links those words to the tables and columns that hold the data. Users then find data without any change to your schema or comments. Search needs no connection to your data catalog, and it returns only the objects that the caller can read.

You write the glossary, or ontology, as one JSON document and import it with `aidb.semantic_kb_import_concepts()`. The semantic KB keeps a copy of the glossary, and `aidb.semantic_kb_search()` uses it as one of its sources, so your search calls don't change.

> **Note**
>
> In AIDB 7.10.0, you build the glossary document yourself in the format that [Writing the glossary document](#writing-the-glossary-document) describes. Alternatively, write a script that converts an export from your data catalog, and then [import the result](#importing-a-glossary). AIDB doesn't provide a converter and doesn't fetch a glossary from a catalog.

## Glossary workflow

A glossary goes from a JSON document to search results in four steps:

1. You [write](#writing-the-glossary-document) the business terms (concepts), the links between them (relations), and the tables and columns that hold their data (bindings) in one JSON document.

2. You [import](#importing-a-glossary) the document with `aidb.semantic_kb_import_concepts()`, which checks the document, stores it in the semantic KB, and embeds each term with the model of the semantic KB.

3. You [search](#searching-with-the-glossary) as usual with `aidb.semantic_kb_search()`. The concept source compares the query with the terms, follows relations one step, and returns the bound tables and columns.

4. When the glossary changes, you [import the whole document again](#updating-the-glossary).

## Prerequisites

Confirm the following before you import a glossary. The glossary needs no setup of its own, because `aidb.create_semantic_kb()` creates the term store and `aidb.semantic_kb_search()` uses the glossary by default. You need:

- AIDB 7.10.0 or later, where a semantic KB that existed before the upgrade gets its term store when you upgrade.

- A semantic KB, which you create as described in [Getting started](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/#getting-started).

- An embedding model that you registered, such as `bert` in the example (see [Integrating models](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/)), and `USAGE` on the credential of that model. The import embeds the terms with the model of the semantic KB.

- Membership in the `aidb_users` role.

- A glossary document in the format that [Writing the glossary document](#writing-the-glossary-document) describes.

## Writing the glossary document

Write your glossary as one JSON document, and then [import it](#importing-a-glossary). This minimal document has two concepts, one relation, and one binding:

```json
{
  "concepts": [
    {"id": "c-revenue", "pref_label": "Revenue"},
    {"id": "c-quarterly", "pref_label": "Quarterly Revenue", "alt_labels": ["sales by quarter"],
     "definition": "Revenue that a quarter produces."}
  ],
  "relations": [
    {"subject": "c-quarterly", "predicate": "skos:broader", "object": "c-revenue"}
  ],
  "bindings": [
    {"concept": "c-quarterly", "schema": "sales", "relation": "orders", "column": "rev_q"}
  ]
}
```

The document is one JSON object with four optional arrays:

| Array        | Holds                                                   |
| ------------ | ------------------------------------------------------- |
| `concepts`   | The terms.                                              |
| `relations`  | The links between terms.                                |
| `bindings`   | The tables and columns that hold the data of each term. |
| `predicates` | The predicates that aren't built in.                    |

### Defining concepts

Describe each term with these fields:

| Field                                       | Required | Description                                                                     |
| ------------------------------------------- | -------- | ------------------------------------------------------------------------------- |
| `id`                                        | Yes      | The ID of the term in your catalog, for example a UUID.                         |
| `pref_label`                                | Yes      | The name of the term.                                                           |
| `alt_labels`                                | No       | Synonyms, as an array of strings.                                               |
| `definition`                                | No       | The definition of the term.                                                     |
| `deleted`                                   | No       | `true` marks the term as deleted. The default is `false`.                       |
| `fqn`, `iri`, `status`, `owners`, `version` | No       | Information from your catalog. The import stores it, and search doesn't use it. |

Search uses `pref_label`, `alt_labels`, `definition`, and the broader terms. The import makes one text from them and embeds it with the model of the semantic KB. Put the words that people search for in `alt_labels`.

### Defining relations

Link two concepts with these fields:

| Field       | Required | Description                                              |
| ----------- | -------- | -------------------------------------------------------- |
| `subject`   | Yes      | The ID of a concept.                                     |
| `predicate` | Yes      | A built-in predicate, or one that `predicates` declares. |
| `object`    | Yes      | The ID of a concept.                                     |

You can give a link from both ends, for example `A skos:broader B` and `B skos:narrower A`, and the import stores it once.

The predicate of a relation has a category, and the category tells search whether to follow the relation:

| Category       | Meaning                              | Search follows it |
| -------------- | ------------------------------------ | ----------------- |
| `hierarchical` | One term is broader than the other.  | Yes               |
| `equivalence`  | The two terms have the same meaning. | Yes               |
| `associative`  | The two terms relate to each other.  | No                |

Search follows every `hierarchical` and `equivalence` relation, including the predicates that you declare. The text that the import embeds uses only `skos:broader` and `skos:narrower`, because the document doesn't say which end of another `hierarchical` predicate is the broader term.

### Defining bindings

Bind a concept to a table or column with these fields:

| Field      | Required | Description                                               |
| ---------- | -------- | --------------------------------------------------------- |
| `concept`  | Yes      | The ID of a concept.                                      |
| `schema`   | Yes      | The schema of the table or view.                          |
| `relation` | Yes      | The table or view.                                        |
| `column`   | No       | The column. Leave it out to bind the whole table.         |
| `origin`   | No       | `catalog_tag`, the only accepted value. It's the default. |

A binding has a status:

| Status     | Meaning                                                                |
| ---------- | ---------------------------------------------------------------------- |
| `approved` | Search uses the binding. An import writes every binding as `approved`. |
| `proposed` | Search uses the binding only when you set `include_proposed => true`.  |
| `rejected` | Search never uses the binding.                                         |

In AIDB 7.10.0, an import is the only way to write a binding, so every binding is `approved`.

### Declaring predicates

Use one of the five built-in SKOS predicates in your relations:

| Predicate         | Category       | Inverse          |
| ----------------- | -------------- | ---------------- |
| `skos:broader`    | `hierarchical` | `skos:narrower`  |
| `skos:narrower`   | `hierarchical` | `skos:broader`   |
| `skos:exactMatch` | `equivalence`  | None (symmetric) |
| `skos:closeMatch` | `equivalence`  | None (symmetric) |
| `skos:related`    | `associative`  | None (symmetric) |

You declare any other predicate in `predicates`. AIDB compares predicates as exact strings, so `skos:broader` and its full IRI are two different predicates. Declare a predicate with these fields:

| Field      | Required | Description                                                                                                                                                                                                                         |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `iri`      | Yes      | The predicate, as it appears in `relations`.                                                                                                                                                                                        |
| `category` | Yes      | `hierarchical`, `equivalence`, or `associative`.                                                                                                                                                                                    |
| `inverse`  | No       | The predicate that gives the same link from the other end. A `hierarchical` predicate needs a different predicate as its inverse. An `equivalence` predicate must not have an inverse. With no inverse, the predicate is symmetric. |

### Choosing searchable terms

Follow these tips so that people can find your terms:

- Start with the terms that people ask about most. A few dozen searched terms help more than a full export of a catalog.

- Put the words that people type in `alt_labels`, such as synonyms, abbreviations, and jargon, because search matches the query with these words.

- Write a plain definition, because the definition is part of the text that the import embeds.

- Bind a term to the column that holds its data where you can, and to a table when no single column does.

- Group terms with `skos:broader`. The text of a term includes the labels of its broader terms, so a search for the broader term also finds the narrower one.

- Keep IDs stable. The ID is the identity of a term. A term with a new ID is a new term, and the import marks the old one as deleted.

- Import only after a complete fetch, because the document is the whole glossary.

### Meeting the validation rules

A glossary document must follow these rules:

- The document is the whole glossary of the semantic KB. A relation or a binding can name only a concept in the same document, and not a concept that the document marks as deleted.

- Concept IDs are unique, and IDs and labels aren't blank.

- A relation can't link a concept to itself, and the same relation can't appear twice.

- The `hierarchical` relations can't form a cycle. For example, `A skos:broader B` and `B skos:broader A` is an error.

- A field that isn't in the tables above is an error.

- A predicate that isn't built in must be in `predicates`.

- A binding can't set `origin` to `inferred`. Only the proposal step of the semantic KB writes inferred bindings.

## Importing a glossary

Follow this example to import a glossary into a semantic KB over a solar farm, where the schemas `telemetry` and `maintenance` hold the tables `panel_readings`, `inspections`, `cleaning_log`, and `work_orders`. The example creates a semantic KB over the two schemas and imports a glossary. [Searching with the glossary](#searching-with-the-glossary) then searches it.

The outputs on this page come from a run on AIDB 7.10.0 with PostgreSQL 18 and the `bert` model (all-MiniLM-L6-v2). Ranks and scores change with other data or another model.

### Creating the sample tables

Create a minimal version of the schema. The outputs on this page come from a larger schema, so your ranks differ. The table `maintenance.wash_schedule` doesn't exist yet, because the glossary binds a term to it before a later step creates it.

```sql
CREATE SCHEMA telemetry;
CREATE SCHEMA maintenance;
CREATE TABLE telemetry.panel_readings(panel_id int, read_at timestamptz, kwh numeric, amb numeric);
CREATE TABLE maintenance.inspections(panel_id int, inspected_at timestamptz, result text);
CREATE TABLE maintenance.cleaning_log(panel_id int, cleaned_at timestamptz, crew text);
CREATE TABLE maintenance.work_orders(order_id int, panel_id int, opened_at timestamptz, description text);
```

### Creating the semantic KB

Create a semantic KB over the two schemas with the `bert` embedding model, or skip this step if you already have a semantic KB.

```sql
SELECT aidb.create_semantic_kb('ops_kb', 'bert', ARRAY['telemetry', 'maintenance']);
```

```output title="Output"
 create_semantic_kb
--------------------
 ops_kb
(1 row)
```

### Running the import

Import a glossary with four terms, two relations, and five bindings. The predicate `relatedTo` isn't built in, so the document declares it as `associative`. The table `maintenance.wash_schedule` doesn't exist yet, so its binding waits.

```sql
SELECT * FROM aidb.semantic_kb_import_concepts('{
  "predicates": [{"iri": "https://open-metadata.org/ontology/relatedTo", "category": "associative"}],
  "concepts": [
    {"id": "c-cleaning", "pref_label": "Cleaning Event", "alt_labels": ["panel wash", "wash"],
     "definition": "A panel wash."},
    {"id": "c-yield", "pref_label": "Energy Yield", "alt_labels": ["output", "production", "kWh"],
     "definition": "Energy produced."},
    {"id": "c-condition", "pref_label": "Panel Condition", "alt_labels": ["panel health"],
     "definition": "Overall state of a panel."},
    {"id": "c-soiling", "pref_label": "Soiling", "alt_labels": ["dirty panel", "dust on panel", "panel dirt"],
     "definition": "Dust and dirt on the panel surface that decrease the output."}
  ],
  "relations": [
    {"subject": "c-cleaning", "predicate": "https://open-metadata.org/ontology/relatedTo", "object": "c-soiling"},
    {"subject": "c-soiling", "predicate": "skos:broader", "object": "c-condition"}
  ],
  "bindings": [
    {"concept": "c-soiling", "schema": "telemetry", "relation": "panel_readings", "column": "amb"},
    {"concept": "c-yield", "schema": "telemetry", "relation": "panel_readings", "column": "kwh"},
    {"concept": "c-condition", "schema": "maintenance", "relation": "inspections"},
    {"concept": "c-cleaning", "schema": "maintenance", "relation": "cleaning_log"},
    {"concept": "c-cleaning", "schema": "maintenance", "relation": "wash_schedule"}
  ]
}', 'ops_kb');
```

```output title="Output"
 concepts_added | concepts_updated | concepts_unchanged | concepts_deleted | concepts_embedded | relations_written | relations_removed | bindings_written | bindings_removed
----------------+------------------+--------------------+------------------+-------------------+-------------------+-------------------+------------------+------------------
              4 |                0 |                  0 |                0 |                 4 |                 2 |                 0 |                5 |                0
(1 row)
```

The import added and embedded the four concepts, and wrote the two relations and the five bindings.

> **Warning: The import replaces the whole glossary**
>
> Each import gives the whole glossary of the semantic KB. The import marks every concept that the document leaves out as deleted. It also removes every relation and binding that the document doesn't state again. Import only a complete document.

The import writes a row only when a value changed, so you can run it again safely. A second run with the same document changes nothing:

```sql
SELECT * FROM aidb.semantic_kb_import_concepts('<the same document>', 'ops_kb');
```

```output title="Output"
 concepts_added | concepts_updated | concepts_unchanged | concepts_deleted | concepts_embedded | relations_written | relations_removed | bindings_written | bindings_removed
----------------+------------------+--------------------+------------------+-------------------+-------------------+-------------------+------------------+------------------
              0 |                0 |                  4 |                0 |                 0 |                 0 |                 0 |                0 |                0
(1 row)
```

The import checks the whole document before it writes. If the document breaks a rule, the import writes nothing, and the error lists each problem with the path of its field, up to 50. See [Writing the glossary document](#writing-the-glossary-document) for the rules, and the [reference](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/#aidbsemantic_kb_import_concepts) for each output column.

The error names the field and tells you how to fix it:

```sql
SELECT * FROM aidb.semantic_kb_import_concepts('{
  "concepts": [{"id": "c-yield", "pref_label": "Energy Yield"}],
  "bindings": [{"concept": "c-soiling", "schema": "telemetry", "relation": "panel_readings", "column": "amb"}]
}', 'ops_kb');
```

```output title="Output"
ERROR:  Invalid parameters: invalid vocabulary document: bindings[0].concept: unknown concept "c-soiling"; the document is the whole vocabulary and the import marks every concept it leaves out as deleted, so add the concept to concepts
```

The error message says `vocabulary document` for what this page calls the glossary document.

## Searching with the glossary

Search as usual to use the glossary, because the concept source runs in every search that doesn't narrow `sources`. To compare results with and without the glossary, to use only the glossary, or to combine it with other sources, see the following sections.

### Comparing results with and without the glossary

Search with and without the glossary to see what the concept source adds. This example searches the glossary that [Importing a glossary](#importing-a-glossary) imported. Search for `dirty panel` with only the schema source to get a baseline. The column `amb` ranks 36th, far from the top results:

```sql
SELECT rank, relation_name, column_name, source_type
  FROM aidb.semantic_kb_search('dirty panel', 'ops_kb', sources => '{schema}', top_k => 50)
 WHERE column_name = 'amb';
```

```output title="Output"
 rank | relation_name  | column_name | source_type
------+----------------+-------------+-------------
   36 | panel_readings | amb         | schema
(1 row)
```

Run the same search with the default sources. `aidb.semantic_kb_search()` has a source named `concept` that's in the default set, so a search with no `sources` argument uses the glossary:

```sql
SELECT rank, relation_name, column_name, source_type, components->>'provenance' AS via
  FROM aidb.semantic_kb_search('dirty panel', 'ops_kb', top_k => 5);
```

```output title="Output"
 rank | relation_name  | column_name | source_type |           via
------+----------------+-------------+-------------+-------------------------
    1 | cleaning_log   |             | schema      | concept:Cleaning Event
    2 | inspections    |             | schema      | concept:Panel Condition
    3 | panel_readings | kwh         | schema      | concept:Energy Yield
    4 | panel_readings | amb         | concept     | concept:Soiling
    5 | work_orders    |             | schema      |
(5 rows)
```

`amb` moved from rank 36 to rank 4, and no table or comment changed. The key `provenance` in `components` names the term that found the row, as `concept:<pref_label>`.

### Finding results with the concept source

The concept source takes these steps for each search:

1. It finds the concepts nearest to the query. It skips deleted concepts and concepts that a model other than the model of the semantic KB embedded.

2. From each of these concepts, it follows `hierarchical` and `equivalence` relations one step, in both directions. A concept found this way gets 0.9 times the score of the
   concept it came from, and it doesn't follow `associative` relations.

3. It removes the concepts with a score below `min_similarity`, if you set it.

4. It returns the tables and columns that the concepts are bound to. It uses `approved` bindings, and also `proposed` bindings when you set `include_proposed => true`.

5. It removes each table or column that doesn't exist, or that the semantic KB doesn't index.

6. It removes each table or column that you can't read, as [Controlling access](#controlling-access) describes.

The source returns only `Table`, `View`, and `Column` rows. If `entity_types` names none of these three, the source doesn't run.

### Combining results from several sources

When the concept source and the schema source both find the same table or column, search combines them into one row. That row has `source_type` `schema`, and `components` has the rank from each source:

```sql
SELECT relation_name, column_name, source_type, components
  FROM aidb.semantic_kb_search('dirty panel', 'ops_kb', top_k => 50)
 WHERE column_name = 'amb';
```

```output title="Output"
 relation_name  | column_name | source_type |                                                       components
----------------+-------------+-------------+------------------------------------------------------------------------------------------------------------------------
 panel_readings | amb         | schema      | {"rrf": 0.02681, "cosine": 0.58003, "schema": 36, "status": "approved", "concept": 1, "provenance": "concept:Soiling"}
(1 row)
```

The concept source ranks `amb` first, and the schema source ranks it 36th. With `top_k => 5`, the schema source didn't reach rank 36, so the row read `concept`. To find every row that the glossary found, filter on `components ? 'concept'`, not on `source_type`.

> **Note**
>
> `cosine` in `components` is the best cosine of all the sources that found the row.

### Searching only the glossary

Set `sources => '{concept}'` to see what the glossary alone returns. In this example, `min_similarity` removes the terms that aren't near the query:

```sql
SELECT rank, relation_name, column_name,
       round((components->>'cosine')::numeric, 2) AS cosine,
       components->>'status' AS status, components->>'provenance' AS via
  FROM aidb.semantic_kb_search('dirty panel', 'ops_kb', sources => '{concept}',
                               min_similarity => 0.4);
```

```output title="Output"
 rank | relation_name  | column_name | cosine |  status  |           via
------+----------------+-------------+--------+----------+-------------------------
    1 | panel_readings | amb         |   0.58 | approved | concept:Soiling
    2 | inspections    |             |   0.52 | approved | concept:Panel Condition
    3 | cleaning_log   |             |   0.49 | approved | concept:Cleaning Event
(3 rows)
```

`status` is the status of the binding. For the other arguments of `aidb.semantic_kb_search()`, see [Searching](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/searching/) and the [reference](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/#aidbsemantic_kb_search).

## Updating the glossary

When the glossary changes in your catalog, import the whole document again. The import compares the document with the term store and writes only the changes:

- The import adds and embeds a new term.

- The import updates a changed term, and embeds it again only when its label, synonyms, definition, or broader terms changed.

- The import marks a term that isn't in the document as deleted, and search skips it.

- The import removes a relation or a binding that isn't in the document.

An import replaces the glossary and doesn't add to it, so a semantic KB takes its glossary from one source. An import of an empty document, `'{}'`, marks every term as deleted and removes every relation and binding.

> **Note**
>
> A binding names its table and column. If you rename a table or a column, search doesn't use its binding until you import a document with the new name.

### Binding to a table that doesn't exist yet

Check a waiting binding before and after you create its table. The glossary binds Cleaning Event to `maintenance.wash_schedule`, which doesn't exist, so search doesn't return it:

```sql
SELECT count(*)
  FROM aidb.semantic_kb_search('panel wash', 'ops_kb', top_k => 50)
 WHERE relation_name = 'wash_schedule';
```

```output title="Output"
 count
-------
     0
(1 row)
```

Create the table, and refresh the semantic KB so that it indexes the table. This semantic KB uses the default processing mode, `Disabled`, so the refresh is a manual call (see [Choosing a processing mode](#choosing-a-processing-mode)):

```sql
CREATE TABLE maintenance.wash_schedule(panel_id int, planned_at timestamptz, crew text);
SELECT aidb.refresh_semantic_kb('ops_kb');
```

Search now uses the binding, without another import:

```sql
SELECT rank, relation_name, source_type, components->>'provenance' AS via
  FROM aidb.semantic_kb_search('panel wash', 'ops_kb', top_k => 10)
 WHERE relation_name = 'wash_schedule' AND column_name IS NULL;
```

```output title="Output"
 rank | relation_name | source_type |          via
------+---------------+-------------+------------------------
    3 | wash_schedule | schema      | concept:Cleaning Event
(1 row)
```

### Choosing a processing mode

Search uses a waiting binding once the semantic KB indexes its table or column. The `auto_processing` mode of the semantic KB sets when that happens:

| `auto_processing`    | When search uses a waiting binding after `CREATE TABLE`                |
| -------------------- | ---------------------------------------------------------------------- |
| `Disabled` (default) | After you call `aidb.refresh_semantic_kb()`.                           |
| `Live`               | When the `CREATE TABLE` statement completes. You don't call a refresh. |
| `Background`         | After the background worker processes the change.                      |

In `Live` and `Background` mode, the semantic KB sees a schema change through DDL event triggers. A semantic KB created with `bypass_triggers => true` has no triggers, so in `Live` mode you call `aidb.refresh_semantic_kb()`, as in `Disabled` mode. To change the mode of a semantic KB, use `aidb.update_semantic_kb_auto_processing()`, and see [Auto-processing modes](https://www.enterprisedb.com/docs/aidb/latest/reference/semantic-knowledge-bases/#auto-processing-modes) for the modes.

The mode doesn't change what happens after a rename. In every mode, search stops using the binding of a renamed table or column until you import a document with the new name.

### Auditing imports

Read the audit log of the semantic KB to see what an import did, because each import writes one row with `op` `write` and the counts in `detail`. To see the last import:

```sql
SELECT op, func, detail
  FROM aidb.semantic_kb_audit(kb_name => 'ops_kb', func => 'semantic_kb_import_concepts',
                              limit_rows => 1);
```

```output title="Output"
  op   |            func             |                                                                                                       detail
-------+-----------------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 write | semantic_kb_import_concepts | {"concepts_added": 0, "bindings_removed": 0, "bindings_written": 0, "concepts_deleted": 0, "concepts_updated": 0, "concepts_embedded": 0, "relations_removed": 0, "relations_written": 0, "concepts_unchanged": 4}
(1 row)
```

For more about the audit log, see [Auditing](https://www.enterprisedb.com/docs/aidb/latest/semantic-knowledge-bases/auditing/).

### Embedding and the vector index

The import embeds a concept with the model of the semantic KB, in calls of at most 100 concepts. It embeds a concept again only when the text that it makes from the concept changed, or when the model of the semantic KB changed. A new label on a parent concept changes the text of its children, so the import embeds them again. If a call fails, the import writes nothing.

If you pass `vector_index` to `aidb.create_semantic_kb()`, the semantic KB also builds a vector index on its concepts. When the index is `ivfflat`, the import rebuilds it after an import that adds more concepts than the term store held, such as the first import. A semantic KB that existed before the upgrade to 7.10.0 gets a term store when you upgrade. If its schema metadata has a vector index, the upgrade builds the same kind of index on the concepts.

## Controlling access

Control who can import a glossary and what search returns from it. Every member of `aidb_users` can import a glossary into every semantic KB. The import calls the model of the semantic KB as you, so you need `USAGE` on the credential of that model. To limit who can import, revoke `EXECUTE` on `aidb.semantic_kb_import_concepts(JSONB, TEXT)` from `aidb_users`, and grant it to the roles that maintain the glossary.

The import writes bindings as `approved`, and search uses them at once. For this reason, the import isn't an agent tool. An agent can search with the glossary, but can't import one.

You need no grant on the term store. Search returns a table or column from the glossary only if you can read it. You need `USAGE` on its schema, and `SELECT` on the table for a table binding or on the column for a column binding. Search checks the current role, so the check also applies to a role that you set with `SET ROLE` and to an agent with its own role.

## Troubleshooting

Use the following tables to fix missing search results and import errors.

### Fixing missing search results

If a search doesn't return the table or column that you expect, check these points:

| Check                                                 | What to do                                                                                                                                           |
| ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| The term is in the last document.                     | The import marks a term that the last import left out as deleted. Import the complete document again.                                                |
| The binding names the object exactly.                 | The binding names the schema, the table, and the column. Fix a misspelled or renamed name, and import again.                                         |
| The object exists and the semantic KB indexes it.     | A binding to a new table waits. Call `aidb.refresh_semantic_kb()` in `Disabled` mode. See [Choosing a processing mode](#choosing-a-processing-mode). |
| You can read the object.                              | Search returns a table or column only if you have `USAGE` on its schema and `SELECT` on the table or column.                                         |
| `min_similarity` isn't too high.                      | Lower it, or leave it out.                                                                                                                           |
| `sources` includes `concept`.                         | A `sources` list without `concept` doesn't use the glossary.                                                                                         |
| `entity_types` includes `Table`, `View`, or `Column`. | The concept source returns only these three.                                                                                                         |
| The term has an embedding from the current model.     | Search skips a term that another model embedded. Import again after the semantic KB changes its model.                                               |

### Fixing import errors

Use this table to fix the errors that you can get when you import a glossary:

| Error (start of the message)                                          | Cause                                                                                                                  | Fix                                                                                                        |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `invalid vocabulary document: <field>: ...`                           | The document has a problem.                                                                                            | Fix the field that the message names. See [Writing the glossary document](#writing-the-glossary-document). |
| `role lacks USAGE on credential ...`                                  | You can't use the model of the semantic KB.                                                                            | Ask the owner of the credential to grant you `USAGE`.                                                      |
| `another concept import is already running for knowledge base '<kb>'` | Another session imports into the same semantic KB.                                                                     | Wait until that import ends, and run yours again.                                                          |
| `knowledge base '<kb>' has no term store`                             | The upgrade to 7.10.0 couldn't create the term store of this semantic KB. It logged a `WARNING` that gives the reason. | Create the semantic KB again, or follow the command in the message.                                        |

> **Note**
>
> Run the import in the default `READ COMMITTED` isolation level. In `REPEATABLE READ`, an import can fail with a duplicate-key or serialization error when another session imported into the same semantic KB.

## Limitations

Be aware of these limitations in AIDB 7.10.0:

- A model that you replace under the same name isn't detected. The import embeds concepts again only when the name of the model changes.
- There's no access check for each semantic KB. Every member of `aidb_users` can import into every semantic KB.
- A table or column that only the concept source returned doesn't update `last_referenced` in `aidb.semantic_kb_orphan_relationships`.
- WarehousePG replicates the tables of the term store, and the database doesn't enforce the foreign keys between them.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
