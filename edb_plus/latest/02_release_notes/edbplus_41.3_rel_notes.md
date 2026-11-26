---
title: EDB*Plus 41.3.0 release notes
product: EDB*Plus
version: "41"
url: https://www.enterprisedb.com/docs/edb_plus/latest/02_release_notes/edbplus_41.3_rel_notes/
lastModified: 2024-11-27T10:39:34+01:00
---

# EDB\*Plus 41.3.0 release notes

Released: 27 Nov 2024

New features, enhancements, bug fixes, and other changes in EDB\*Plus 41.3.0 include:

| Type        | Description                                                                                                                                                                                           | Addresses             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Enhancement | EDB\*Plus has been certified for use with EDB Postgres Advanced Server version 17.                                                                                                                    |                       |
| Enhancement | Enhanced the behavior where the `SET LINESIZE` command doesn't behave as expected when set to a value greater than 10. This enhancement mainly applies to the constants used in the select statement. | #103591 <br/>  #35673 |
| Bug fix     | Corrected the behavior where `SPOOL` was introducing redundant blank lines after each output.                                                                                                         | #37846                |
| Bug fix     | Fixed the issue where EDB\*Plus is unable to process the command when `--` is used in between `/* */`.                                                                                                | #100496               |
| Bug fix     | Fixed the issue causing the execution of a trivial procedural script to perform quite slowly in EDB\*Plus.                                                                                            | #37747                |
| Bug fix     | Fixed an issue related to the configuration of EDB\*Plus with SSL certificate authentication method when the password is not specified.                                                               | #37970                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
