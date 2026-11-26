---
title: CloudNativePG™
description: EDB supports CloudNativePG™.
product: CloudNativePG
url: https://www.enterprisedb.com/docs/supported-open-source/cloud_native_pg/
lastModified: 2026-09-16T09:30:02-07:00
---

# CloudNativePG™

CloudNativePG™ is the Kubernetes operator that covers the full lifecycle of a highly available Postgres database cluster with a primary/standby architecture, using native streaming replication.

> **Note**
>
> Looking for CloudNativePG™ documentation? Head over to [cloudnative-pg.io/docs/](https://cloudnative-pg.io/docs/).

CloudNativePG™ was originally built by EDB, then released open source under Apache License 2.0 and submitted for CNCF Sandbox in April 2022. The source code repository is in [Github](https://github.com/cloudnative-pg/cloudnative-pg).

Key features available include:

- Kubernetes API integration for high availability
- Self-healing through failover and automated recreation of replicas
- Capacity management with scale up/down capabilities
- Planned switchovers for scheduled maintenance
- Read-only and read-write Kubernetes services definitions
- Rolling updates for Postgres minor versions and operator upgrades
- Continuous backup and point-in-time recovery

## Installation

For instructions on installing this operator directly using a manifest, via Helm, or via OLM, see [Installation and upgrades](https://cloudnative-pg.io/docs/current/installation_upgrade/) in the CloudNativePG™ docs.

For instructions on installing this operator on a SUSE RKE2 cluster, see [Installing CloudNativePG™ using Rancher Console](https://www.enterprisedb.com/docs/supported-open-source/cloud_native_pg/rancher/).

- [SUSE RKE2 installation](https://www.enterprisedb.com/docs/supported-open-source/cloud_native_pg/rancher/): Instructions for installing CloudNativePG™ on SUSE Rancher Kubernetes Engine using the Rancher Console UI.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
