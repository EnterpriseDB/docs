---
title: Open Client Library
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/07_open_client_library/
lastModified: 2023-02-14T16:10:29+05:30
---

# Open Client Library

<div id="open_client_library" class="registered_link"></div>

The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly “locked in” can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code. The EDB implementation of the Open Client Library is written in C.

The following diagram compares the Open Client Library and Oracle Call Interface application stacks.

![Open Client Library](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/epas/14/epas_compat_ora_dev_guide/images/open_client_library.png)

For detailed usage information about the Open Client Library and the supported functions, see [EDB OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/latest/).

> **Note**
>
> EDB doesn't support the use of the Open Client Library with Oracle Real Application Clusters (RAC) and Oracle Exadata. These Oracle products haven't been evaluated or certified with this EDB product.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
