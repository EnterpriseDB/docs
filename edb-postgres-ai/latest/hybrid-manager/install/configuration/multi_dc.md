---
title: Deploying Hybrid Manager across multiple data centers
description: Learn how to set up multiple data centers (multi-DC) with Hybrid Manager to support the deployment of database clusters across multiple geographical locations.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/
lastModified: 2026-09-10T07:38:14-07:00
---

# Deploying Hybrid Manager across multiple data centers

You can configure your HM installation across multiple data centers (multi-DC topology) to meet your high availability requirements. This topology includes a primary HM and one or more data-only HMs (secondaries) across multiple Kubernetes clusters.

- [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/overview/) — Reviews multi-DC concepts, explores the available multi-DC topologies, and provides an architecture review of a multi-DC HM installation.

- [Configuring a multi-DC deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/multi-dc/) — Provides a step-by-step guide of how to configure your HM installation across multiple data centers, and then provision a Postgres cluster across locations. All locations share one object storage bucket and are on the same provider.

- [Multi-DC with pairing tokens](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/pairing-token-federation/) — Links locations using federation pairing tokens instead of a shared bucket, so each location keeps its own object storage and locations can be in different clouds.

- [TDE across data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/tde/) — Explains how Transparent Data Encryption behaves for replica clusters and distributed high-availability clusters in a multi-DC deployment, and what to plan for when you use a customer-managed key per location.

* [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/overview/): Multi-DC deployments in Hybrid Manager allow you to deploy database clusters across multiple geographical locations.
* [Configuring a multi-DC deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/multi-dc/): Learn how to set up multiple data centers (multi-DC) with Hybrid Manager to support the deployment of database clusters across multiple geographical locations.
* [Multi-DC with pairing tokens](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/pairing-token-federation/): Link Hybrid Manager installations across data centers, and across cloud providers, using federation pairing tokens instead of a shared object storage bucket.
* [TDE across data centers](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/configuration/multi_dc/tde/): What to plan for when you enable Transparent Data Encryption (TDE) on Hybrid Manager clusters that span multiple locations or regions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
