---
title: UNLISTEN
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/UNLISTEN/
lastModified: 2026-10-14T08:34:33Z
---

# UNLISTEN

Stops listening for a notification.

<a id="section2">

</a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
UNLISTEN { <channel> | * }
```

<a id="section3">

</a>

## Description

`UNLISTEN` is used to remove an existing registration for `NOTIFY` events. `UNLISTEN` cancels any existing registration of the current WarehousePG session as a listener on the notification channel named channel. The special wildcard `*` cancels all listener registrations for the current session.

[NOTIFY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/NOTIFY/) contains a more extensive discussion of the use of `LISTEN` and `NOTIFY`.

<a id="section4">

</a>

## Parameters

### channel

The name of a notification channel (any identifier).

### \*

All current listen registrations for this session are cleared.

<a id="section4a">

</a>

## Notes

You can unlisten something you were not listening for; no warning or error will appear.

At the end of each session, `UNLISTEN *` is automatically executed.

A transaction that has executed `UNLISTEN` cannot be prepared for two-phase commit.

<a id="section5">

</a>

## Examples

To make a registration:

```
LISTEN virtual;
NOTIFY virtual;
Asynchronous notification "virtual" received from server process with PID 8448.
```

Once `UNLISTEN` has been executed, further `NOTIFY` messages will be ignored:

```
UNLISTEN virtual;
NOTIFY virtual;
-- no NOTIFY event is received
```

<a id="section6">

</a>

## Compatibility

There is no `UNLISTEN` statement in the SQL standard.

<a id="section7">

</a>

## See Also

[LISTEN](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/LISTEN/), [NOTIFY](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/NOTIFY/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
