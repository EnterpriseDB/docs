---
title: Deleting a custom probe
description: Learn how to delete a custom probe in PEM
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/deleting_probe/
lastModified: 2026-02-19T17:29:17+05:30
---

# Deleting a custom probe

You can delete only custom probes. To delete a probe:

1. Go to the **Manage Probes** tab.
2. Select the probe name in the probes table, and select trash icon to the left of the probe name.

When you delete a probe, PEM deletes the probe definition and all the historical data collected by that probe. The probe history persists for the length of time specified in the **History Retention** field in the probe definition. During the deletion, the probe definition is deleted and any corresponding tables are  dropped from the `pemdata` and `pemhistory` schemas.

System probes are the built-in probes provided by PEM and are part of the PEM schema. You can only modify system probes. If you attempt to delete a system probe, PEM reports an error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
