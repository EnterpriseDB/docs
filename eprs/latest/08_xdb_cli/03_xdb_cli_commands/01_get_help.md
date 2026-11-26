---
title: Getting help (help)
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/01_get_help/
lastModified: 2022-06-07T08:02:28-04:00
---

# Getting help (help)

<div id="get_help" class="registered_link"></div>

The `help` command provides a syntax summary of all Replication Server CLI commands.

## Synopsis

`-help`

## Examples

```shell
$ java -jar edb-repcli.jar -help
Usage: java -jar edb-repcli.jar [OPTIONS]

Where OPTIONS include:
-help   Prints out Replication CLI command-line usage
-version        Prints out Replication CLI version
-encrypt -input <file> -output <file>   Encrypts input file to output file
-repversion -repsvrfile <file>  Prints Replication Server version
                      .
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
