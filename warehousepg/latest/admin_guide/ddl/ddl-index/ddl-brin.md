---
title: BRIN Indexes
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/ddl-index/ddl-brin/
lastModified: 2026-09-25T15:14:11+01:00
---

# BRIN Indexes

Use Block Range Index (BRIN) for handling very large tables in which certain columns have some natural correlation with their physical location within the table. BRIN works in terms of block ranges (or page ranges), which are groups of pages that are physically adjacent in the table. BRIN stores summary information for each block range. For example, a table storing a store's sale orders might have a date column on which each order was placed, and most of the time the entries for earlier orders will appear earlier in the table as well; a table storing a ZIP code column might have all codes for a city grouped together naturally.

BRIN indexes can satisfy queries via regular bitmap index scans, and return all tuples in all pages within each range if the summary info stored by the index is consistent with the query conditions. The query executor is in charge of rechecking these tuples and discarding those that do not match the query conditions — in other words, these indexes are lossy. Because a BRIN index is very small, scanning the index adds little overhead compared to a sequential scan, but may avoid scanning large parts of the table that are known not to contain matching tuples.

The specific data that a BRIN index stores, as well as the specific queries that the index will be able to satisfy, depend on the operator class selected for each column of the index. Data types that have a linear sort order can have operator classes that store the minimum and maximum value within each block range, for instance; geometrical types store the bounding box for all the objects in the block range.

The size of the block range is determined at index creation time by the `pages_per_range` storage parameter. The number of index entries is equal to the size of the relation in pages divided by the selected value for `pages_per_range`. Therefore, the smaller the number, the larger the index becomes (because of the need to store more index entries), but at the same time the summary data stored can be more precise and more data blocks can be skipped during an index scan. The default value for `pages_per_range` is 32 for heap tables, and 1 for append-optimized tables.

<a id="maint"></a>

## Index Maintenance

At the time of creation, WarehousePG scans all existing heap pages and creates a summary index tuple for each range, including the possibly-incomplete range at the end. As new pages are filled with data, page ranges that are already summarized will cause the summary information to be updated with data from the new tuples. When a new page is created that does not fall within the last summarized range, the range that the new page belongs into does not automatically acquire a summary tuple; those tuples remain unsummarized until a summarization run is invoked later, creating the initial summary for that range.

There are several ways to trigger the initial summarization of a page range. If the table is vacuumed, all existing unsummarized page ranges are summarized.

You may use the following functions:

`brin_summarize_new_values(regclass)` summarizes all unsummarized ranges;
`brin_summarize_range(regclass, bigint)` summarizes only the range containing the given page, if it is unsummarized.

Conversely, you may de-summarize a range using the `brin_desummarize_range(regclass, bigint)` function, which is useful when the index tuple is no longer a very good representation because the existing values have changed.

The following table lists the functions available for index maintenance tasks. You cannot execute these functions cannot during recovery. Use of these functions is restricted to superusers and the owner of the given index.

| Name                                                         | Return Type | Description                                                                  |
| ------------------------------------------------------------ | ----------- | ---------------------------------------------------------------------------- |
| brin\_summarize\_new\_values(index regclass)                 | integer     | summarize page ranges not already summarized                                 |
| brin\_summarize\_range(index regclass, blockNumber bigint)   | integer     | summarize the page range covering the given block, if not already summarized |
| brin\_desummarize\_range(index regclass, blockNumber bigint) | integer     | de-summarize the page range covering the given block, if summarized          |

`brin_summarize_new_values` accepts the OID or name of a BRIN index and inspects the index to find page ranges in the base table that are not currently summarized by the index; for any such range it creates a new summary index tuple by scanning the table pages. It returns the number of new page range summaries that were inserted into the index. `brin_summarize_range` does the same, except it only summarizes the range that covers the given block number.

