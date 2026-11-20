---
title: Trusted Postgres Architect 23.34.1 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.34.1_rel_notes/
lastModified: 2024-09-09T15:42:59+01:00
---

# Trusted Postgres Architect 23.34.1 release notes

Released: 9 September 2024

Trusted Postgres Architect 23.34.1 is a bug fix release which resolves the following issues:

| Type    | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug Fix | Fixed an issue whereby running deploy after a switchover fails for nodes with `efm-witness` role. The `upstream-primary` for EFM nodes is determined using the facts gathered from Postgres. This previously failed for nodes with `efm-witness` roles  since they do not have Postgres. The task to determine upstream-primary is now run only on nodes with `primary` or `replica` roles. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
