---
title: Trusted Postgres Architect 23.20 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.20_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Trusted Postgres Architect 23.20 release notes

Released: 01 Aug 2023

New features, enhancements, bug fixes, and other changes in Trusted Postgres Architect 23.20 include the following:

| Type        | Description                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New feature | TPA now supports upgrades from PGD 4 to PGD 5 by running the new command `tpaexec reconfigure` to generate a revised config.yml and then `tpaexec upgrade` to perform the upgrade.           |
| Enhancement | Added a new subcommand `tpaexec info validate` that runs a checksum over the TPA installation and confirms that it matches the one distributed with the package.                             |
| Change      | The `update-postgres` command has been replaced with the more general `upgrade` command.                                                                                                     |
| Change      | TPA now explicitly adds `tzdata-java` when installing OpenJDK for Failover Manager on RHEL 8 or 9. This is a workaround for [this OpenJDK bug](https://access.redhat.com/solutions/7025428). |
| Change      | TPA now uses the latest available Debian AMIs on AWS (latest at the time of this release).                                                                                                   |
| Change      | TPA now runs `tpaexec provision` automatically as part of `tpaexec deploy` or `tpaexec upgrade` if config.yml has changed.                                                                   |
| Bug fix     | Fixed a bug whereby TPA could attempt to use a non-existent user when running pgd-cli on pgd-proxy nodes.                                                                                    |
| Bug fix     | Fixed a bug whereby changes made by `tpaexec relink` were not committed to the Git repository correctly.                                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
