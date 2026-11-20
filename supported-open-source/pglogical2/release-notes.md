---
title: Release Notes
product: Pglogical 2
url: https://www.enterprisedb.com/docs/supported-open-source/pglogical2/release-notes/
lastModified: 2023-09-07T08:52:45+01:00
---

# Release Notes

## pglogical 2.4.3

Version 2.4.3 is a maintenance release of pglogical 2.

### Changes

- Apply data filtering on the correct tuple during initial synchronization.

- Restore the correct memory context while decoding a change.

- Drop database never completes in PostgreSQL 15.

- Don't replicate TRUNCATE as global message.

## pglogical 2.4.2

Version 2.4.2 is a maintenance release of pglogical 2.

### Changes

- Add support for PostgreSQL 15.

## pglogical 2.4.1

Version 2.4.1 is a maintenance release of pglogical 2.

### Changes

- Fix "snapshot still active" warnings and snapshot handling with
  domains.  Problems introduced in version 2.4.0.

- Flush error state when having failed to drop remote replication slot

## pglogical 2.4.0

Version 2.4.0 is a maintenance release of pglogical 2.

### Changes

- Add preliminary support for PostgreSQL 14 (beta)

- Fix pglogical\_show\_subscription\_table to return row rather than set of rows

- Fix snapshot handling in output plugin and apply worker

- Fix command quoting on Windows so that it actually works\
  Seems like the API used before has 1024 limit on command line length

- Make sure that the schema syncing process can be interrupted on Windows

- Fix compilation issues with pglogical\_create\_subscriber on Windows

- Fix double closing of relation when a BEFORE ROW DELETE trigger returns NULL
  in the apply worker

- Fix multi-insert crash in the SPI apply worker

- Fix multi-insert doing insert of last tuple multiple times in apply worker

- Make sure debug\_query\_string is always set\
  Newer versions of PostgreSQL require that debug\_query\_string is always set.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
