---
title: EDB CloudNativePG Cluster 1.22.11 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_22_11_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB CloudNativePG Cluster 1.22.11 release notes

Released: 25 July 2025

EDB Postgres for Kubernetes version 1.22.11 is an LTS release of EDB Postgres for Kubernetes;
there is no corresponding upstream release of CloudNativePG.

_In memory of [DJ Walker-Morgan](https://www.linkedin.com/in/codepope/)._

> **Warning**
>
> This is expected to be the last release in the 1.22.x series.
> Users are strongly encouraged to upgrade to a newer minor version, as 1.22
> is no longer supported.

This release of EDB CloudNativePG Cluster includes the following:

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Improved validation of <code>shared_buffers</code> by correctly considering <code>HugePages</code> settings</summary><p>...ensuring accurate memory configuration checks.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7864">#7864</a></td></tr>
<tr><td><details><summary>Set <code>oom_score_adj</code> for PostgreSQL worker processes</summary><p>...to improve prioritization during out-of-memory situations.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7891">#7891</a></td></tr>
<tr><td><details><summary>Added the <code>systemID</code> field and related condition in the <code>Cluster</code> status</summary><p>...to track the PostgreSQL system identifier.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7717">#7717</a></td></tr>
</tbody></table>

## Changes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Removed <code>386</code> and ARM (v5/v6/v7) architectures from the <code>cnp</code> plugin build matrix</summary><p>...reducing the number of published binaries.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7648">#7648</a></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Added a mutex in the connection pooler to protect concurrent access to the connections map</summary><p>...improving stability in high-concurrency environments.</p>
</details></td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/7804">#7804</a></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
