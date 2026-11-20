---
title: Setting up access controls
description: How to configure authentication, SSL/TLS, and Connection Manager endpoints to secure access to a PGD cluster.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/
lastModified: 2026-08-21T09:22:11+02:00
---

# Setting up access controls

Encrypt and authenticate connections at every point in a PGD cluster to protect replication traffic, control application access, and prevent unauthorized nodes from joining. Access control operates at three levels:

- **[Inter-node connections](https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/inter-node-connections/)** are the connections PGD nodes make to each other for replication and Raft consensus. Securing these connections ensures that replication traffic is encrypted and that only authorized nodes can join the cluster.

- **[Client to Connection Manager](https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/client-connections/)** covers how applications authenticate and connect to the cluster. Securing these connections controls how applications authenticate, which ports they connect to, and whether the HTTP management endpoint uses TLS.

- **[Connection Manager to nodes](https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/client-connections/#securing-connection-manager-to-node-connections)** covers how Connection Manager connects to backend nodes on behalf of clients. Each node must be configured to accept these connections.

* [Securing inter-node connections](https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/inter-node-connections/): How to configure SSL/TLS encryption and authentication for replication connections between PGD nodes.
* [Configuring client connections](https://www.enterprisedb.com/docs/pgd/6.4/ensuring-security/access-controls/client-connections/): How to configure SSL, authentication, and endpoints for client application access to a PGD cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
