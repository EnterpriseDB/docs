---
title: Integrating AWS resources into your Estate
description: How to ingest and monitor AWS resources with EDB Postgres AI.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/
lastModified: 2025-06-30T15:44:48-05:00
---

# Integrating AWS resources into your Estate

Setting up the EDB Postgres® AI Console to monitor your RDS instances and S3 buckets on AWS involves adding a specific policy and role in AWS. Once the policy and role are in place, you need to enter the role ARN of the newly created role into the **Cloud Hosted Databases** console, accessible via the **Estate** page in the EDB Postgres AI Console.

Using this role ARN and a custom policy, the EDB Postgres AI server can access to the RDS and S3 information in your AWS account.

After providing the role ARN in the Cloud Hosted Databases console, you can see the selected AWS resources (RDS instances and/or S3 buckets) in the chosen AWS regions on your **Estate** page in the **Cloud Hosted Databases** section.

Follow the steps below to integrate your AWS resources into your Estate, starting with creating a custom policy:

- [Create a custom policy](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/01_create_policy/): Create a custom policy in AWS to allow a role to query the metadata of your AWS RDS and S3 services.
- [Create a role](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/02_create_role/): Create a role in AWS to that uses that custom policy and inform EDB Postgres AI of the role.
- [Set regions and services](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/estate/integrating/integrate_aws/03_set_regions/): Set the regions and services you want to monitor in your AWS account.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
