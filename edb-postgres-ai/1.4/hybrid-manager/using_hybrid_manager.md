---
title: Using Hybrid Manager
description: Covers how to use Hybrid Manager, with topics organized by user responsibilities—general users and Kubernetes administrators.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/
lastModified: 2026-11-04T13:59:00+05:30
---

# Using Hybrid Manager

This section helps you understand how to operate EDB Postgres AI Hybrid Manager (HM) across different use cases, from routine cluster management to high availability and disaster recovery.

The topics are structured by audience—starting with general platform users (application teams, database engineers, platform owners), and continuing to Kubernetes administrators responsible for cluster security, observability, and integrations.

---

## Where to start

Begin with the foundational sections:

- [Terminology](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_terminology/) introduces key HM concepts.
- [Hybrid Manager overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/) provides essential context for Postgres, Lakehouse, and AI workloads.

From there, explore topics based on your role and responsibilities.

---

## For users

These sections cover day-to-day tasks in Hybrid Manager:

- [Projects](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/projects/) — create, manage, and configure project-level settings including alerting and usage reporting.
- [Cluster Management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/) — create, monitor, and manage Postgres clusters, including backups, query diagnostics, and templates.
- [Backup and Restore](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/backup_restore/) — manage backup schedules, restore points, and disaster recovery configurations.
- [`edbctl`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/edbctl/) — use the CLI to automate deployment, configuration, and data operations.
- [API Access](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/) — automate platform functions with the HM API.
- [Postgres database upgrades](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/) - upgrade your HM-managed Postgres databases to the next minor or major version.
- [Migration](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/) — run schema and data migrations from Oracle, RDS, or other Postgres installations.
- [Image Management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/image-management/) — manage container images, repositories, and AI knowledge base assets.
- [Enable Migration Copilot](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/enabling_migration_copilot/) — unlock guided migration workflows with Copilot.
- [Chat Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/chat_agent/) — operate Hybrid Manager in plain language: browse your estate, provision clusters, troubleshoot performance, and consult the docs.
- [Governance (legacy integration)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/governance/) — how EDB Agent Governance reads Postgres query logs from HM's Loki pipeline to reconstruct agent sessions.

---

## For Kubernetes administrators

For those administering the infrastructure beneath Hybrid Manager:

- [Managing Users](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/managing_users/) — configure native users.
- [IdP management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/) — configure identity providers and rotate IdP connector encryption keys.
- [Monitoring](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/) — set up agents, explore built-in dashboards, and extend observability with Prometheus and Grafana.
- [Managing components](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/manage_components/) — enable, disable, and reconfigure individual HM platform components.
- [Multi-DC](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/multi_dc/) - set up multiple data centers, a primary and secondary locations.
- [Enabling KMS for TDE](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/install/configuration/kms_for_tde/) — connect an external key management system to secure Postgres clusters with transparent data encryption.
- [Hybrid Manager upgrades](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading_hm/) - upgrade the HM platform to the next minor/major/innovation release version.
- [HA/DR](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/) — configure high availability and disaster recovery for production clusters.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/troubleshooting/) — investigate and resolve issues across all platform areas.

---

- [Concepts](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_terminology/): Provides the list of key terminologies and their descriptions used throughout Hybrid Manager.
- [Hybrid Manager console](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hm_overview/): Learn about using the console for provisioning and managing Hybrid Manager clusters.

## For Users

- [Projects](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/projects/): Learn how to use projects to associate organizationally related resources with Hybrid Manager.
- [Cluster management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/cluster_management/): Learn about cluster management tasks, including creating, viewing, and managing Hybrid Manager.
- [Upgrading database clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading/): Learn about major and minor Postgres version upgrades for database clusters in Hybrid Manager.
- [Migrating databases](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/): Learn how to migrate databases with Hybrid Manager.
- [Asset management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/image-management/): Learn about asset management for managing assets, container images, repositories, and models for Hybrid Manager clusters.
- [Backup and restore](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/backup_restore/): Learn about backups and restores for Hybrid Manager.
- [Chat Agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/chat_agent/): Use Chat Agent to operate Hybrid Manager in plain language — browse your estate, provision Postgres clusters, troubleshoot performance, and consult the docs without leaving the HM console.
- [Governance](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/governance/): How EDB Agent Governance integrates with Hybrid Manager to audit AI agents operating on your HM-managed Postgres clusters.
- [Hybrid Manager CLI](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/edbctl/): Use the edbctl command line tool to manage resources and perform database cluster operations for Hybrid Manager.
- [Interacting programmatically with HM](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/interacting_programmatically/): Learn how to use the API and MCP tools to perform management tasks with Hybrid Manager.
- [IdP management](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/idp_management/): Configure and maintain identity providers for Hybrid Manager authentication.

## For Kubernetes Administrators

- [Managing users](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/managing_users/): Learn how to manage users for Hybrid Manager.
- [Monitoring](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/): Learn about monitoring and metrics collection for Postgres databases, Kubernetes, Grafana, and Loki with Hybrid Manager.
- [Upgrading Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/upgrading_hm/): Learn how to upgrade your Hybrid Manager installation across supported versions.
- [Disaster recovery (DR)](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/): Learn about planning and best practices for backup and disaster recovery (DR) with Hybrid Manager.
- [Enabling Migration Portal AI Copilot](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/enabling_migration_copilot/): Learn how to enable and configure the Migration Portal AI Copilot for Hybrid Manager.
- [Managing HM components](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/manage_components/): Suspend, resume, retry, or permanently disable individual Hybrid Manager components to resolve installation conflicts, reduce resource usage, or recover from error states.
- [Troubleshooting](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/troubleshooting/): Learn how to troubleshoot issues with Hybrid Manager.
- [Collecting diagnostics](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/collect_diagnostics/): Learn which tools to use to collect diagnostic data from Hybrid Manager and its Postgres clusters when you open an EDB Support case.
- [Query recommendations](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/query-diagnostics-recommendations/): Learn how Hybrid Manager displays query recommendations and how to use them to improve query performance.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
