---
title: Installing Hybrid Manager
description: Install Hybrid Manager on your prepared cluster using the operator manifest, the guided installer console, or Red Hat OpenShift.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/
lastModified: 2026-08-20T14:30:19-04:00
---

# Installing Hybrid Manager

## Overview

With your environment prepared ([Phase 4](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/environment_prep/)), install Hybrid Manager on the cluster. Choose the method that fits how you operate — all three produce the same running Hybrid Manager:

- **[Install on Kubernetes (operator)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_hm/)** — apply the `HybridControlPlane` custom resource with the EDB Postgres AI Operator. Best for automated, repeatable, or GitOps-managed deployments.
- **[Install with the installer console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_hm_web_installer/)** — a gated, browser-based flow that validates your cluster, assembles the `HybridControlPlane` resource from your answers, and applies it once you confirm. Best for a first installation or an evaluation.
- **[Install on Red Hat OpenShift](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_rhos/)** — install through the OpenShift OperatorHub catalog.

## Next phase

When the HM console is reachable, continue to [Exploring your post-installation options](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/post_install/).

- [Installing Hybrid Manager on Kubernetes](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_hm/): Deploy Hybrid Manager using the operator method.
- [Installing via the installer console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_hm_web_installer/): Install Hybrid Manager using the guided, browser-based installer console instead of hand-editing the HybridControlPlane manifest.
- [Installing Hybrid Manager on Red Hat OpenShift](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/install_guide/installing/install_rhos/): Install Hybrid Manager on a Red Hat OpenShift cluster using the OperatorHub catalog.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
