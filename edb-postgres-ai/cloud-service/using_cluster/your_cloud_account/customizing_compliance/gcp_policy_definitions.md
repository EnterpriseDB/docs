---
title: Customizing Google Cloud compliance policies
description: Customize Google Cloud compliance configuration settings to match Cloud Service's resource configurations
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/your_cloud_account/customizing_compliance/gcp_policy_definitions/
lastModified: 2024-10-18T05:05:04Z
---

# Customizing Google Cloud compliance policies

Google Cloud uses Assured Workloads and the Organization Policy Service to ensure compliance rules are respected. Assured Workloads monitoring scans your environment in real time and provides alerts whenever organization policy changes violate the defined compliance posture. The monitoring dashboard shows which policy is being violated and provides instructions for resolving the finding.

For more information, see:

- [Overview of Assured Workloads](https://cloud.google.com/assured-workloads/docs/overview)
- [Introduction to the Organization Policy Service](https://cloud.google.com/resource-manager/docs/organization-policy/overview)

Cloud Service doesn’t customize your Google Cloud compliance rules to prevent conflicts with external workloads.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
