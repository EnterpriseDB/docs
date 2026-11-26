---
title: EDB Postgres Advanced Server 14.9.1 release notes
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_9_1_rel_notes/
lastModified: 2023-09-26T14:57:29-04:00
---

# EDB Postgres Advanced Server 14.9.1 release notes

Released: 22 Sep 2023

EDB Postgres Advanced Server 14.9.1 includes the following enhancements and bug fixes:

| Type    | Description                                                                                         | Addresses   |   |
| ------- | --------------------------------------------------------------------------------------------------- | ----------- | - |
| Bug fix | Hexadecimal values are now allowed as record and field delimiter in EDB\*Loader.                    | #91832      |   |
| Bug fix | Fixed memory leak in sub-transaction with usage of EXCEPTION in package.                            | #94255      |   |
| Bug fix | Fixed the cache lookup error for event triggers with proper initialization of the variables in SPL. |             |   |
| Bug fix | Fixed the buffer overrun hazard in EDB\*Wrap code.                                                  |             |   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
