---
title: Advanced Storage Pack 1.3.0 release notes
product: EDB Advanced Storage Pack
url: https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/rel_notes/asp_1.3.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# Advanced Storage Pack 1.3.0 release notes

Released: 1 April 2025

Advanced Storage Pack 1.3.0 includes a number of enhancements and bug fixes.

## Highlights

- **Improved Compression for large tuples**: ASP 1.3.0 Bluefin now provides better compression rate for large tuples including variable length fields like JSON or text.

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Better compression rate in Bluefin table access method.</summary><p>In order to provide better compression rate for large records including variable length fields (JSON, text), this new release of Bluefin can now decide to compress data using regular LZ4 compression, instead of delta compression. This new compression method can also be used to compress reference tuples. The reference tuples are the first tuples stored on a Postgres page, they are by definition not eligible to delta compression and were previously stored uncompressed. The choice of the compression method is automatically made by the table access method: the one giving the better compression rate is chosen. Under certain circumstances, this new release increases the compression rate from 28% to 57%.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
