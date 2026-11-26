---
title: Getting started with Your Cloud Account
description: Describes high-level steps to get started with Your Cloud Account.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/getting_started_with_your_cloud_account/
lastModified: 2025-06-16T21:34:03Z
---

# Getting started with Your Cloud Account

Use the following high-level steps to connect an EDB Postgres AI Project to your own cloud account to allow the Cloud Service to deploy and manage databases on your own cloud.

1. Ensure you have the correct access permissions for your cloud account.

   - **Azure** — Global Administrator or Privileged Role Administrator, and you must be a Subscription Owner.

   - **AWS** — IAMFullAccess policy and ServiceQuotasFullAccess policy.

   - **Google Cloud** — roles/owner or at least the following combined roles:

     - roles/iam.serviceAccountCreator

     - roles/iam.serviceAccountKeyAdmin

     - roles/iam.roleAdmin

     - roles/resourcemanager.projectIamAdmin

     - roles/compute.viewer

2. Set up your own identity provider. For more information see [Setting up your identity provider](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/identity_provider/).

3. Set up a CLI. See [Using the Cloud Service CLI](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/cli/). Although we recommend using a CLI, it isn't required.

4. Check that your cloud provider has the resources to work with EDB Postgres AI. You must do this every time you create a new cluster. The required steps vary by cloud provider. See:

   - [Preparing your Azure account](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/preparing_cloud_account/preparing_azure/).

   - [Preparing your AWS account](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/preparing_cloud_account/preparing_aws/).

   - [Preparing your Google Cloud account](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/preparing_cloud_account/preparing_gcp/).

5. Connect to your cloud. See [Connecting to your cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/).

6. Activate and manage regions. See [Managing regions](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/managing_regions/).

7. Create a cluster. When prompted for **Where to deploy**, select **Your Cloud Account**. See [Creating a cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/creating_cluster/creating_a_cluster/).

8. Use your cluster. See [Using your cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/).

9. Optionally, set up private networking to allow you to connect to your cluster from other applications. The steps depend on your cloud service provider. See:

   - [Connecting from Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_azure/)

   - [Connecting from AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/02_connecting_from_aws/)

   - [Connecting from Google Cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_gcp/)

10. Provide access to other users. See [Managing user access](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/using/organizations/users/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
