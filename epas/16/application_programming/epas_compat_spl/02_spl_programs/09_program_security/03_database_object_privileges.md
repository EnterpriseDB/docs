---
title: Database object privileges
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/03_database_object_privileges/
lastModified: 2024-11-22T12:16:04+01:00
---

# Database object privileges

<div id="database_object_privileges" class="registered_link"></div>

Once an SPL program begins execution, any attempt to access a database object from the program results in a check. This check ensures that the current user is authorized to perform the intended action against the referenced object. Privileges on database objects are added and removed using the `GRANT` and `REVOKE` commands. If the current user attempts unauthorized access on a database object, then the program throws an exception. See [Exception handling](https://www.enterprisedb.com/docs/epas/latest/reference/application_programmer_reference/stored_procedural_language_reference/05_control_structures/07_exception_handling/#exception_handling).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
