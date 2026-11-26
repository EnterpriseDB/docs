---
title: Hybrid Manager 1.3.3 release notes
description: Release notes for version 1.3.3 of Hybrid Manager.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/release_notes/hm_1.3.3_rel_notes/
lastModified: 2025-12-15T18:26:18Z
---

# Hybrid Manager 1.3.3 release notes

**Release Date:** December 15, 2025

Hybrid Manager 1.3.3 is a maintenance release that includes bug fixes and stability updates.

| Type    | Description                                                                                                                                                                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | You can now successfully click the Restore Cluster button even when Barman is configured as the default backup solution.                                                                                                                            |
| Bug fix | AWS STS requests now correctly route to the regional endpoint when a VPC endpoint is in use, rather than defaulting to the global endpoint.                                                                                                         |
| Bug fix | Introduced a Quick-Signin URL to allow users to navigate directly to the Identity Provider (IdP).                                                                                                                                                   |
| Bug fix | Improved platform security against [CVE-2025-14038](https://www.enterprisedb.com/docs/security/advisories/cve202514038/) by ensuring all internal gRPC API endpoints have enhanced authentication and authorization to prevent unauthorized access. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
