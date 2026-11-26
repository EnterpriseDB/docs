---
title: EDB Postgres® AI for CloudNativePG™ Global Cluster 1.2.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 1.2.2
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/rel_notes/1_2_0_rel_notes/
lastModified: 2026-09-30T12:30:26-07:00
---

# EDB Postgres® AI for CloudNativePG™ Global Cluster 1.2.0 release notes

Released: 5 January 2026

## Highlights

- _New PG4K operator LTS Support:_ PG4K operator v1.28.0 is now supported

## Supported versions

- Kubernetes: 1.34, 1.33, and 1.32

- PostgreSQL: 17, 16, 15, 14

  PostgreSQL 17.7 is the default image

- PGD Extension: v5.9

- PG4K: v1.28.0, v1.25.5

## Default images

- PGD: `docker.enterprisedb.com/k8s/postgresql-pgd:17.7-pgd591-ubi9`
- PGD proxy: `docker.enterprisedb.com/k8s/edb-pgd-proxy:5.9.1-ubi9`

This release of EDB Postgres® AI for CloudNativePG™ Global Cluster includes the following:

## Features

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Physical remote join discovery</summary><p>When performing a physical join, discovery can use the group service and will
use the DSN from the remote database catalog to perform pg_basebackup and the
physical join.</p></details></td><td>#1659</td></tr>
<tr><td><details><summary>PGD group cleanup</summary><p>The pgdgroupcleanup reconciler now uses phases to represent progress.</p></details></td><td>#1617, #1643</td></tr>
</tbody></table>

## Security Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Updated operator base image to ubi-micro v9.7.</td><td>#1514</td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td>Prevent operator reconcile when pgd nodes are parted.</td><td>#1615</td></tr>
<tr><td>Explicitly set the image name when a pgdgroup uses the default image.</td><td>#1592</td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
