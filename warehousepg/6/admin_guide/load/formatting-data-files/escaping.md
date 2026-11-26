---
title: Escaping
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/
lastModified: 2026-08-11T09:07:15Z
---

# Escaping

There are two reserved characters that have special meaning to WarehousePG:

- The designated delimiter character separates columns or fields in the data file.
- The newline character designates a new row in the data file.

If your data contains either of these characters, you must escape the character so that WarehousePG treats it as data and not as a field separator or new row. By default, the escape character is a \ (backslash) for text-formatted files and a double quote (") for csv-formatted files.

- **[Escaping in Text Formatted Files](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/escaping-in-text-formatted-files/)**

- **[Escaping in CSV Formatted Files](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/escaping-in-csv-formatted-files/)**

**Parent topic:** [Formatting Data Files](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/)

- [Escaping in Text Formatted Files](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/escaping-in-text-formatted-files/): By default, the escape character is a \\\ (backslash) for text-formatted files. You can declare a different escape character in the ESCAPE clause of COPY, CREATE EXTERNAL TABLEor gpload. If your escape character appears in your data, use it to escape itself.
- [Escaping in CSV Formatted Files](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/load/formatting-data-files/escaping/escaping-in-csv-formatted-files/): By default, the escape character is a " (double quote) for CSV-formatted files. If you want to use a different escape character, use the ESCAPE clause of COPY, CREATE EXTERNAL TABLE or gpload to declare a different escape character. In cases where your selected escape character is present in your data, you can use it to escape itself.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
