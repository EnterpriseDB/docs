---
title: Trusted Postgres Architect 23.17 release notes
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.17_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Trusted Postgres Architect 23.17 release notes

Released: 10 May 2023

New features, enhancements, bug fixes, and other changes in Trusted Postgres Architect 23.17 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enhancement | Added a new `--pgd-proxy-routing` parameter to the configure command. This can be set to `global` or `local`. Local routing will make every PGD-Proxy route to a write leader within its own location. Global routing will make every proxy route to a single write leader, elected amongst all available data nodes across all locations. |
| Change      | Removed the `--active-locations` parameter from the configure command.                                                                                                                                                                                                                                                                     |
| Enhancement | TPA now supports Ubuntu 22.04                                                                                                                                                                                                                                                                                                              |
| Change      | Updated the AWS AMIs used for RHEL 7 and 8.                                                                                                                                                                                                                                                                                                |
| Bug fix     | Fixed an issue whereby TPA would incorrectly remove groups from existing Postgres users.                                                                                                                                                                                                                                                   |
| Bug fix     | Fixed an issue whereby TPA would print an unhelpful error message when a git commit failed.                                                                                                                                                                                                                                                |
| Bug fix     | Fixed an issue whereby group names were incorrectly sanitized and uppercase letters were converted to underscores rather than lowercase ones.                                                                                                                                                                                              |
| Bug fix     | Fixed an issue whereby Postgres was not restarted when required after CAMO configuration.                                                                                                                                                                                                                                                  |
| Bug fix     | Fixed an issue with etcd changes, ensuring that they are now idempotent and avoiding unnecessary restarts of etcd on subsequent deployments.                                                                                                                                                                                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
