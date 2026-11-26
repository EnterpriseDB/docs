---
title: Cloud Service January 2024 release notes
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/release_notes/2024/2024_01_jan_rel_notes/
lastModified: 2026-06-25T17:54:04+05:30
---

# Cloud Service January 2024 release notes

Cloud Service's January 2024 release includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Cloud Service has added new integrations with third-party monitoring services. You can now set up monitoring integrations with DataDog and New Relic on your Cloud Service Projects.                                                                                                    |
| Enhancement | Cloud Service now supports adding a storage volume to your cluster for the Write-Ahead Log (WAL). Dedicated WAL storage volumes significantly improve write performance for WAL files, boosting the IO of the overall cluster.                                                          |
| Enhancement | Cloud Service Terraform provider v0.7.0 is now available. Learn more about what’s new [here](https://github.com/EnterpriseDB/terraform-provider-biganimal/releases/tag/v0.7.0) and download the provider [here](https://registry.terraform.io/providers/EnterpriseDB/biganimal/latest). |
| Enhancement | Cloud Service CLI v3.5.0 is now available. Learn more about what’s new [here](https://cli.biganimal.com/versions/v3.5.0/).                                                                                                                                                              |
| Enhancement | Cloud Service now supports pausing and resuming clusters on demand. You can now pause clusters when you aren’t using them without losing your data or configurations, giving you more control over your cluster operations as well as helping you save on compute costs.                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
