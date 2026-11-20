---
title: Examples for Creating External Tables
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/
lastModified: 2026-08-11T09:07:15Z
---

# Examples for Creating External Tables

These examples show how to define external data with different protocols. Each `CREATE EXTERNAL TABLE` command can contain only one protocol.

> **Note** When using IPv6, always enclose the numeric IP addresses in square brackets.

Start gpfdist before you create external tables with the gpfdist protocol. The following code starts the gpfdist file server program in the background on port _8081_ serving files from directory /var/data/staging. The logs are saved in /home/gpadmin/log.

```
gpfdist -p 8081 -d /var/data/staging -l /home/gpadmin/log &

```

- **[Example 1—Single gpfdist instance on single-NIC machine](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-1-single-gpfdist-instance-on-single-nic-machine/)**

- **[Example 2—Multiple gpfdist instances](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-2-multiple-gpfdist-instances/)**

- **[Example 3—Multiple gpfdists instances](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-3-multiple-gpfdists-instances/)**

- **[Example 4—Single gpfdist instance with error logging](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-4-single-gpfdist-instance-with-error-logging/)**

- **[Example 5—TEXT Format on a Hadoop Distributed File Server](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-5-text-format-on-a-hadoop-distributed-file-server/)**

- **[Example 6—Multiple files in CSV format with header rows](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-6-multiple-files-in-csv-format-with-header-rows/)**

- **[Example 7—Readable External Web Table with Script](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-7-readable-web-external-table-with-script/)**

- **[Example 8—Writable External Table with gpfdist](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-8-writable-external-table-with-gpfdist/)**

- **[Example 9—Writable External Web Table with Script](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-9-writable-external-web-table-with-script/)**

- **[Example 10—Readable and Writable External Tables with XML Transformations](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-10-readable-and-writable-external-tables-with-xml-transformations/)**

**Parent topic:** [Defining External Tables](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/)

- [Example 1—Single gpfdist instance on single-NIC machine](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-1-single-gpfdist-instance-on-single-nic-machine/): Creates a readable external table, ext\_expenses, using the gpfdist protocol. The files are formatted with a pipe (\\|) as the column delimiter.
- [Example 2—Multiple gpfdist instances](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-2-multiple-gpfdist-instances/): Creates a readable external table, ext\_expenses, using the gpfdist protocol from all files with the txt extension. The column delimiter is a pipe ( \\| ) and NULL (' ') is a space.
- [Example 3—Multiple gpfdists instances](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-3-multiple-gpfdists-instances/): Creates a readable external table, ext\_expenses, from all files with the txt extension using the gpfdists protocol. The column delimiter is a pipe ( \\| ) and NULL (' ') is a space. For information about the location of security certificates, see gpfdists\:// Protocol.
- [Example 4—Single gpfdist instance with error logging](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-4-single-gpfdist-instance-with-error-logging/): Uses the gpfdist protocol to create a readable external table, ext\_expenses, from all files with the txt extension. The column delimiter is a pipe ( \\| ) and NULL (' ') is a space.
- [Example 5—TEXT Format on a Hadoop Distributed File Server](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-5-text-format-on-a-hadoop-distributed-file-server/): Creates a readable external table, ext\_expenses, using the pxf protocol. The column delimiter is a pipe ( \\| ).
- [Example 6—Multiple files in CSV format with header rows](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-6-multiple-files-in-csv-format-with-header-rows/): Creates a readable external table, ext\_expenses, using the file protocol. The files are CSV format and have a header row.
- [Example 7—Readable External Web Table with Script](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-7-readable-web-external-table-with-script/): Creates a readable external web table that runs a script once per segment host:
- [Example 8—Writable External Table with gpfdist](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-8-writable-external-table-with-gpfdist/): Creates a writable external table, sales\_out, that uses gpfdist to write output data to the file sales.out. The column delimiter is a pipe ( \\| ) and NULL (' ') is a space. The file will be created in the directory specified when you started the gpfdist file server.
- [Example 9—Writable External Web Table with Script](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-9-writable-external-web-table-with-script/): Creates a writable external web table, campaignout, that pipes output data received by the segments to an executable script, toadreport\_etl.sh:
- [Example 10—Readable and Writable External Tables with XML Transformations](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/external/external-tables/creating-external-tables---examples/example-10-readable-and-writable-external-tables-with-xml-transformations/): WarehousePG can read and write XML data to and from external tables with gpfdist. For information about setting up an XML transform, see Transforming External Data with gpfdist and gpload.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
