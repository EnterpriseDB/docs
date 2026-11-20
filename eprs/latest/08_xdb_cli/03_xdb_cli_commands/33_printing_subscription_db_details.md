---
title: Printing Subscription Database Details (printsubdbidsdetails)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/33_printing_subscription_db_details/
lastModified: 2025-04-03T18:05:51+02:00
---

# Printing Subscription Database Details (printsubdbidsdetails)

<div id="printing_subscription_db_details" class="registered_link"></div>

**For SMR only:** The `printsubdbidsdetails` command prints the connection information for each subscription database definition.

## Synopsis

`-printsubdbidsdetails -repsvrfile subsvrfile`

The output has the following components:

`dbid:host:port:dbname:user`

> **Note**
>
> The database user’s password is not displayed.

## Parameters

`subsvrfile`

The file containing the subscription server login information.

`dbid`

The subscription database ID assigned to the subscription database definition.

`host`

The IP address of the host where the subscription database server is running.

`port`

The port number on which the database server is listening for connections.

`dbname`

The Postgres or SQL Server database name, the Oracle SID, or the Oracle service name of the subscription database.

`user`

The subscription database user name.

## Examples

This example displays the subscription database definitions subordinate to the subscription server identified by the content of file `subsvrfile.prop`.

```shell
$ java -jar edb-repcli.jar -printsubdbidsdetails \
>   -repsvrfile ~/subsvrfile.prop
Printing subscription database ids with details...
id:host:port:database|sid:user
1:192.168.2.6:1521:xe:subuser
2:192.168.2.7:5444:subdb:subuser
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
