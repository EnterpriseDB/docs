---
title: EDB Postgres® AI for CloudNativePG™ Global Cluster 1.0.1 release notes
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 1.2.2
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/rel_notes/1_0_1_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres® AI for CloudNativePG™ Global Cluster 1.0.1 release notes

Released: 14 October 2024

This release of EDB Postgres® AI for CloudNativePG™ Global Cluster includes the following:

## Features

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Operator base image upgraded to UBI9.</td><td>#787</td></tr>
<tr><td>Support LDAP authentication configuration in PGDGroup.</td><td>#793</td></tr>
<tr><td>Support tablespace configuration in PGDGroup.</td><td>#801</td></tr>
<tr><td>Support projectedVolumeTemplate configuration in PGDGroup.</td><td>#791</td></tr>
<tr><td>Support read node routing on pgd with creation of a proxy service.</td><td>#686</td></tr>
<tr><td>Support backup and restore PGDGroup using VolumeSnapshot.</td><td>#549</td></tr>
<tr><td>Support multiple schedulers in PGDGroup for different backup methods.</td><td>#731</td></tr>
<tr><td>Support new mutation type which is only executed against write lead node.</td><td></td></tr>
<tr><td>Avoid unnecessary write leader transfer when PGDGroup configuration is changed.</td><td>#772</td></tr>
<tr><td>Handle nodeSelector and toleration changes for paused PGDGroup.</td><td>#581</td></tr>
<tr><td>Reuse nodeSelector and tolerations in discovery job.</td><td>#774</td></tr>
<tr><td>Support application database configuration to be applied before join.</td><td>#838</td></tr>
<tr><td>Support topologySpreadConstraints configuration.</td><td>#839</td></tr>
<tr><td><details><summary>Kubernetes</summary><p>v1.28 - v1.31</p></details></td><td></td></tr>
<tr><td><details><summary>Openshift</summary><p>v4.12 - v4.14</p></details></td><td></td></tr>
<tr><td><details><summary>EDB Postgres Distributed</summary><p>v5.5.1</p></details></td><td></td></tr>
<tr><td><details><summary>PG4K</summary><p>v1.22.2 - v1.22.6</p></details></td><td></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
