---
title: EDB CloudNativePG Cluster 1.26.3 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_26_3_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB CloudNativePG Cluster 1.26.3 release notes

Released: 16 December 2025

This release of EDB CloudNativePG Cluster includes the following:

## Highlights

We've consolidated our [private container registry](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/private_edb_registries/) into a single location. This change simplifies access and deployment.
Starting with v1.26.3, any customer attempting an operator upgrade, MUST configure the new unified repository pull secret!
For details and instructions, follow the [Central Migration Guide](https://www.enterprisedb.com/docs/repos/working_with_repos/migrating_edb_registries/).

## Changes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Updated the default PgBouncer version to <code>1.25.1</code>, which carries a fix for CVE-2025-12819, for new Pooler deployments.</td><td><a href="https://github.com/cloudnative-pg/cloudnative-pg/pull/9367">#9367</a></td></tr>
<tr><td>Merged with community CloudNativePG 1.26.3 upstream release.
See the community <a href="https://cloudnative-pg.io/docs/devel/release_notes/v1.26/">release notes</a></td><td></td></tr>
<tr><td>Updated the default PostgreSQL version to <code>18.1-standard-ubi9</code>.</td><td></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
