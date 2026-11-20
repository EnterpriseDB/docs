---
title: Using Full Text Search
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/
lastModified: 2026-09-25T15:14:11+01:00
---

# Using Full Text Search

WarehousePG provides data types, functions, operators, index types, and configurations for querying natural language documents.

- **[About Full Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/intro/)**\
  This topic provides an overview of WarehousePG full text search, basic text search expressions, configuring, and customizing text search. WarehousePG full text search is compared with WarehousePG Text.
- **[Searching Text in Database Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/tables-indexes/)**\
  This topic shows how to use text search operators to search database tables and how to create indexes to speed up text searches.
- **[Controlling Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/controlling/)**\
  This topic shows how to create search and query vectors, how to rank search results, and how to highlight search terms in the results of text search queries.
- **[Additional Text Search Features](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/features/)**\
  WarehousePG has additional functions and operators you can use to manipulate search and query vectors, and to rewrite search queries.
- **[Text Search Parsers](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/parsers/)**\
  This topic describes the types of tokens the WarehousePG text search parser produces from raw text.
- **[Text Search Dictionaries](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/dictionaries/)**\
  Tokens produced by the WarehousePG full text search parser are passed through a chain of dictionaries to produce a normalized term or "lexeme". Different kinds of dictionaries are available to filter and transform tokens in different ways and for different languages.
- **[Text Search Configuration Example](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/configuration/)**\
  This topic shows how to create a customized text search configuration to process document and query text.
- **[Testing and Debugging Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/testing/)**\
  This topic introduces the WarehousePG functions you can use to test and debug a search configuration or the individual parser and dictionaries specified in a configuration.
- **[GiST and GIN Indexes for Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/gist-gin/)**\
  This topic describes and compares the WarehousePG index types that are used for full text searching.
- **[psql Support](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/psql-support/)**\
  The psql command-line utility provides a meta-command to display information about WarehousePG full text search configurations.
- **[Limitations](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/limitations/)**\
  This topic lists limitations and maximums for WarehousePG full text search objects.

**Parent topic:** [Querying Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/)

- [About Full Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/intro/): This topic provides an overview of WarehousePG full text search, basic text search expressions, configuring, and customizing text search. WarehousePG full text search is compared with WarehousePG Text.
- [Searching Text in Database Tables](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/tables-indexes/): This topic shows how to use text search operators to search database tables and how to create indexes to speed up text searches.
- [Controlling Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/controlling/): This topic shows how to create search and query vectors, how to rank search results, and how to highlight search terms in the results of text search queries.
- [Additional Text Search Features](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/features/): WarehousePG has additional functions and operators you can use to manipulate search and query vectors, and to rewrite search queries.
- [Text Search Parsers](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/parsers/): This topic describes the types of tokens the WarehousePG text search parser produces from raw text.
- [Text Search Dictionaries](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/dictionaries/): Tokens produced by the WarehousePG full text search parser are passed through a chain of dictionaries to produce a normalized term or "lexeme". Different kinds of dictionaries are available to filter and transform tokens in different ways and for different languages.
- [Text Search Configuration Example](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/configuration/): This topic shows how to create a customized text search configuration to process document and query text.
- [Testing and Debugging Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/testing/): This topic introduces the WarehousePG functions you can use to test and debug a search configuration or the individual parser and dictionaries specified in a configuration.
- [Preferred Index Types for Text Search](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/gist-gin/): There are two kinds of indexes that can be used to speed up full text searches: GIN and GiST. Indexes are not mandatory for full text searching, but in cases where a column is searched on a regular basis, an index is usually desirable.
- [psql Support](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/psql-support/): The psql command-line utility provides a meta-command to display information about WarehousePG full text search configurations.
- [Limitations](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/query/textsearch/limitations/): This topic lists limitations and maximums for WarehousePG full text search objects.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
