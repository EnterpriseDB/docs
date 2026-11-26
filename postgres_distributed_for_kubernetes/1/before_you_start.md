---
title: Before You Start
product: EDB Postgres® AI for CloudNativePG™ Global Cluster
version: 1.2.2
url: https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/before_you_start/
lastModified: 2026-09-16T09:00:14-07:00
---

# Before You Start

Before you get started, it's essential that you become familiar with some terminology that's
specific to Kubernetes and PGD.

## Kubernetes terminology

- **[Node](https://kubernetes.io/docs/concepts/architecture/nodes/)**

  A _node_ is a worker machine in Kubernetes, either virtual or physical, where
  all services necessary to run pods are managed by the control plane nodes.
- **[Pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/)**

  A _pod_ is the smallest computing unit that can be deployed in a Kubernetes
  cluster and is composed of one or more containers that share network and
  storage.
- **[Service](https://kubernetes.io/docs/concepts/services-networking/service/)**

  A _service_ is an abstraction that exposes as a network service an
  application that runs on a group of pods and standardizes important features,
  such as service discovery across applications, load balancing, and failover.
- **[Secret](https://kubernetes.io/docs/concepts/configuration/secret/)**

  A _secret_ is an object that's designed to store small amounts of sensitive
  data, such as passwords, access keys, or tokens, for use within pods.
- **[Storage class](https://kubernetes.io/docs/concepts/storage/storage-classes/)**

  A _storage class_ allows an administrator to define the classes of storage in
  a cluster, including provisioner (such as AWS EBS), reclaim policies, mount
  options, volume expansion, and so on.
- **[Persistent volume](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)**

  A _persistent volume_ (PV) is a resource in a Kubernetes cluster that
  represents storage that was either manually provisioned by an
  administrator or dynamically provisioned by a _storage class_ controller. A PV
  is associated with a pod using a _persistent volume claim_, and its lifecycle is
  independent of any pod that uses it. Normally, a PV is a network volume,
  especially in the public cloud. A [_local persistent volume_
  (LPV)](https://kubernetes.io/docs/concepts/storage/volumes/#local) is a
  persistent volume that exists only on the particular node where the pod that
  uses it is running.
- **[Persistent volume claim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)**

  A _persistent volume claim_ (PVC) represents a request for storage, which
  might include size, access mode, or a particular storage class. Similar to how
  a pod consumes node resources, a PVC consumes the resources of a PV.
- **[Namespace](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)**

  A _namespace_ is a logical and isolated subset of a Kubernetes cluster and
  can be seen as a _virtual cluster_ within the wider physical cluster.
  Namespaces allow administrators to create separated environments based on
  projects, departments, teams, and so on.
- **[RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)**

  _Role-based access control (RBAC)_, also known as _role-based security_, is a
  method used in computer systems security to restrict access to the network and
  resources of a system to authorized users only. Kubernetes has a native API to
  control roles at the namespace and cluster level and associate them with
  specific resources and individuals.
- **[CRD](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)**

  A _custom resource definition_ (CRD) is an extension of the Kubernetes API
  and allows developers to create new data types and objects, _called custom
  resources_.
- **[Operator](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/)**

  An _operator_ is a Kubernetes software extension that automates those steps
  that are normally performed by a human operator when managing one or more
  applications or given services. An operator assists Kubernetes in making sure
  that the resource's defined state always matches the observed one.
- **[`kubectl`](https://kubernetes.io/docs/reference/kubectl/overview/)**

  `kubectl` is the command-line tool used to manage a Kubernetes cluster.

EDB Postgres® AI for CloudNativePG™ Global Cluster (CNPG-GC) requires a Kubernetes version supported by the community. See
[Supported releases](https://www.enterprisedb.com/resources/platform-compatibility#pgdk8s) for details.

## PGD terminology

For more information, see
[Terminology](https://www.enterprisedb.com/docs/pgd/5.9/terminology/) in the PGD documentation.

- **[Data node](https://www.enterprisedb.com/docs/pgd/5.9/terminology/#node)**

  A PGD database instance.
- **[Failover](https://www.enterprisedb.com/docs/pgd/5.9/terminology/#failover)**

  The automated process that recognizes a failure in a highly available database cluster and takes action to connect the application to another active database.
- **[Switchover](https://www.enterprisedb.com/docs/pgd/5.9/terminology/#switchover)**

  A planned change in connection between the application and the active database node in a cluster, typically done for maintenance.
- **[Write leader](https://www.enterprisedb.com/docs/pgd/5.9/terminology/#write-leader)**

  In always-on architectures, a node is selected as the correct connection endpoint for applications. This node is called the write leader. The write leader is selected by consensus of a quorum of data nodes.

## Cloud terminology

- **Region**

  A _region_ in the cloud is an isolated and independent geographic area
  organized in _availability zones_. Zones within a region have very little
  round-trip network latency.
- **Zone**

  An _availability zone_ in the cloud (also known as a _zone_) is an area in a
  region where resources can be deployed. Usually, an availability zone
  corresponds to a data center or an isolated building of the same data center.

## What to do next

Now that you are familiar with the terminology, you can
[test CNPG-GC on your laptop using a local cluster](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/1/quickstart/) before
deploying the operator in your selected cloud environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
