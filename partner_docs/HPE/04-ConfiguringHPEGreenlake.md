---
title: Configuring
description: Walkthrough of configuring the integration
product: Partner Docs
url: https://www.enterprisedb.com/docs/partner_docs/HPE/04-ConfiguringHPEGreenlake/
lastModified: 2023-08-03T09:34:17-04:00
---

# Configuring

> **Note**
>
> We refer to EDB Postgres Advanced Server, EDB Postgres Extended Server, and PostgreSQL Server as the Postgres distribution. The specific distribution type depends on your needs and preferences.

Implementing EDB software on HPE requires the following components:

- Postgres distribution
- HPE system components configured per your requirements

The figure shows a sample deployment.

![HPE sample deployment](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/advocacy_docs/partner_docs/HPE/Images/SampleDeployment.png)

## Prerequisites

Set up HPE servers per your requirements.

## Log in to server and deploy Postgres distribution

1. Log in to your server using your chosen method. For example, on a Windows system accessing a RHEL server, use a utility like PuTTy to SSH into your server.

2. Log in as the root user using credentials you established with HPE during your server setup.

3. Install your preferred Postgres distribution. For EDB Postgres Advanced Server, see the [EDB Postgres Advanced Server documentation](https://www.enterprisedb.com/docs/epas/latest/). For EDB Postgres Extended Server, see the [EDB Postgres Extended Server documentation](https://www.enterprisedb.com/docs/pge/latest/).

4. Install the other EDB tools, such as [Failover Manager (EFM)](https://www.enterprisedb.com/docs/efm/latest/), [Postgres Enterprise Manager (PEM)](https://www.enterprisedb.com/docs/pem/latest/), or [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/), in the appropriate servers as needed for your configuration. See the [EDB documentation](https://www.enterprisedb.com/docs/) for any other software needs.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
