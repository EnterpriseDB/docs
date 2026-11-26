---
title: Known issues
description: Learn about known issues and configuration gotchas for PXF on WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/overview/known_issues/
lastModified: 2026-08-12T09:50:14Z
---

# Known issues

This release includes the following known issues and limitations. Where applicable, workarounds are included to help mitigate the impact. These issues are actively tracked and are planned for resolution in a future release.

- If `fs.s3a.endpoint` in a server's site XML file doesn't include the URI scheme (`http://` or `https://`), PXF fails with a connection error such as `Unsupported or unrecognized SSL message`, and the PXF logs don't show additional detail. Always include the scheme in the endpoint value. See [S3-compatible object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/s3/).

- Third-party JDBC driver JARs placed in the global `$PXF_BASE/lib` directory can cause classloader conflicts with libraries PXF already ships. Place them in the server-specific directory (`$PXF_BASE/servers/<server_name>/`) instead, so PXF loads them in an isolated classloader.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
