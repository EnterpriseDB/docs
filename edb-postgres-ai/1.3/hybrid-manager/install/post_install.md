---
title: Exploring your post-installation options
description: Finalize and validate your Hybrid Manager deployment with post-installation configuration and checks.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/post_install/
lastModified: 2026-06-24T12:48:12Z
---

# Exploring your post-installation options

## Overview

> **Role:** Infrastructure Engineer / Platform Administrator

### Prerequisites

- [Phase 1: Planning your architecture](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/planning_arch/) (Completed)
- [Phase 2: Gathering your system requirements](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/sys_reqs/) (Completed)
- [Phase 3: Deploying your Kubernetes Cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/k8s_install/) (Running and validated)
- [Phase 4: Preparing your environment](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/environment_prep/) (Completed and validated)
- [Phase 5: Installing Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/install/install_hm/) (Completed & Verified)
- Administrator access to the Hybrid Manager (HM) Portal.

### Outcomes

- _A fully configured HM environment with security integrations, AI capabilities, and monitoring enabled._

**Next Phase:** [Using Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/)

Now that the HM Control Plane is running, you can enable optional but critical integrations.
While the platform is functional without these, configuring them now ensures your environment is production-ready for security, AI workloads, and observability.

## Unlock AI capabilities: Complete GenAI Builder setup

- [**Guide: Gen AI Builder**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/)

## Set up notifications (Observability)

Ensure your team is alerted to critical events (such as cluster failovers, backup failures, or capacity issues). HM allows you to configure notification channels globally or per project.

**Supported channels:**

- Email

- Webhooks (Slack, Microsoft Teams, generic JSON)

- PagerDuty

- [**Guide: Notifications**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/notifications/)

## Monitor external databases (Observability)

HM can monitor Postgres databases that it does not manage (examples: RDS, self-managed EC2, or on-prem instances).

To enable this, you must install the **EDB Postgres AI agent** on the external database host.

The agent collects metrics and logs, shipping them back to the HM control plane for centralized visualization.

- [**SOP: Monitor External Databases**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/mon_with_agent/)

## Enable Migration Co-pilot

To use the AI-assisted **Migration Co-pilot**, you must apply specific secrets and configurations to the control plane.

This feature assists in analyzing and converting schemas from legacy databases to EDB Postgres.

- [**SOP: Enable Migration Co-pilot**](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/enabling_migration_copilot/)

### Next steps

Your HM platform is now fully deployed and integrated. You are ready to onboard users and begin provisioning clusters.

**Proceed to [Using Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/) →**

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
