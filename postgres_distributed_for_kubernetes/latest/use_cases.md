---
title: Use cases
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 2.2.0
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/use_cases/
lastModified: 2026-03-27T16:08:35Z
---

# Use cases

EDB Postgres® AI for CloudNativePG™ Global Cluster was designed to work with applications
that reside in the same Kubernetes cluster for a full cloud native
experience.

However, it might happen that, while the database can be hosted
inside a Kubernetes cluster, applications can't be containerized
at the same time and need to run in a traditional environment such
as a VM.

The following is a summary of the basic considerations. See the
[PG4K documentation](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/use_cases/)
for more detail.

## Case 1: Applications inside Kubernetes

In a typical situation, the application and the database run in the same
namespace inside a Kubernetes cluster.

![Application and Database inside Kubernetes](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/postgres_distributed_for_kubernetes/2/images/apps-in-k8s.png)

The application, normally stateless, is managed as a standard deployment,
with multiple replicas spread over different Kubernetes nodes and internally
exposed through a ClusterIP service.

The service is exposed externally to the end user through an Ingress and the
provider's load balancer facility by way of HTTPS.

## Case 2: Applications outside Kubernetes

Another possible use case is to manage your PGD database inside
Kubernetes while having your applications outside of it, for example, in a
virtualized environment. In this case, PGD is represented by an IP
address or host name and a TCP port, corresponding to the defined Ingress
resource in Kubernetes.

The application can still benefit from a TLS connection to PGD.

![Application outside Kubernetes](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/postgres_distributed_for_kubernetes/2/images/apps-outside-k8s.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
