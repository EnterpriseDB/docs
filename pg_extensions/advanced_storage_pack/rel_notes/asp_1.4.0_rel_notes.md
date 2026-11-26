---
title: Advanced Storage Pack 1.4.0 release notes
product: EDB Advanced Storage Pack
url: https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/rel_notes/asp_1.4.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# Advanced Storage Pack 1.4.0 release notes

Released: 26 November 2025

Advanced Storage Pack 1.4.0 includes a number of enhancements and bug fixes.

## Highlights

- **Improved platform support**: ASP 1.4.0 is now supported on databases version 18, as well as on SLES 15SP7.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fixed crash recovery bug for Bluefin for versions 17 and later.</summary><p>Fixed FPI emission during tuple insertion that caused the recovery to fail with <code>&quot;PANIC:  failed to add bluefintuple&quot;</code>.</p>
</details></td></tr>
<tr><td><details><summary>Optimized LZ4 compression logic for Bluefin.</summary><p>Bluefin now performs a size check after LZ4 compression. If the compressed tuple size is greater than or equal to the original size, the system defaults to using the uncompressed tuple. This prevents page allocation failures caused by oversized &quot;compressed&quot; records.</p>
</details></td></tr>
<tr><td><details><summary>Fixed compressed tuple format value on Big-endian.</summary><p>Improved Bluefin stability and compatibility on big-endian architectures (s390x) by correcting the compressed tuple data format.</p>
</details></td></tr>
<tr><td><details><summary>Enhanced verification checks for table types for Bluefin, Refdata, and Autocluster.</summary><p>The fix ensures that the <code>verify</code> function checks the relation type and the AM type.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
