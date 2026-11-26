---
title: EDB Postgres Distributed 6.3.1 release notes
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/rel_notes/pgd_6.3.1_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres Distributed 6.3.1 release notes

Released: 14 April 2026

EDB Postgres Distributed 6.3.1 includes only bug fixes focused on improving stability and reliability. No new features or enhancements are included in this release. For a list of known issues, see [Known issues and limitations](https://www.enterprisedb.com/docs/pgd/6.4/overview/known_issues/).

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Fixed a segfault in the consensus worker during rolling upgrade to 6.3.0 when <code>bdr.enable_auto_sync_reconcile</code> is on.</summary><p>When <code>bdr.enable_auto_sync_reconcile = on</code>, an older-version node sending a <code>reconcile_2pc_requests</code> Raft upsert to a 6.3.0 node could cause a crash loop on restart. This setting is on by default in 6.x versions and off by default in 5.x versions.</p>
</details></td><td>59715</td></tr>
<tr><td><details><summary>Fixed <code>bdr_init_physical</code> failure when PGAA extension is present.</summary><p>When scaling up a PGD cluster from a single data group to multiple data groups on deployments using the Postgres Analytics Accelerator (PGAA) extension, <code>bdr_init_physical</code> failed with <code>no analytics lease found for database</code> during the <code>bdr.remove_unwanted_data()</code> step. This issue only affected clusters initially provisioned with a single data group that were later scaled out.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed user login attributes not replicated to peer nodes.</summary><p>After a <code>CREATE USER</code> statement, the user's login attribute was not propagated to peer nodes, preventing login on any node other than the originating one. This fix ensures role login attributes are correctly included in replication.</p>
</details></td><td></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
