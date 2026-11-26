---
title: Limitations
product: TDS Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/tds_data_adapter/latest/limitations/
lastModified: 2026-05-19T21:08:12+05:30
---

# Limitations

The following limitations apply to TDS foreign data wrapper:

- TDS foreign data wrapper doesn't currently support `JOIN` pushdown.
- TDS foreign data wrapper doesn't currently support write operations (`INSERT`, `UPDATE`, `DELETE`).
- The `CREATE FOREIGN TABLE` option `row_estimate_method` supports value `showplan_all` only with Microsoft SQL Server. It isn't available for Sybase databases.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
