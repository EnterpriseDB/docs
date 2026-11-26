---
title: Using a Custom Format
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/
lastModified: 2026-09-25T15:14:11+01:00
---

# Using a Custom Format

You specify a custom data format in the `FORMAT` clause of `CREATE EXTERNAL TABLE`.

```
FORMAT 'CUSTOM' (formatter=format_function, key1=val1,...keyn=valn)

```

Where the `'CUSTOM'` keyword indicates that the data has a custom format and `formatter` specifies the function to use to format the data, followed by comma-separated parameters to the formatter function.

WarehousePG provides functions for formatting fixed-width data, but you must author the formatter functions for variable-width data. The steps are as follows.

1. Author and compile input and output functions as a shared library.
2. Specify the shared library function with `CREATE FUNCTION` in WarehousePG.
3. Use the `formatter` parameter of `CREATE EXTERNAL TABLE`'s `FORMAT` clause to call the function.

- **[Importing and Exporting Fixed Width Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/importing-and-exporting-fixed-width-data/)**

- **[Examples: Read Fixed-Width Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/examples-read-fixed-width-data/)**

**Parent topic:** [Loading and Writing Non-HDFS Custom Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/)

- [Importing and Exporting Fixed Width Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/importing-and-exporting-fixed-width-data/): Each column/field in fixed-width text data contains a certain number of character positions. Use a WarehousePG custom format for fixed-width data by specifying the built-in formatter functions fixedwithin (read) and fixedwidthout (write).
- [Examples of Reading Fixed-Width Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/examples-read-fixed-width-data/): The following examples show how to read fixed-width data.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
