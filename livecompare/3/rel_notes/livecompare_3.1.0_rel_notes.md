---
title: LiveCompare 3.1.0 release notes
product: LiveCompare
version: "3"
url: https://www.enterprisedb.com/docs/livecompare/3/rel_notes/livecompare_3.1.0_rel_notes/
lastModified: 2026-11-10T16:36:54+01:00
---

# LiveCompare 3.1.0 release notes

Released: 25 November 2025

> **Note: Note on upgrading**
>
> Before you upgrade to LiveCompare 3.1, ensure that all previous LiveCompare sessions have been completed. You won't be able to resume any LiveCompare sessions that you started using an earlier version of LiveCompare.

LiveCompare 3.1.0 includes the following new features, enhancements, bug fixes, and other changes:

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>LiveCompare has been tested and certified for use with PostgreSQL, EDB Postgres Extended (PGE), and EDB Postgres Advanced Server (EPAS) version 18.</td><td></td></tr>
<tr><td>LiveCompare now supports deployment and operation in FIPS-enabled environments.</td><td>52158</td></tr>
<tr><td>LiveCompare now supports debugging of the <code>LiveSettings</code> class.</td><td>53513</td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Fixed an issue where a database version check resulted in a <code>'&lt;' not supported between instances of 'str' and 'int' TypeError</code> condition.</td><td></td></tr>
<tr><td>Fixed an issue where LiveCompare would incorrectly return <code>success (rc = 0)</code> even when errors were encountered.</td><td>53513</td></tr>
<tr><td>Fixed an issue where a <code>comparison_algorithm = full_row KeyError</code> occurred, which was caused by a reserved word interfering with the divergent row formation process.</td><td>53513</td></tr>
<tr><td>Fixed an issue where LiveCompare would fail to run if it could not find the version for the last run in an existing Output database.</td><td></td></tr>
</tbody></table>

## Deprecations

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td>The <code>ignore_nullable</code> setting is being deprecated and will be removed in a future version.</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
