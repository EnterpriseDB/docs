---
title: Errors and messages
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/12_working_with_collections/05_errors_and_messages/
lastModified: 2023-02-14T16:10:29+05:30
---

# Errors and messages

<div id="errors_and_messages" class="registered_link"></div>

Use the `DBMS_OUTPUT.PUT_LINE` statement to report messages:

```text
DBMS_OUTPUT.PUT_LINE ( <message> );
```

Where `message` is any expression evaluating to a string.

This example displays the message on the user’s output display:

```text
DBMS_OUTPUT.PUT_LINE('My name is John');
```

The special variables `SQLCODE` and `SQLERRM` contain a numeric code and a text message, respectively, that describe the outcome of the last SQL command issued. If any other error occurs in the program, such as division by zero, these variables contain information about the error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
