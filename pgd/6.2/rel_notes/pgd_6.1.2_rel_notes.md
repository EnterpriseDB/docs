---
title: EDB Postgres Distributed 6.1.2 release notes
product: EDB Postgres Distributed (PGD)
version: 6.2.0
url: https://www.enterprisedb.com/docs/pgd/6.2/rel_notes/pgd_6.1.2_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres Distributed 6.1.2 release notes

Released: 6 November 2025

EDB Postgres Distributed 6.1.2 includes only bug fixes focused on improving stability and reliability. No new features or enhancements are included in this release. Please see the details below.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fixed ALTER TABLE failure during streamed transaction with table rewrite</summary><p>The <code>ALTER TABLE</code> command failed to create a temporary table when using table rewrite support and streaming to a file or a writer. The fix implements a stream message callback method, preventing a potential data loss scenario during these operations.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
