---
title: Grafana's Explore option
description: Learn about monitoring with the Explore option in Grafana for Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/monitoring/monitoring_grafana/grafana_explore/
lastModified: 2026-07-23T17:52:58+02:00
---

# Grafana's Explore option

Grafana offers an **Explore** option that allows you to query logs gathered by Loki.

To query the logs from a specific cluster:

1. Obtain your [cluster's ID and namespace](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/cluster_management/manage-clusters/trace-clusters/#using-hm-to-collate-the-cluster-to-its-namespace). Select `cnp_instance_id`.

2. In the **Label filters** menu, select **cnp\_instance\_id**.

3. In the **Select value** menu, select the pod's ID.

4. Craft your query to look for certain key words in that instance's logs, for example, "error" or "exception."

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
