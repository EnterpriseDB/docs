---
title: Advanced Storage Pack 1.5.0 release notes
product: EDB Advanced Storage Pack
url: https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/rel_notes/asp_1.5.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# Advanced Storage Pack 1.5.0 release notes

Released: 23 March 2026

Advanced Storage Pack 1.5.0 introduces several performance enhancements and critical stability fixes.

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Added <code>bluefin.estimate_compression[_blocks]()</code> functions for Bluefin.</summary><p>Introduced new utility functions to estimate the potential compression ratio before migrating a target Heap table to Bluefin format.</p>
</details></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Resolved memory leak during index scans for Bluefin.</summary><p>Fixed a memory leak occurring during index scans that could lead to excessive memory consumption or out of memory (OOM) errors when processing large tables.</p>
</details></td></tr>
<tr><td><details><summary>Fixed server crashes and leaks during TID scans for Bluefin.</summary><p>Resolved an issue where TID scans triggered assertion failures leading to server crashes and associated memory leaks.</p>
</details></td></tr>
<tr><td><details><summary>Fixed logical decoding for LZ4-compressed long tuples for Bluefin.</summary><p>Corrected logical decoding behavior for long tuples compressed with LZ4, covering both single-insert and multi-insert <code>COPY</code> operations.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
