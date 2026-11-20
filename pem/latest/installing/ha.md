---
title: Installing Postgres Enterprise Manager in HA Patterns
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing/ha/
lastModified: 2026-03-20T13:08:03+05:30
---

# Installing Postgres Enterprise Manager in HA Patterns

Before deploying High Availability PEM, please familiarize yourself with the high-level guidance in  [High Availability Patterns for PEM Deployment](https://www.enterprisedb.com/docs/pem/latest/considerations/ha_pem/).

For PEM 10.4 and later, the recommended process for deploying HA PEM is as follows:

- Deploy an HA Postgres cluster with a supported cluster manager.
- Prepare the cluster for PEM installation by adding the required SSL files and HBA rules.
- Install and configure PEM on the primary, then on the standbys.
- If using separate web servers, deploy PEM on the web servers.

In versions of PEM prior to 10.4, the process was more complex due to limitations in the `configure-pem-server.sh` script.
It is therefore highly recommended that new deployments of HA PEM are performed with the latest version.
However, the changes to `configure-pem-server.sh` are backward-compatible so previous processes will still run without adjustment.

The following pages provide detailed instructions for some example HA PEM architectures following the steps above.
They are not intended to be an exhaustive guide to all possible patterns.

- [Deploying HA PEM with colocated web application and backend using EDB Failover Manager and Virtual IPs](https://www.enterprisedb.com/docs/pem/latest/installing/ha/setup_ha_using_efm/)
- [Deploying HA PEM with separate web application and backend using EDB Failover Manager and Virtual IPs](https://www.enterprisedb.com/docs/pem/latest/installing/ha/efm_s1/)
- [Deploying HA PEM with separate web application and backend using Patroni and multi-host strings](https://www.enterprisedb.com/docs/pem/latest/installing/ha/patroni_sm/)

In addition, the following guides to specific elements of HA PEM deployment are provided:

- [Storing user settings in the backend, accessible to all web application instances](https://www.enterprisedb.com/docs/pem/latest/installing/ha/user_settings/)

* [C1 architecture with EFM](https://www.enterprisedb.com/docs/pem/latest/installing/ha/setup_ha_using_efm/): This page provides detailed instructions to install and configure a High Availability (HA) PEM deployment according to reference architecture C1.
* [S1 architecture with EFM](https://www.enterprisedb.com/docs/pem/latest/installing/ha/efm_s1/): This page provides detailed instructions to install and configure a High Availability (HA) PEM deployment according to reference architecture S1.
* [HA user settings](https://www.enterprisedb.com/docs/pem/latest/installing/ha/user_settings/): When deploying more than one instance of the PEM web application, configure PEM to store user settings in the backend database to ensure they are synchronized across all instances.
* [SM architecture with Patroni](https://www.enterprisedb.com/docs/pem/latest/installing/ha/patroni_sm/): This page provides detailed instructions to install and configure a High Availability (HA) PEM deployment according to reference architecture SM.
* [SSL Files](https://www.enterprisedb.com/docs/pem/latest/installing/ha/ssl/): This page covers how to generate SSL files for an HA PEM backend.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
