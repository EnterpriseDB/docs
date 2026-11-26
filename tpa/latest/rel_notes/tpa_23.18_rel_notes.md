---
title: Trusted Postgres Architect 23.18 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.18_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Trusted Postgres Architect 23.18 release notes

Released: 23 May 2023

New features, enhancements, bug fixes, and other changes in Trusted Postgres Architect 23.18 include the following:

| Type        | Description                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | TPA now uses pg\_basebackup instead of repmgr for initial replica creation.                                                                    |
| Enhancement | TPA now supports SLES 15, excluding creation of local repositories for air-gapped deployments.                                                 |
| Enhancement | TPA now supports minor-version upgrades of PGD5.                                                                                               |
| Enhancement | TPA now runs improved tests when `tpaexec test` is executed.                                                                                   |
| Bug fix     | Fixed an issue whereby TPA attempted to use legacy 2ndQuadrant repositories on unsupported distributions.                                      |
| Bug fix     | Fixed an issue whereby TPA didn't install pg\_receivewal on Barman instances where it was required.                                            |
| Bug fix     | Fixed an issue whereby TPA intermittently failed to create symlinks to block devices on AWS hosts during provisioning, causing deploy to fail. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
