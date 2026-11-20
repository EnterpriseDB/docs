---
title: CREATE PROTOCOL
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_PROTOCOL/
lastModified: 2026-10-14T08:34:33Z
---

# CREATE PROTOCOL

<a id="topic1"></a><a id="bv20941"></a><a id="sql_command_desc"></a>

Registers a custom data access protocol that can be specified when defining a WarehousePG external table.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
CREATE [TRUSTED] PROTOCOL <name> (
   [readfunc='<read_call_handler>'] [, writefunc='<write_call_handler>']
   [, validatorfunc='<validate_handler>' ])
```

<a id="section3">

</a>

## Description

`CREATE PROTOCOL` associates a data access protocol name with call handlers that are responsible for reading from and writing data to an external data source. You must be a superuser to create a protocol.

The `CREATE PROTOCOL` command must specify either a read call handler or a write call handler. The call handlers specified in the `CREATE PROTOCOL` command must be defined in the database.

The protocol name can be specified in a `CREATE EXTERNAL TABLE` command.

For information about creating and enabling a custom data access protocol, see "Example Custom Data Access Protocol" in the _WarehousePG Administrator Guide_.

<a id="section4">

</a>

## Parameters

### TRUSTED

If not specified, only superusers and the protocol owner can create external tables using the protocol. If specified, superusers and the protocol owner can `GRANT` permissions on the protocol to other database roles.

### name

The name of the data access protocol. The protocol name is case sensitive. The name must be unique among the protocols in the database.

### readfunc

```
readfunc= 'read_call_handler'
```

The name of a previously registered function that WarehousePG calls to read data from an external data source. The command must specify either a read call handler or a write call handler.

### writefunc

```
writefunc= 'write_call_handler'
```

The name of a previously registered function that WarehousePG calls to write data to an external data source. The command must specify either a read call handler or a write call handler.

### validatorfunc

```
validatorfunc='validate_handler'
```

An optional validator function that validates the URL specified in the `CREATE EXTERNAL TABLE` command.

<a id="section5">

</a>

## Notes

WarehousePG handles external tables of type `file`, `gpfdist`, and `gpfdists` internally. See [s3:// Protocol](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/s3-protocol/#configuring-the-s3-protocol) for information about enabling the `S3` protocol. Refer to [PXF for WarehousePG](https://www.enterprisedb.com/docs/pxf/latest/) for information about using the `pxf` protocol.

Any shared library that implements a data access protocol must be located in the same location on all WarehousePG segment hosts. For example, the shared library can be in a location specified by the operating system environment variable `LD_LIBRARY_PATH` on all hosts. You can also specify the location when you define the handler function. For example, when you define the `s3` protocol in the `CREATE PROTOCOL` command, you specify `$libdir/gps3ext.so` as the location of the shared object, where `$libdir` is located at `$GPHOME/lib`.

<a id="section7">

</a>

## Compatibility

`CREATE PROTOCOL` is a WarehousePG extension.

<a id="section8">

</a>

## See Also

[ALTER PROTOCOL](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/ALTER_PROTOCOL/), [CREATE EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_EXTERNAL_TABLE/), [DROP PROTOCOL](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_PROTOCOL/), [GRANT](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/GRANT/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
