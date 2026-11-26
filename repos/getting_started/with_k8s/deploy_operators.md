---
title: Deploying EDB operators on Kubernetes
description: Network prerequisites and a directory of specific guides for deploying EDB operators.
product: EDB repositories and downloading
url: https://www.enterprisedb.com/docs/repos/getting_started/with_k8s/deploy_operators/
lastModified: 2026-07-16T06:55:08-07:00
---

# Deploying EDB operators on Kubernetes

## Prerequisites

### Network access

EDB's container registries are delivered through the AWS CloudFront content delivery network (CDN). To pull images and packages reliably, systems in your environment must be able to make outbound HTTPS (port 443) connections to CloudFront. If your network restricts outbound traffic, allow the CloudFront IP ranges in your firewall.

AWS updates these IP ranges dynamically. To fetch the current list:

```shell
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq -r '.prefixes[] | select(.service == "CLOUDFRONT") | .ip_prefix' | sort -n
```

Because the ranges change over time, review them periodically and update your firewall rules accordingly — for example, by running this command on a schedule, or by subscribing to [AWS IP address range notifications](https://docs.aws.amazon.com/vpc/latest/userguide/subscribe-notifications.html) so you're alerted when the ranges change.

## EDB Postgres AI Hybrid Manager

See: [Install Hybrid Manager](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/install/install_guide/install_hm/)

## EDB Postgres® AI for CloudNativePG™ Cluster

See the [Installation and upgrades](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/installation_upgrade/) or [Red Hat OpenShift](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/openshift/) topics as appropriate.

## EDB Postgres® AI for CloudNativePG™ Global Cluster

See the [Installation and upgrade](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/installation_upgrade/) or [Red Hat OpenShift](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/openshift/) topics as appropriate.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
