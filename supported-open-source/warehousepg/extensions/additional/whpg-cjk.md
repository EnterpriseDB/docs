---
title: whpg-cjk
description: Search Korean, Japanese, and Chinese text in WarehousePG with morphological analysis using the whpg-cjk extension.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/
lastModified: 2026-11-17T22:02:49Z
---

# whpg-cjk

Use the whpg-cjk extension to run full text search for Korean, Japanese, and Chinese in WarehousePG (WHPG). It's based on morphological analysis rather than N-gram splitting, so it matches on words instead of arbitrary character sequences.

The extension produces ordinary `tsvector` and `tsquery` values. Generalized Inverted Index (GIN) and Generalized Search Tree (GiST) indexes, the `@@` operator, `ts_rank`, and `ts_headline` work unchanged. On WarehousePG, the queries run on the segments like any other predicate.

To get started with whpg-cjk, see:

- [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/release_notes/)
- [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/installing/)
- [Using](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/using/)

* [Release notes](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/release_notes/): Release notes for the whpg-cjk extension for WarehousePG.
* [Installing and upgrading](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/installing/): Install, register, preload, and upgrade the whpg-cjk extension for WarehousePG.
* [Using](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-cjk/using/): Index and search Korean, Japanese, and Chinese text in WarehousePG with the text search configurations that the whpg-cjk extension provides.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
