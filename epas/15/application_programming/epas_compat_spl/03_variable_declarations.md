---
title: Using variable declarations
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/03_variable_declarations/
lastModified: 2023-11-09T17:35:38+05:30
---

# Using variable declarations

<div id="variable_declarations" class="registered_link"></div>

SPL is a block-structured language. The first section that can appear in a block is the declaration. The declaration contains the definition of variables, cursors, and other types that you can use in SPL statements contained in the block.

- [Declaring a variable](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/03_variable_declarations/01_declaring_a_variable/): Generally, you must declare all variables used in a block in the declaration section of the block. A variable declaration consists of a name that's assigned to the variable and its data type. Optionally, you can initialize the variable to a default value in the variable declaration.
- [Using %TYPE in variable declarations](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/03_variable_declarations/02_using__type_in_variable_declarations/): Often, variables are declared in SPL programs that are used to hold values from tables in the database. To ensure compatibility between the table columns and the SPL variables, make sure their data types are the same.
- [Using %ROWTYPE in record declarations](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/03_variable_declarations/03_using__row_type_in_record_declarations/): The %TYPE attribute provides an easy way to create a variable that depends on a column's data type. Using the %ROWTYPE attribute, you can define a record that contains fields that correspond to all columns of a given table. Each field takes on the data type of its corresponding column. The fields in the record don't inherit any of the columns' other attributes like those specified with the NOT NULL clause or the DEFAULT clause.
- [User-defined record types and record variables](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/03_variable_declarations/04_user_defined_record_types_and_record_variables/): You can declare records based on a table definition using the %ROWTYPE attribute, as shown in Using %ROWTYPE in record declarations. You can also define a new record structure that isn't tied to a particular table definition.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
