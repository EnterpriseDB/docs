---
title: Next steps with PGD
description: |
  Learning more about PGD.
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/quickstart/next_steps/
lastModified: 2026-11-20T11:33:47Z
---

# Next steps with PGD

## Going further with your PGD cluster

### Architecture

This quick start created a single region cluster of high-availability Postgres databases. This is the Always-on Single Location architecture, one of a range of available PGD architectures. Other architectures include Always-on Multi-Location, with clusters in multiple data centers working together, and variations of both with witness nodes enhancing resilience. See [architectural options](https://www.enterprisedb.com/docs/pgd/5.10/planning/architectures/).

### Postgres versions

This quick start deployed EDB Postgres Advanced Server to the database nodes. PGD can deploy three different kinds of Postgres distributions, EDB Postgres Advanced Server, EDB Postgres Extended Server, and open-source PostgreSQL. The selection of database affects PGD, offering [different capabilities](https://www.enterprisedb.com/docs/pgd/5.10/planning/choosing_server/), depending on server.

- Open-source PostgreSQL doesn't support CAMO.
- EDB Postgres Extended Server supports CAMO but doesn't offer Oracle compatibility.
- EDB Postgres Advanced Server supports CAMO and offers optional Oracle compatibility.

### Further reading

- Learn PGD's [terminology](https://www.enterprisedb.com/docs/pgd/5.10/terminology/), from asynchronous replication to write scalability.
- Find out how [applications work](https://www.enterprisedb.com/docs/pgd/5.10/appusage/) with PGD and how common Postgres features like [sequences](https://www.enterprisedb.com/docs/pgd/5.10/sequences/) are globally distributed.
- Discover how PGD supports [rolling upgrades](https://www.enterprisedb.com/docs/pgd/5.10/upgrades/) of your clusters.
- Take control of [routing](https://www.enterprisedb.com/docs/pgd/5.10/routing/) and use SQL to control the PGD proxies.
- Engage with the [PGD CLI](https://www.enterprisedb.com/docs/pgd/5.10/cli/) to manage and monitor your cluster.

## Deprovisioning the cluster

When you're done testing the cluster, deprovision it.

```shell
tpaexec deprovision democluster
```

- With a Docker deployment, deprovisioning tears down the Docker containers, network, and other local configuration.
- With an AWS deployment, deprovisioning removes the EC2 instances, VPC configuration, and other associated resources. Note that it leaves the S3 bucket it created. You must manually remove it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
