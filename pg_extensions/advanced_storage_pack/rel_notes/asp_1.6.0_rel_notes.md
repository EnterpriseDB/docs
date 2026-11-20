---
title: Advanced Storage Pack 1.6.0 release notes
product: EDB Advanced Storage Pack
url: https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/rel_notes/asp_1.6.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# Advanced Storage Pack 1.6.0 release notes

Released: 15 April 2026

Advanced Storage Pack 1.6.0 introduces a critical stability fix.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Bluefin - Fixed tuple decompression bug introduced in 1.5.0</summary><p>Fixed a bug in tuple decompression that was introduced in version 1.5.0.</p>
</details></td></tr>
<tr><td><details><summary>Bluefin - Fixed a potential segmentation fault error in logical decoding of multi-insert.</summary><p>Resolved a potential segmentation fault that could occur when performing logical decoding of multi-insert operations in Bluefin.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
