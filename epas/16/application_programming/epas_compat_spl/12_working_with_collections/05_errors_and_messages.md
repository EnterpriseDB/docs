---
title: Errors and messages
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/05_errors_and_messages/
lastModified: 2024-11-22T12:16:04+01:00
---

# Errors and messages

<div id="errors_and_messages" class="registered_link"></div>

## Reporting messages

Use the `DBMS_OUTPUT.PUT_LINE` statement to report messages:

```sql
DBMS_OUTPUT.PUT_LINE ( <message> );
```

Where `message` is any expression evaluating to a string.

This example displays the message on the user’s output display:

```sql
DBMS_OUTPUT.PUT_LINE('My name is John');
```

The special variables `SQLCODE` and `SQLERRM` contain a numeric code and a text message, respectively, that describe the outcome of the last SQL command issued. If any other error occurs in the program such as division by zero, these variables contain information pertaining to the error.

## SQLCODE and SQLERRM functions

SQLCODE and SQLERRM functions are now available in EDB Postgres Advanced Server.

In an exception handler, the `SQLCODE` function returns the numeric code of the exception being handled. Outside an exception handler, `SQLCODE` returns `0`.

The `SQLERRM` function, returns the error messaage associated with an `SQLCODE` variable value. If the error code value is passed to the `SQLERRM` function, it returns an error message associated with the passed error code value, regardless of the current error raised.

A SQL statement can't invoke `SQLCODE` and `SQLERRM` functions.

Examples:

```sql
declare
l_var number;
begin
l_var:=-1476;
dbms_output.put_line(sqlerrm(l_var::int));
l_var:=0;
dbms_output.put_line(sqlerrm(l_var::int));
l_var:=12;
dbms_output.put_line(sqlerrm(l_var::int));
l_var:=01403;
dbms_output.put_line(sqlerrm(l_var::int));

end;
```

```output title="Output"
division_by_zero
normal, successful completion
message 12 not found
message 1403 not found
```

```sql
DECLARE
Balance integer := 24;
BEGIN
IF (Balance <= 100) THEN
Raise_Application_Error (-20343, 'The balance is too low.');
END IF;
exception
    when others then
        dbms_output.put_line('sqlcode ==>'|| sqlcode);
        dbms_output.put_line('sqlerrm ==>'|| sqlerrm);
        dbms_output.put_line('sqlerrm(sqlcode) ==>'|| sqlerrm(sqlcode));
END;
```

```output title="Output"
sqlcode ==>-20343
sqlerrm ==>EDB-20343: The balance is too low.
sqlerrm(sqlcode) ==>EDB-20343: The balance is too low.
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
