---
title: About the examples
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_ora_dev_guide/02_about_the_examples_used_in_this_guide/
lastModified: 2023-02-14T16:10:29+05:30
---

# About the examples

<div id="about_the_examples_used_in_this_guide" class="registered_link"></div>

The examples are use the PSQL program. The prompt that normally appears when using PSQL is omitted in these examples to provide extra clarity for the point being demonstrated.

```text
Examples and output from examples are shown in a fixed-width, white font on a dark background.
```

Also note the following points:

- During installation of the EDB Postgres Advanced Server, you must make selections for configuration and defaults compatible with Oracle databases to reproduce the same results as the examples. You can verify a default compatible configuration by issuing the following commands in PSQL and returning the results shown:

  ```text
  SHOW edb_redwood_date;

   edb_redwood_date
  ------------------
   on

  SHOW datestyle;

   DateStyle
  --------------
   Redwood, DMY

  SHOW edb_redwood_strings;

   edb_redwood_strings
  ---------------------
   on
  ```

- The examples use the sample tables, `dept`, `emp`, and `jobhist`, created and loaded when EDB Postgres Advanced Server was installed. The `emp` table is installed with triggers that you must disable to reproduce the same results as the examples. Log into EDB Postgres Advanced Server as the `enterprisedb` superuser and disable the triggers by issuing the following command:

  ```text
  ALTER TABLE emp DISABLE TRIGGER USER;
  ```

You can later reactivate the triggers on the `emp` table with the following command:

````
```text
ALTER TABLE emp ENABLE TRIGGER USER;
```
````

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
