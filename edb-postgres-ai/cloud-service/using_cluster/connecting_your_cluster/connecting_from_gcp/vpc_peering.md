---
title: VPC peering
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/connecting_from_gcp/vpc_peering/
lastModified: 2024-10-18T05:05:04Z
---

# VPC peering

VPC peering allows traffic to be freely routed between two VPCs. Once peered, the two VPCs act as one with respect to connectivity. However, network security group rules are still observed. VPC peering is simple and easy to set up, but the limitation is that IP ranges of two peered VPCs can't overlap.

For an example of VPC peering see [Connect to EDB Postgres AI's private cluster using GCP VPC peering](https://support.biganimal.com/hc/en-us/articles/20410613824153-GCP-Connect-to-BigAnimal-private-cluster-using-GCP-VPC-Peering) for step-by-step instructions in the knowledgebase.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
