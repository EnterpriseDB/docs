---
title: EDB Postgres Distributed 5.9.3 release notes
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/rel_notes/pgd_5.9.3_rel_notes/
lastModified: 2026-11-20T11:33:47Z
---

# EDB Postgres Distributed 5.9.3 release notes

Released: 15 April 2026

This is a patch release of PGD 5, which includes several enhancements and bug fixes. For a list of known issues, see [Known issues](https://www.enterprisedb.com/docs/pgd/5.9/known_issues/).

## Changes

<table class="table w-100"><thead><tr><th>Component</th><th>Version</th><th>Description</th></tr></thead><tbody>
<tr><td>PGD Proxy</td><td>5.9.3</td><td><details><summary>Updated third-party dependencies to address security vulnerabilities.</summary><p>Updated internal library dependencies to address security vulnerabilities CVE-2026-33815 and CVE-2026-33816.</p>
</details></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Component</th><th>Version</th><th>Description</th></tr></thead><tbody>
<tr><td>BDR</td><td>5.9.3</td><td><details><summary>Fixed user login attributes not replicated to peer nodes.</summary><p>After a <code>CREATE USER</code> statement, the user's login attribute was not propagated to peer nodes, preventing login on any node other than the originating one. This fix ensures role login attributes are correctly included in replication.</p>
</details></td></tr>
<tr><td>Connection Manager</td><td>undefined</td><td><details><summary>Fixed Connection Manager using outdated routing configuration when routing was enabled or disabled on a node group.</summary></details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
