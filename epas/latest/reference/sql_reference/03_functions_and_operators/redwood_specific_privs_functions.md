---
title: Functions to check redwood specific privileges
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/redwood_specific_privs_functions/
lastModified: 2025-11-25T20:39:04+05:30
---

# Functions to check redwood specific privileges

Here are the functions to check whether a role has redwood specific privileges:

### has\_createdblink\_privilege(name)

This function checks if the provided user has the necessary privilege to create a private database link. It takes the intended name of the database link as an argument.

- Provide the name of the user (as a string).
- Function returns `true` if the provided user has `CREATE DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_createdblink\_privilege(oid)

This function checks if the provided user has the necessary privilege to create a private database link. It takes the intended Object Identifier (OID) of the database link as an argument.

- Provide the OID of the user.
- Function returns `true` if the provided user has `CREATE DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_createpublicdblink\_privilege(name)

This function checks if the provided user has the privilege to create a **public** database link, which is a link accessible to all users. It takes the intended name of the database link as an argument.

- Provide the name of the user (as a string).
- Function returns `true` if the provided user has `CREATE PUBLIC DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_createpublicdblink\_privilege(oid)

This function checks if the provided user has the privilege to create a **public** database link. It takes the intended Object Identifier (OID) of the database link as an argument.

- Provide the OID of the user.
- Function returns `true` if the provided user has `CREATE PUBLIC DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_alterdblink\_privilege(name)

This function checks if the provided user has the `ALTER DATABASE LINK` privilege on a private database link, identified by its name.

- Provide the name of the user (as a string).
- Function returns `true` if the provided user can alter the specified private database link; otherwise, it returns `false`.

### has\_alterdblink\_privilege(oid)

This function checks if the provided user has the `ALTER DATABASE LINK` privilege on a private database link, identified by its Object Identifier (OID).

- Provide OID of the user.
- Function returns `true` if the provided user can alter the specified private database link; otherwise, it returns `false`.

### has\_alterpublicdblink\_privilege(name)

This function checks if the provided user has the `ALTER PUBLIC DATABASE LINK` privilege on a public database link, identified by its name.

- Provide the name of the user (as a string).
- Function returns `true` if the provided user can alter the specified public database link; otherwise, it returns `false`.

### has\_alterpublicdblink\_privilege(oid)

This function checks if the provided user has the `ALTER PUBLIC DATABASE LINK` privilege on a public database link, identified by its Object Identifier (OID).

- Provide the OID of the user.
- Function returns `true` if the provided user can alter the specified public database link; otherwise, it returns `false`.

### has\_alterpublicdblink\_privilege(oid)

This function checks if the provided user has the `ALTER PUBLIC DATABASE LINK` privilege on a public database link, identified by its Object Identifier (OID).

- Provide the OID of the user.
- Function returns `true` if the provided user can alter the specified public database link; otherwise, it returns `false`.

### has\_alterpublicdblink\_privilege(oid)

This function checks if the provided user has the `ALTER PUBLIC DATABASE LINK` privilege on a public database link, identified by its Object Identifier (OID).

- Provide the OID of the user.
- Function returns `true` if the provided user can alter the specified public database link; otherwise, it returns `false`.

### has\_droppublicdblink\_privilege(name)

This function checks if the provided user has the necessary privilege to drop a **public** database link. It takes the name of the link as an argument.

- Provide the name of the user (as a string).
- Function returns `true` if the provided user has `DROP PUBLIC DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_droppublicdblink\_privilege(oid)

This function checks if the provided user has the necessary privilege to drop a **public** database link. It takes the Object Identifier (OID) of the link as an argument.

- Provide the OID of the user.
- Function returns `true` if the provided user has `DROP PUBLIC DATABASE LINK` privilege; otherwise, it returns `false`.

### has\_exemptaccesspolicy\_privilege(name)

This function checks if the provided user has the `EXEMPT ACCESS POLICY` privilege for a specific role. This privilege allows the user to bypass Row-Level Security (RLS) policies.

- Provide the name of the role (as a string).
- Function returns `true` if the provided user has the `EXEMPT ACCESS POLICY` privilege for the specified role; otherwise, it returns `false`.

### has\_exemptaccesspolicy\_privilege(oid)

This function checks if the provided user has the `EXEMPT ACCESS POLICY` privilege for a specific role. This privilege allows the user to bypass Row-Level Security (RLS) policies. It takes the Object Identifier (OID) of the role as an argument.

- Provide the OID of the role.
- Function returns `true` if the provided user has the `EXEMPT ACCESS POLICY` privilege for the specified role; otherwise, it returns `false`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
