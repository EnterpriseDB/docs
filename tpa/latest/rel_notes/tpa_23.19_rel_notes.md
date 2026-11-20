---
title: Trusted Postgres Architect 23.19 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.19_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Trusted Postgres Architect 23.19 release notes

Released: 12 Jul 2023

New features, enhancements, bug fixes, and other changes in Trusted Postgres Architect 23.19 include the following:

| Type        | Description                                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| New feature | TPA now allows the creation of physical replicas of subscriber-only PGD nodes.                                                                                                                                                                               |
| New feature | TPA now supports the configuration of HTTP(S) HARP and PGD Proxy health probes.                                                                                                                                                                              |
| New feature | TPA now allows you to select Patroni as a failover manager with the M1 architecture. This support is experimental and not yet recommended for use in production.                                                                                             |
| Enhancement | TPA now allows you to set specific versions for edb-pgd-proxy and edb-bdr-utilities rather than always using the latest version.                                                                                                                             |
| Change      | On Debian-like systems, the package selection code now uses -dbg rather than -dbgsym for certain packages where applicable.                                                                                                                                  |
| Change      | When configuring replication slots, TPA will now ensure that only valid characters are used in the primary\_slot\_name. Previously TPA would use the inventory\_hostname as a default, which could contain hyphens; these are now replaced with underscores. |
| Change      | The default Failover Manager version is now 4.7.                                                                                                                                                                                                             |
| Bug fix     | Fixed an issue whereby PGD 3.7 to 4 upgrades would fail in TPA 23.18.                                                                                                                                                                                        |
| Bug fix     | Fixed an issue whereby TPA would include underscores in TLS certificate Common Names when deploying PEM. This is invalid and would result in failure on some platforms.                                                                                      |
| Bug fix     | Fixed an issue whereby an incorrect etcd service name would be used on Debian-like platforms, preventing TPA from starting etcd.                                                                                                                             |
| Bug fix     | Fixed an issue whereby TPA could not install etcd packages on RHEL 8.                                                                                                                                                                                        |
| Bug fix     | Fixed an issue whereby the message `Failed to commit files to git: b''` would be displayed during configure.                                                                                                                                                 |
| Bug fix     | Fixed an issue whereby TPA would erroneously generate and overwrite Postgres user passwords when `generate_password: false`.                                                                                                                                 |
| Bug fix     | Fixed an issue whereby volume map creation on AWS failed to take account of region resulting in failures when using regions other than eu-west-1.                                                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
