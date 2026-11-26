---
title: Expanded How-to
description: How to use PGD Expanded's advanced features and capabilities.
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/expanded-how-to/
lastModified: 2025-12-05T11:11:13Z
---

# Expanded How-to

## Overview

PGD Expanded offers the full PGD capability set to users; where PGD Essential is a best practice, controlled and simplified version of PGD. The expanded version is for users who want to take advantage of the full set of features and capabilities of PGD, including advanced architectures, custom configurations, and more complex use cases.

PGD Expanded is designed for users who need the highest level of flexibility and control over their database environments. It provides a comprehensive set of tools and features that allow users to customize their deployments and optimize their performance.

## Expanded Features

The following features are enabled in PGD Expanded:

- **Multi-master replication**: PGD Expanded supports multi-master replication, allowing users to create a highly available and fault-tolerant database environment. This feature enables users to write to any node in the cluster, providing maximum flexibility and scalability.

- **Conflict resolution**: PGD Expanded's support for multi-master replication includes advanced conflict resolution capabilities, allowing users to handle conflicts that may arise during replication. This feature ensures that data consistency is maintained across all nodes in the cluster.

- **Advanced durability**: PGD Expanded opens up the full set of durability options in PGD with customizable commit scopes offering flexibility beyond PGD Essentials pre-defined commit scopes. This feature allows users to optimize their database performance and durability based on their specific needs.

- **Custom configurations**: PGD Expanded allows users to customize their database configurations to meet their specific needs. Where PGD Essential supports two basic architectures with limited numbers of nodes and groups, there are no restrictions on the number of nodes, node types, or replication configurations that can be used in a PGD Expanded deployment.

* [Architectures](https://www.enterprisedb.com/docs/pgd/6.1/expanded-how-to/architectures/): With PGD 6 Expanded, you can deploy a cluster in a wide range of architectures. Unlike PGD 6 Essential, which is limited to two architectures made with a limited number of groups, PGD 6 Expanded supports multiple architectures with technically unlimited groups, including:
* [Installing and configuring](https://www.enterprisedb.com/docs/pgd/6.1/expanded-how-to/install/): This section covers how to manually deploy and configure EDB Postgres Distributed 6.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
