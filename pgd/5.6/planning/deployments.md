---
title: Choosing your deployment method
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/planning/deployments/
lastModified: 2025-05-30T15:32:37+01:00
---

# Choosing your deployment method

You can deploy and install EDB Postgres Distributed products using the following methods:

- [Trusted Postgres Architect](https://www.enterprisedb.com/docs/tpa/latest/) (TPA) is an orchestration tool that uses Ansible to build Postgres clusters using a set of reference architectures that document how to set up and operate Postgres in various scenarios. TPA represents the best practices followed by EDB, and its recommendations apply to quick testbed setups just as they do to production environments. TPA's flexibility allows deployments to virtual machines, AWS cloud instances, or Linux host hardware. See [Deploying with TPA](https://www.enterprisedb.com/docs/pgd/5.6/deploy-config/deploy-tpa/deploying/) for more information.

- EDB Postgres AI Cloud Service is a fully managed database-as-a-service with built-in Oracle compatibility that runs in your cloud account or Cloud Service's cloud account where it's operated by EDB's Postgres experts. EDB Postgres AI Cloud Service makes it easy to set up, manage, and scale your databases. The addition of distributed high-availability support powered by EDB Postgres Distributed (PGD) enables single- and multi-region Always-on clusters. See [Distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/distributed_highavailability/) in the [Cloud Service documentation](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/) for more information.

- [EDB Postgres Distributed for Kubernetes](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/) is a Kubernetes operator designed, developed, and supported by EDB. It covers the full lifecycle of highly available Postgres database clusters with a multi-master architecture, using PGD replication. It's based on the open source CloudNativePG operator and provides additional value, such as compatibility with Oracle using EDB Postgres Advanced Server, Transparent Data Encryption (TDE) using EDB Postgres Extended or Advanced Server, and additional supported platforms including IBM Power and OpenShift.

|                                            |         <center>TPA</center>         | <center>EDB Postgres AI<br/>Cloud Service</center> |      <center>Kubernetes</center>     |
| ------------------------------------------ | :----------------------------------: | :------------------------------------------------: | :----------------------------------: |
| Single region                              | <span style="color: green;">✓</span> |        <span style="color: green;">✓</span>        | <span style="color: green;">✓</span> |
| Active-Active support                      |              2+ regions              |                      2 regions                     |               2 regions              |
| Write/Read routing                         |            Local or global           |                        Local                       |                 Local                |
| Automated failover                         |             AZ or Region             |                         AZ                         |                  AZ                  |
| Major version upgrades                     | <span style="color: green;">✓</span> |                          -                         |                   -                  |
| Subscriber-only nodes<br/> (read replicas) | <span style="color: green;">✓</span> |                          -                         |                   -                  |
| Logical standby nodes                      | <span style="color: green;">✓</span> |                          -                         |                   -                  |
| PgBouncer                                  | <span style="color: green;">✓</span> |                          -                         |                   -                  |
| Selective data replication                 | <span style="color: green;">✓</span> |        <span style="color: green;">✓</span>        | <span style="color: green;">✓</span> |
| Maintenance windows per region             | <span style="color: green;">✓</span> |        <span style="color: green;">✓</span>        | <span style="color: green;">✓</span> |
| Target availability                        |              99.999% SLO             |     99.99 SLA (single)<br/>99.995% SLA (multi)     |              99.999% SLO             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
