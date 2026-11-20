---
title: Program security
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/
lastModified: 2024-11-22T12:16:04+01:00
---

# Program security

<div id="program_security" class="registered_link"></div>

You can control the security over whether a user can execute an SPL program. You can also control the database objects an SPL program can access for any given user executing the program. These are controlled by the following:

- Privilege to execute a program
- Privileges granted on the database objects (including other SPL programs) that a program attempts to access
- Whether the program is defined with definer’s rights or invoker’s rights

* [EXECUTE privilege](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/01_execute_privilege/): An SPL program (function, procedure, or package) can begin execution only if any of the following are true:
* [Database object name resolution](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/02_database_object_name_resolution/): You can reference a database object inside an SPL program either by its qualified name or by an unqualified name. A qualified name is in the form of schema.name, where schema is the name of the schema under which the database object with identifier name exists. An unqualified name doesn't have the schema. portion. When a reference is made to a qualified name, there is no ambiguity as to which database object is intended. It either does or doesn't exist in the specified schema.
* [Database object privileges](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/03_database_object_privileges/): Once an SPL program begins execution, any attempt to access a database object from the program results in a check. This check ensures that the current user is authorized to perform the intended action against the referenced object. Privileges on database objects are added and removed using the GRANT and REVOKE commands. If the current user attempts unauthorized access on a database object, then the program throws an exception. See Exception handling.
* [About definer and invoker rights](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/04_definers_vs_invokers_rights/): When an SPL program is about to begin executing, a determination is made as to the user to  associate with this process. This user is referred to as the current user. The current user’s database object privileges are used to determine whether access to database objects referenced in the program is permitted. The current prevailing search path in effect when the program is invoked is used to resolve any unqualified object references.
* [Security example](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/02_spl_programs/09_program_security/05_security_example/): In this example, a new database is created along with two users:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
