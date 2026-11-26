---
title: Migration Portal 4.14.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.14.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.14.0 release notes

Released: 18 Dec 2025

New features, enhancements, bug fixes, and other changes in Migration Portal 4.14.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for EDB Postgres Advanced Server (EPAS) version 18, which introduced several new Oracle compatibility features. Migration Portal users can now assess their Oracle schemas against EPAS 18 and subsequently migrate the schema to an EPAS 18 database.                                                                                       |
| Enhancement | The Migration Portal now includes enhanced object dependency mapping. Dependencies are displayed in a hierarchical tree structure, allowing users to quickly identify parent objects that trigger cascading failures in child objects. This visibility enables more strategic reassessment prioritization and significantly improves migration efficiency. |
| Enhancement | You can now generate migration reports in JSON format. This structured data support allows for seamless integration with external tools and downstream automation workflows.                                                                                                                                                                               |
| Bug fix     | Resolved an issue that prevented the download of offline export files when processing high-volume or large-size schema files.                                                                                                                                                                                                                              |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
