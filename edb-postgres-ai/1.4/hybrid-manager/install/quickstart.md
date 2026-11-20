---
title: Hybrid Manager installer console quickstart
description: The fastest supported path to a running Hybrid Manager, using the installer console.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/quickstart/
lastModified: 2026-08-20T14:30:19-04:00
---

# Hybrid Manager installer console quickstart

## Overview

This quickstart is the shortest _supported_ path to a working Hybrid Manager (HM) console, using the [installer console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_hm_web_installer/). It is deliberately opinionated: it assumes an internet-connected cluster, a public load-balancer endpoint, and a single dedicated Kubernetes cluster, and it takes the most direct cloud-native option at each step.

For the full six-phase treatment — architecture planning, detailed requirements, and production hardening — use the [step-by-step installation guide](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/). Each quickstart step links to the guide page that explains it in depth.

### Who this is for

Engineers who want a running HM on a single dedicated cluster quickly — for a proof of concept, an evaluation, or a repeatable lab environment — and who are comfortable running `gcloud`/`kubectl`/`helm`/`edbctl` from a workstation.

### What you build

A dedicated Kubernetes cluster running the HM control plane on labeled nodes, backed by object storage, fronted by a single cloud load balancer, with DNS pointed at it and the HM console reachable over HTTPS.

### Requirements checklist

Confirm each requirement before you begin:

- [ ] **Admin account** — A cloud project or account with rights to create the Kubernetes cluster, service accounts and keys, and object-storage buckets.
- [ ] **Internet facing** — Outbound access to your cloud and the EDB endpoints, and a public load-balancer endpoint for the HM console (authenticated and TLS-encrypted by default).
- [ ] **EDB token** — An EDB subscription token from your [EDB account profile](https://www.enterprisedb.com/accounts/profile).
- [ ] **DNS zone** — A DNS zone you control for the HM hostnames is managed in your cloud provider, so the quickstart assumes you can use CSP CLI to manage DNS.

For the full requirements and rationale, see [Gathering your system requirements](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/sys_reqs/).

> **Note**
>
> Endpoints this quickstart exposes to the internet are authenticated and TLS-encrypted by default. Restricting HM to a private endpoint is a supported later step, not a prerequisite.

## Platform quickstarts

- **[Hybrid Manager on GKE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/quickstart/gke/)** — Google Kubernetes Engine, using the installer console.

Additional platforms (including AWS EKS) will follow.

- [GKE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/quickstart/gke/): Deploy Hybrid Manager on Google Kubernetes Engine (GKE) using the installer console, from an empty project to a reachable HM console.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
