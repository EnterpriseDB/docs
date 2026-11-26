---
title: Anonymous blocks
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/03_anonymous_blocks/
lastModified: 2025-11-25T20:39:04+05:30
---

# Anonymous blocks

<div id="anonymous_blocks" class="registered_link"></div>

You typically write blocks as part of a procedure, function, subprogram, or trigger. You name procedure, function, and trigger programs and store them in the database if you want to reuse them.

For quick, one-time execution such as testing, you can enter the block without providing a name or storing it in the database. A block without a name  and that isn't stored in the database is called an _anonymous block_. Once the block is executed and erased from the application buffer, you can't execute it again unless the block code you enter it into the application again.

Typically, the same block of code executes many times. To run a block of code repeatedly without reentering the code each time, with some simple modifications, you can turn an anonymous block into a procedure or function. See [Procedures overview](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/04_procedures_overview/) and [Functions overview](https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/02_spl_programs/05_functions_overview/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
