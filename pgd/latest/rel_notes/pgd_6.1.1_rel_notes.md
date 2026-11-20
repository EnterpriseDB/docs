---
title: EDB Postgres Distributed 6.1.1 release notes
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/rel_notes/pgd_6.1.1_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres Distributed 6.1.1 release notes

Released: 09 October 2025

EDB Postgres Distributed 6.1.1 includes only bug fixes focused on improving stability and reliability. No new features or enhancements are included in this release. Please see the details below.

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fix physical join when running 'pgd node setup'</summary><p>The <code>pgd node setup</code> command in the PGD CLI has been fixed to correctly set up a physical copy as a physical replica. Previously, a bug prevented the command from properly configuring physical replication which could result in some changes being missed on the new node. For any nodes added using <code>pgd node setup</code> with earlier versions of the PGD CLI, we recommend performing a consistency check.</p>
</details></td></tr>
<tr><td><details><summary>Fix handling of DDL commands that trigger table rewrites</summary><p>Executing specific DDL operations (such as <code>ALTER TABLE ... ADD COLUMN ... DEFAULT &lt;volatile expression&gt;</code> or <code>ALTER TABLE ... ALTER COLUMN ... SET DATA TYPE</code> when not binary-compatible) could cause replication failures. With this fix in PGD 6.1.1, replication now correctly handles DDL commands that trigger table rewrites.</p>
</details></td></tr>
<tr><td><details><summary>Connection Manager respects currentSchema JDBC parameter</summary><p>Previously, a JDBC client connected through the PGD Connection Manager would have the <code>currentSchema</code> parameter ignored. As a result, a connection's <code>search_path</code> would incorrectly default to <code>public</code>. This issue has now been resolved.</p>
</details></td></tr>
<tr><td><details><summary>prefer_analytics_engine works with Iceberg REST Catalog tables</summary><p>The <code>prefer_analytics_engine</code> flag has been updated to correctly function with tables that are replicated to Iceberg REST Catalog. Setting <code>bdr.prefer_analytics_engine = true</code> will now cause a query referencing a table with <code>pgd.replicate_to_analytics = true</code> to be executed by the analytics engine when possible.</p>
</details></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
