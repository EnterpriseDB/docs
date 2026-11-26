---
title: Release Notes
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/
lastModified: 2024-05-16T15:38:37+01:00
---

# Release Notes

High Availability Routing for Postgres (HARP) is a cluster-management tool for
[Bi-directional Replication (BDR)](https://www.enterprisedb.com/docs/pgd/3.7/bdr/) clusters. The core design of
the tool is to route all application traffic in a single data center or
region to only one node at a time. This node, designated the lead master, acts
as the principle write target to reduce the potential for data conflicts.

The release notes in this section provide information on what was new in each release.

| Version                                                                                       | Release Date |
| --------------------------------------------------------------------------------------------- | ------------ |
| [2.4.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.4.1_rel_notes/) | 16 May 2024  |
| [2.4.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.4.0_rel_notes/) | 05 Mar 2024  |
| [2.3.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.2_rel_notes/) | 17 Oct 2023  |
| [2.3.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.1_rel_notes/) | 27 Jul 2023  |
| [2.3.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.0_rel_notes/) | 12 Jul 2023  |
| [2.2.3](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.3_rel_notes/) | 16 May 2023  |
| [2.2.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.2_rel_notes/) | 30 Mar 2023  |
| [2.2.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.1_rel_notes/) | 16 Nov 2022  |
| [2.2.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.0_rel_notes/) | 22 Aug 2022  |
| [2.1.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.1.1_rel_notes/) | 21 Jun 2022  |
| [2.1.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.1.0_rel_notes/) | 17 May 2022  |
| [2.0.3](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.3_rel_notes/) | 31 Mar 2022  |
| [2.0.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.2_rel_notes/) | 24 Feb 2022  |
| [2.0.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.1_rel_notes/) | 31 Jan 2021  |
| [2.0.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2_rel_notes/)     | 01 Dec 2021  |

- [Version 2.4.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.4.1_rel_notes/): Released: 16 May 2024
- [Version 2.4.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.4.0_rel_notes/): This is a minor release of HARP 2 that includes internal maintenance fixes.
- [Version 2.3.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.2_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.3.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.1_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.3.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.3.0_rel_notes/): This is a patch release of HARP 2 that includes enhancements and fixes for issues identified
- [Version 2.2.3](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.3_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.2.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.2_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.2.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.1_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.2.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.2.0_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.1.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.1.1_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.1.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.1.0_rel_notes/): This is a minor release of HARP 2 that includes new features as well
- [Version 2.0.3](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.3_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.0.2](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.2_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.0.1](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2.0.1_rel_notes/): This is a patch release of HARP 2 that includes fixes for issues identified
- [Version 2.0.0](https://www.enterprisedb.com/docs/pgd/3.7/harp/01_release_notes/harp2_rel_notes/): This is new major release of HARP that constitutes of complete rewrite of the

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
