---
title: Using Open Client Library
description: Introduces the EDB OCL Connector, used to compile Oracle Call Interface applications to interact with an EDB Postgres Advanced Server database
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/working_with_oracle_data/07_open_client_library/
lastModified: 2025-11-25T20:57:39+05:30
---

# Using Open Client Library

<div id="open_client_library" class="registered_link"></div>

The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly “locked in” can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code. The EDB implementation of the Open Client Library is written in C.

The following diagram compares the Open Client Library and Oracle Call Interface application stacks.

![Open Client Library](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/epas/17/images/open_client_library.png)

For detailed usage information about the Open Client Library and the supported functions, see [EDB OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/15/).

> **Note**
>
> EDB doesn't support the use of the Open Client Library with Oracle Real Application Clusters (RAC) and Oracle Exadata. These Oracle products haven't been evaluated or certified with this EDB product.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
