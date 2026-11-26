---
title: Connecting your cloud
description: How to connect Your Cloud Account to the Cloud Service.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/
lastModified: 2025-04-24T09:25:26+05:30
---

# Connecting your cloud

Use these techniques to connect to your cloud account.

## Cloud Service access requirements

Cloud Service needs access to your cloud to perform maintenance. Cloud Service CLI commands used for connecting your cloud to the Cloud Service set some of these permissions for you. For details on these and other permissions or policies required by Cloud Service, refer to the corresponding topic for your cloud provider.

Cloud Service also requires permissions to run Kubernetes cluster services for PostgreSQL workloads and the associated storage services. It requires a set of supporting permissions:

- Services for monitoring and logging to produce service telemetry information

- To set up networking so PostgreSQL workloads are reachable by customer applications and telemetry data is collected

- To provision vaults for safe storage of data at rest encryption keys

- To create workload identities and manage their permissions

- A small set of supporting permissions to ensure access to the services above and availability of cloud account information

The scope of these permissions is limited to the associated cloud account.

## Prerequisites

In your cloud provider shell, make sure that your environment is running:

- Bash shell version 4.0 or above.

- Cloud Service CLI version 2.0 or later. For details, see [Installing the CLI](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/cli/#installing-the-cli).

For additional cloud provider-specific requirements, see [Setting up specific cloud providers](#setting-up-specific-cloud-providers).

## Overview of connecting your cloud

> **Tip**
>
> If you're using Cloud Shell, add the `./` prefix to the `biganimal` command (`./biganimal`).

1. Open your cloud provider shell in your browser.

2. Create a Cloud Service CLI credential:

   ```shell
   biganimal credential create --name <cred> 
   ```

3. To set up your cloud provider, run the `cloud-provider setup` command :

   ```shell
   biganimal cloud-provider setup 
   ```

   > **Important**
   >
   > Don't delete the `ba-passport.json` file created in your working directory. It contains important identity and access management information used by `cloud-provider connect` while connecting to your cloud.

4. If the cloud readiness checks pass, your cloud account is successfully set up. Connect your cloud account to Cloud Service:

   ```shell
   biganimal cloud-provider connect --provider  <cloud-service-provider> --project <project-name>
   ```

   Once your cloud account is successfully connected to Cloud Service, you and other users with the correct permissions can create clusters.

## Setting up specific cloud providers

For step-by-step instructions for setting up specific cloud providers, see:

- [Connecting your AWS cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_aws/)

- [Connecting your Azure cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_azure/)

- [Connecting your Google Cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_gcp/)

* [AWS](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_aws/): Prerequisites
* [Azure](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_azure/): The Cloud Service CLI commands used for connecting your cloud to Cloud Service register an application with Azure AD and create a service principal to delegate identity and access management functions to Azure Active Directory (AD). For more information, see for Azure EDB cloud utilities in GitHub.
* [Google Cloud](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/your_cloud_account/connecting_to_your_cloud/connecting_gcp/): Cloud Service is deployed in a VPC in your cloud service provider (CSP). To make changes or modify your Cloud Service clusters, use the EDB Postgres AI Console, API, or CLI to manage and execute the activity. You can also open a Support case if you need help. Making changes in the resources in those dedicated VPCs can affect EDB's ability to deliver service.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
