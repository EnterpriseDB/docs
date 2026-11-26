---
title: EDB Postgres Distributed 4.3.8 release notes
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/rel_notes/pgd_4.3.8_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres Distributed 4.3.8 release notes

Released: 22 May 2025

EDB Postgres Distributed 4.3.8 is a minor release that includes several bug fixes and enhancements.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Component</th><th>Version</th><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>BDR</td><td>4.3.8</td><td><details><summary>Addressed CVE-2025-2506, which could enable a user with CONNECT access to obtain read access to replicated tables.</summary><p>An issue, <a href="https://www.enterprisedb.com/docs/security/advisories/cve20252506/">CVE-2025-2506</a>, was discovered in pglogical which is present in later versions of BDR and PGD. The issue could enable a user with CONNECT access to obtain read access to replicated tables.</p>
</details></td><td>CVE-2025-2506</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
