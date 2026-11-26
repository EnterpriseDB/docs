---
title: Formatting Data Files
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/
lastModified: 2026-08-11T09:07:15Z
---

# Formatting Data Files

When you use the WarehousePG tools for loading and unloading data, you must specify how your data is formatted. `COPY`, `CREATE EXTERNAL TABLE,`and `gpload` have clauses that allow you to specify how your data is formatted. Data can be delimited text (`TEXT`) or comma separated values (`CSV`) format. External data must be formatted correctly to be read by WarehousePG. This topic explains the format of data files expected by WarehousePG.

- **[Formatting Rows](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/formatting-rows/)**

- **[Formatting Columns](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/formatting-columns/)**

- **[Representing NULL Values](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/representing-null-values/)**

- **[Escaping](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/)**

- **[Character Encoding](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/character-encoding/)**

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/)

- [Formatting Rows](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/formatting-rows/): WarehousePG expects rows of data to be separated by the LF character (Line feed, 0x0A), CR (Carriage return, 0x0D), or CR followed by LF (CR+LF, 0x0D 0x0A). LF is the standard newline representation on UNIX or UNIX-like operating systems. Operating systems such as Windows or Mac OS X use CR or CR+LF. All of these representations of a newline are supported by WarehousePG as a row delimiter. For more information, see Importing and Exporting Fixed Width Data.
- [Formatting Columns](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/formatting-columns/): The default column or field delimiter is the horizontal TAB character (0x09) for text files and the comma character (0x2C) for CSV files. You can declare a single character delimiter using the DELIMITER clause of COPY, CREATE EXTERNAL TABLE or gpload when you define your data format. The delimiter character must appear between any two data value fields. Do not place a delimiter at the beginning or end of a row. For example, if the pipe character ( \\| ) is your delimiter:
- [Representing NULL Values](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/representing-null-values/): NULL represents an unknown piece of data in a column or field. Within your data files you can designate a string to represent null values. The default string is \N (backslash-N) in TEXT mode, or an empty value with no quotations in CSV mode. You can also declare a different string using the NULL clause of COPY, CREATE EXTERNAL TABLEor gpload when defining your data format. For example, you can use an empty string if you do not want to distinguish nulls from empty strings. When using the WarehousePG loading tools, any data item that matches the designated null string is considered a null value.
- [Escaping](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/): There are two reserved characters that have special meaning to WarehousePG:
- [Character Encoding](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/character-encoding/): Character encoding systems consist of a code that pairs each character from a character set with something else, such as a sequence of numbers or octets, to facilitate data transmission and storage. WarehousePG supports a variety of character sets, including single-byte character sets such as the ISO 8859 series and multiple-byte character sets such as EUC (Extended UNIX Code), UTF-8, and Mule internal code. The server-side character set is defined during database initialization, UTF-8 is the default and can be changed. Clients can use all supported character sets transparently, but a few are not supported for use within the server as a server-side encoding. When loading or inserting data into WarehousePG, WarehousePG transparently converts the data from the specified client encoding into the server encoding. When sending data back to the client, WarehousePG converts the data from the server character encoding into the specified client encoding.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
