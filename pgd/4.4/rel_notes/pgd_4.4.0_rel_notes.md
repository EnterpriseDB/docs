---
title: EDB Postgres Distributed 4.4.0 release notes
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/rel_notes/pgd_4.4.0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres Distributed 4.4.0 release notes

Released: 19 August 2025

This is a minor release of PGD 4 for customers on an Extended Life Support contract. This release is a prerequisite for upgrading to PGD 6.1.0+. This release also includes a number of bug fixes.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Component</th><th>Version</th><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>BDR</td><td>4.4.0</td><td><details><summary>Fix for False Positives in Update-Origin-Change Conflicts</summary><p>A bug has been fixed that caused false positives in update-origin-change conflict detection. The fix ensures the correct LSN is used and conflicts are now detected accurately and only when they genuinely occur.</p>
</details></td><td></td></tr>
<tr><td>BDR</td><td>4.4.0</td><td><details><summary>Fix for Replication Breakage on Concurrent Updates</summary><p>A fix has been implemented to resolve an issue where concurrent updates on non-unique indexes could cause replication to break with a &quot;concurrent INSERT when looking for delete rows&quot; error. This bug was caused by an incorrect comparison of tuples during the lookup process. The fix ensures that the correct tuples are compared, which prevents this error and maintains replication stability.</p>
</details></td><td>48861</td></tr>
<tr><td>BDR</td><td>4.4.0</td><td><details><summary>Fix for <code>bdr_init_physical</code> Hangs with Synchronous Commit</summary><p>A bug has been fixed that could cause <code>bdr_init_physical</code> to hang when the upstream node had a synchronous commit scope. This issue, which prevented a new node from completing physical initialization, was caused by a specific interaction with synchronous commit settings. The fix ensures that <code>bdr_init_physical</code> now works reliably in all configurations, even before the new node joins the group and is considered for synchronous commits.</p>
</details></td><td>50599</td></tr>
<tr><td>BDR</td><td>4.4.0</td><td><details><summary>Fix for <code>duplicate key value violates unique constraint &quot;node_pkey&quot;</code></summary><p>Fixes a bug so a Raft snapshot is correctly created before sending append entries as needed.</p>
</details></td><td>44467,51941</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
