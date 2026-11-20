---
title: Replication Server 7.12.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.0/
lastModified: 2025-05-14T11:36:38+02:00
---

# Replication Server 7.12.0 release notes

Released: 14 May 2025

New features, enhancements, bug fixes, and other changes in Replication Server 7.12.0 include the following:

| Type        | Description                                                                                                                                                                                    | Ticket |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Enhancement | EDB Replication Server (EPRS) has been enhanced to support a new FIPS-compliant encryption method AES-SHA256 and is certified to be used in FIPS-compliant environments.                       | #46563 |
| Enhancement | Added certification for installation and use on Ubuntu 24 AMD64 architectures.                                                                                                                 |        |
| Bug fix     | Fixed an issue that caused the creation of a subscription to fail with the `ArrayIndexOutOfBound` exception when the Oracle and PostgreSQL publication databases are part of the same cluster. | #46127 |
| Bug fix     | Fixed an issue where the shadow table cleanup didn't delete old entries for an Oracle publication database.                                                                                    | #45645 |
| Bug fix     | Fixed an issue where Foreign key creation failed for an Oracle publication database for versions 12.2 and earlier.                                                                             | #47561 |
| Bug fix     | Fixed an `"ORA-17056: Non-supported character set"` error that caused the publication creation for an Oracle publication database configured with JA16SJIS encoding to fail.                   |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
