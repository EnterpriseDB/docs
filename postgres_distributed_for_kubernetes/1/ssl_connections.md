---
title: Client TLS/SSL connections
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 1.2.2
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/ssl_connections/
lastModified: 2026-06-22T07:38:49-07:00
---

# Client TLS/SSL connections

> **Tip: Certificates**
>
> See [Certificates](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/certificates/)
> for more details on how EDB Postgres® AI for CloudNativePG™ Global Cluster (CNPG-GC) supports TLS certificates.

The CNPG-GC operator was designed to work with TLS/SSL for both encryption in transit and
authentication on the server and client sides. PGD nodes are created as cluster
resources using the EDB Postgres for Kubernetes operator. This
includes deploying a certificate
authority (CA) to create and sign TLS client certificates.

See the [EDB Postgres for Kubernetes documentation](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/ssl_connections/)
for more information on issuers and certificates.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
