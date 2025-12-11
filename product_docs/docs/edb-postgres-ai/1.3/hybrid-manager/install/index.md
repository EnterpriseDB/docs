---
title: Installing Hybrid Manager
navTitle: Installing
description: Learn how to plan and install Hybrid Manager in various Kubernetes-based environments.
deepToC: true
navigation:
  - rhos
  - rancher
  - eks
  - gcp
  - customization
---

Hybrid Manager (HM) provides orchestration, observability, and lifecycle operations for Postgres, analytics, and AI workloads across cloud and on-premises deployments.

This section provides installation guidance for users deploying HM on their own infrastructure, across supported Kubernetes platforms.
If you're using a turnkey hardware system like [Sovereign Data and AI Factory](../system), Hybrid Manager is preinstalled and requires no setup.

---

## Before you install

HM requires a Kubernetes environment and access to platform-specific APIs for managing storage, networking, and node pools.

You can install HM on:

- RedHat OpenShift clusters
- Rancher RKE2 clusters
- Cloud-managed Kubernetes (EKS, GKE)

Before attempting to install on a specific platform, make sure to:

- Review system resource and storage requirements
- Define access and RBAC requirements for your organization

---

## Installation guides by platform

Choose your target platform to follow the appropriate installation procedure.

### RedHat OpenShift (RHOS)

HM is certified for deployment on OpenShift clusters - both on-premises or in Red Hat OpenShift on AWS (ROSA).

- [Install HM on RHOS](rhos)

### Rancher RKE2

HM is supported do deploy on Rancher RKE clusters on premises.

- [Install HM on Rancher RKE2](rancher)

### Amazon Web Services (EKS)

Install HM on Amazon Elastic Kubernetes Service (EKS).

- [Install HM on EKS](eks)

### Google Cloud Platform (GKE)

Install HM on a GKE-managed Kubernetes cluster.

- [Install HM on GKE](gcp)

---

## Considering a preinstalled hardware solution?

If you're looking for a fully managed deployment of HM and its supporting infrastructure, consider the [Sovereign Data and AI Factory](../system) — a turnkey hardware solution delivered by EDB.

This system includes:

- Preinstalled, end-to-end support of Hybrid Manager and Redhat Openshift
- Full lifecycle management of hardware and software
- Built-in support for Postgres, vector workloads, and GPU-powered inference

Learn more at the [Engineered Systems overview](../system).
---
