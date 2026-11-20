---
title: Trusted Postgres Architect 23.16 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.16_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Trusted Postgres Architect 23.16 release notes

Released: 21 Mar 2023

New features, enhancements, bug fixes, and other changes in Trusted Postgres Architect 23.16 include the following:

| Type        | Description                                                                                                                                                                                                        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Change      | The default PGD-Always-ON cluster is now one location with an associated subgroup containing two data nodes and one witness node.                                                                                  |
| Change      | TPA now deploys pgd-proxy on all data nodes by default.                                                                                                                                                            |
| Enhancement | Added a new option, `--add-proxy-nodes-per-location N`, which creates separate proxy instances                                                                                                                     |
| Enhancement | TPA now adds a witness node automatically if `--data_nodes_per_location` is even and prints a warning if you specify a cluster with only two locations                                                             |
| Change      | The parameter `--add-witness-only-location`  has been renamed to `--witness-only-location` because we're NOT adding a location, but designating an already-named (in `--location-names`) location as witness-only. |
| Change      | You must now specify Postgres flavour and version explicitly at `tpaexec configure` time                                                                                                                           |
| Enhancement | Added new CLI abbreviations for Postgres flavour and version, for example `--postgresql 14` or `--edbpge 15`                                                                                                       |
| Enhancement | Improved handling and documentation of the various supported EDB software repositories                                                                                                                             |
| Change      | TPA no longer includes the PGDG repository by default for PGD-Always-ON clusters                                                                                                                                   |
| Bug fix     | Fixed an issue whereby EDB Failover Manager was not selected as the failover manager for EPAS by default                                                                                                           |
| Bug fix     | Fixed an issue whereby pglogical was unnecessarily installed in the M1 architecture                                                                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
