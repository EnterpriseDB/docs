---
title: EDB Postgres Advanced Server 15.4.1 release notes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_rel_notes/epas15_4_1_rel_notes/
lastModified: 2023-11-09T17:35:38+05:30
---

# EDB Postgres Advanced Server 15.4.1 release notes

Released: 22 Sep 2023

EDB Postgres Advanced Server 15.4.1 includes the following enhancements and bug fixes:

| Type    | Description                                                                                         | Addresses   |   |
| ------- | --------------------------------------------------------------------------------------------------- | ----------- | - |
| Bug fix | Hexadecimal values are now allowed as record and field delimiter in EDB\*Loader.                    | #91832      |   |
| Bug fix | Fixed memory leak in sub-transaction with usage of EXCEPTION in package.                            | #94255      |   |
| Bug fix | Fixed the cache lookup error for event triggers with proper initialization of the variables in SPL. |             |   |
| Bug fix | Fixed the buffer overrun hazard in EDB\*Wrap code.                                                  |             |   |
| Bug fix | Fixed the function pg\_get\_expre() to avoid "unrecognized node type" error.                        | #96138      |   |
| Bug fix | Fixed segment size handling for pg\_upgrade with TDE.                                               | #96376      |   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
