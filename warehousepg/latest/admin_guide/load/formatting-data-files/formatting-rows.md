---
title: Formatting Rows
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/formatting-data-files/formatting-rows/
lastModified: 2026-09-25T15:14:11+01:00
---

# Formatting Rows

WarehousePG expects rows of data to be separated by the `LF` character (Line feed, `0x0A`), `CR` (Carriage return, `0x0D`), or `CR` followed by `LF` (`CR+LF`, `0x0D 0x0A`). `LF` is the standard newline representation on UNIX or UNIX-like operating systems. Operating systems such as Windows or Mac OS X use `CR` or `CR+LF`. All of these representations of a newline are supported by WarehousePG as a row delimiter. For more information, see [Importing and Exporting Fixed Width Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/importing-and-exporting-fixed-width-data/).

**Parent topic:** [Formatting Data Files](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/formatting-data-files/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
