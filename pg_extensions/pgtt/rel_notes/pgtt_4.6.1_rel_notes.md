---
title: Release notes for pgtt
product: pgtt
url: https://www.enterprisedb.com/docs/pg_extensions/pgtt/rel_notes/pgtt_4.6.1_rel_notes/
lastModified: 2026-10-08T15:06:48+05:30
---

# Release notes for pgtt

## Enhancements

| Type        | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Improved EDB Postgres Advanced Server (EPAS) compatibility. `pgtt` is now fully compatible with EPAS environments where `default_with_rowids` is set to `ON`. `pgtt` automatically overrides this setting internally during template and per-session table creation. Global temporary tables created with an explicit `WITH (rowids = true)` clause aren't supported and are rejected with an error. |

For other changes, see the [pgtt official change log](https://github.com/darold/pgtt/releases/tag/v4.6).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
