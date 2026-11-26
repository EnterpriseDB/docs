---
title: Copying probe configurations
description: Learn how to copy probe configurations in PEM
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/copying_probe/
lastModified: 2026-02-19T17:29:14+05:30
---

# Copying probe configurations

You can use the **Copy Probe Configuration** dialog box to copy probe definitions from one monitored object to one or more monitored objects of the same type. To open the **Copy Probe Configuration** dialog box:

1. In the PEM client tree, select the object from which you are copying probes.
2. Select **Management > Probes**.
3. Select **Copy Probe Configurations**.

The **Copy Probe Configurations** dialog box opens that copies the probe definitions from the object from which you opened the **Copy Probe Configuration** dialog box to the locations selected on the tree control.

If you specify a parent node in the **Copy Probe Configuration** tree, PEM copies the probe configurations to each object of the same type that resides under that node in the tree. For example, to copy the probe definitions from one schema to all schemas that reside in a database, select only the parent database of the target schemas. A red warning symbol is displayed to the left of the name of a listed target object if that object is the source of the probe that's being copied.

After you select the target object or objects, select **Configure Probes** to copy the probe definitions to the location selected in the dialog box.

> **Note**
>
> Copy Probe isn't supported for the extension-level probes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
