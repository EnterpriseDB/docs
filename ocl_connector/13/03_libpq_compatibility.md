---
title: libpq Cross-version Compatibility
product: OCL Connector
version: "13"
url: https://www.enterprisedb.com/docs/ocl_connector/13/03_libpq_compatibility/
lastModified: 2023-05-19T09:02:02-04:00
---

# libpq Cross-version Compatibility

<div id="libpq_compatibility" class="registered_link"></div>

EDB OCL installation always uses the latest libpq. The different scenarios supported under libpq cross-version compatibility are as following:

- If the latest libpq is installed on the machine, OCL uses it.
- If the latest libpq is not already installed, OCL installs it. It does not use the existing libpq of older versions even if it is installed.
- If you upgrade the OCL version, then libpq is also upgraded to its latest version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