> **Note** `brin_summarize_range` and `brin_desummarize_range` only operate on ranges that exist. If you provide a block number that does not exist in the table, the functions return 0. Additionally, a specific range may only exist on some segments, due to data skew. In this case, the functions return the number of segments for which they were able to summarize or desummarize the range.

<a id="opclasses"></a>

## Built-in Operator Classes

WarehousePG includes the BRIN operator classes shown in the table below.

The `minmax` operator classes store the minimum and the maximum values appearing in the indexed column within the range. The `inclusion` operator classes store a value which includes the values in the indexed column within the range.

| Name                     | Indexed Data Type           | Indexable Operators                           |   |   |   |   |
| ------------------------ | --------------------------- | --------------------------------------------- | - | - | - | - |
| int8\_minmax\_ops        | bigint                      | `< <= = >= >`                                 |   |   |   |   |
| bit\_minmax\_ops         | bit                         | `< <= = >= >`                                 |   |   |   |   |
| varbit\_minmax\_ops      | bit varying                 | `< <= = >= >`                                 |   |   |   |   |
| box\_inclusion\_ops      | box                         | `<< &< && <> >> ~= @> <@ &<\| <<\| \|>> \|&>` |   |   |   |   |
| bytea\_minmax\_ops       | bytea                       | `< <= = >= >`                                 |   |   |   |   |
| bpchar\_minmax\_ops      | character                   | `< <= = >= >`                                 |   |   |   |   |
| char\_minmax\_ops        | "char"                      | `< <= = >= >`                                 |   |   |   |   |
| date\_minmax\_ops        | date                        | `< <= = >= >`                                 |   |   |   |   |
| float8\_minmax\_ops      | double precision            | `< <= = >= >`                                 |   |   |   |   |
| inet\_minmax\_ops        | inet                        | `< <= = >= >`                                 |   |   |   |   |
| network\_inclusion\_ops  | inet                        | `&& >>= <<= = >> <<`                          |   |   |   |   |
| int4\_minmax\_ops        | integer                     | `< <= = >= >`                                 |   |   |   |   |
| interval\_minmax\_ops    | interval                    | `< <= = >= >`                                 |   |   |   |   |
| macaddr\_minmax\_ops     | macaddr                     | `< <= = >= >`                                 |   |   |   |   |
| macaddr8\_minmax\_op     | macaddr8                    | `< <= = >= >`                                 |   |   |   |   |
| name\_minmax\_ops        | name                        | `< <= = >= >`                                 |   |   |   |   |
| numeric\_minmax\_ops     | numeric                     | `< <= = >= >`                                 |   |   |   |   |
| pg\_lsn\_minmax\_ops     | pg\_lsn                     | `< <= = >= >`                                 |   |   |   |   |
| oid\_minmax\_ops         | oid                         | `< <= = >= >`                                 |   |   |   |   |
| range\_inclusion\_ops    | any range type              | `<< &< && <> >> @> <@ -\|- = < <= = > >=`     |   |   |   |   |
| float4\_minmax\_ops      | real                        | `< <= = >= >`                                 |   |   |   |   |
| int2\_minmax\_ops        | smallint                    | `< <= = >= >`                                 |   |   |   |   |
| text\_minmax\_ops        | text                        | `< <= = >= >`                                 |   |   |   |   |
| tid\_minmax\_ops         | tid                         | `< <= = >= >`                                 |   |   |   |   |
| timestamp\_minmax\_ops   | timestamp without time zone | `< <= = >= >`                                 |   |   |   |   |
| timestamptz\_minmax\_ops | timestamp with time zone    | `< <= = >= >`                                 |   |   |   |   |
| time\_minmax\_ops        | time without time zone      | `< <= = >= >`                                 |   |   |   |   |
| timetz\_minmax\_ops      | time with time zone         | `< <= = >= >`                                 |   |   |   |   |
| uuid\_minmax\_ops        | uuid                        | `< <= = >= >`                                 |   |   |   |   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
