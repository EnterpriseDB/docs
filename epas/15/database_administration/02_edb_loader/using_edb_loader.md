---
title: EDB*Loader error handling
description: Describes the types of errors the EDB*Loader utility can encounter
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/02_edb_loader/using_edb_loader/
lastModified: 2023-11-09T17:35:38+05:30
---

# EDB\*Loader error handling

<div id="general_usage" class="registered_link"></div>

EDB\*Loader can load data files with either delimiter-separated or fixed-width fields in single-byte or multibyte character sets. The delimiter can be a string consisting of one or more single-byte or multibyte characters. Data file encoding and the database encoding can differ. Character set conversion of the data file to the database encoding is supported.

Each EDB\*Loader session runs as a single, independent transaction. If an error occurs during the EDB\*Loader session that aborts the transaction, all changes made during the session are rolled back.

Generally, formatting errors in the data file don't result in an aborted transaction. Instead, the badly formatted records are written to a text file called the _bad file_. The reason for the error is recorded in the _log file_.

Records causing database integrity errors result in an aborted transaction and rollback. As with formatting errors, the record causing the error is written to the bad file and the reason is recorded in the log file.

> **Note**
>
> EDB\*Loader differs from Oracle SQL\*Loader in that a database integrity error results in a rollback in EDB\*Loader. In Oracle SQL\*Loader, only the record causing the error is rejected. Records that were previously inserted into the table are retained, and loading continues after the rejected record.

The following are examples of types of formatting errors that don't abort the transaction:

- Attempt to load non-numeric value into a numeric column
- Numeric value too large for a numeric column
- Character value too long for the maximum length of a character column
- Attempt to load improperly formatted date value into a date column

The following are examples of types of database errors that abort the transaction and result in the rollback of all changes made in the EDB\*Loader session:

- Violating a unique constraint such as a primary key or unique index
- Violating a referential integrity constraint
- Violating a check constraint
- Error thrown by a trigger fired as a result of inserting rows

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
