---
title: Executing a migration with a command options file
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/executing_migration_with_txt/
lastModified: 2024-09-26T09:11:13+02:00
---

# Executing a migration with a command options file

After you create the options file, reference it when executing the migration command:

```shell
./runMTK.sh -optionsFile <options_textfile> <schema_scope>
```

> **Note**
>
> Provide the full path for `<options_textfile>` if you're running the Migration Toolkit command from a different folder from where you stored the file.

You can specify all options in the file or use a mix of the command line and the options file to specify the migration parameters.

## Provide the scope for the schema migration

Specify the scope of the schemas to migrate:

- If you want to migrate all schemas, add the `-allSchemas` option at the command line or add `allSchemas` in your options file. For both methods, this option must be the last parameter.

- If you want to specify a subset of schemas, specify the schemas you want to migrate at the command line with no preceding option and as a comma-separated list. Schema specifications must be the last parameter at the command line.

See [Migrating schemas](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/#migrating-schemas) for more information on `<schema_scope>`.

Here are some examples for specifying all options in the file.

## Migrate a schema with specific tables

Content of the `options_textfile` text file:

```
tables comp_schema.emp,comp_schema.dept,finance_schema.acctg
```

Syntax of the migration command:

```shell
./runMTK.sh -optionsFile options_textfile schema1
```

Command line equivalent:

```shell
./runMTK.sh -tables comp_schema.emp,comp_schema.dept,finance_schema.acctg comp_schema,finance_schema
```

## Use options file to exclude tables and include functions

You can use the options file to separate table names from configuration options.
You can also use comments to clarify why parameters are used.

This example excludes tables and includes functions.
It shows some comments to explain why tables are excluded.

Content of the `excludeInclude.options` text file:

```
# finances
excludeTables comp_schema.emp,finance_schema.jobhist

# temporary, #MIGRATION-123, ask Ben
excludeTables temp_schema.temp_table

excludeTables more_schema.more_tables

funcs finance_schema.add_two_numbers
```

Syntax of the migration command:

```shell
./runMTK.sh -allTables -optionsFile excludeInclude.options -safeMode -connRetryCount 7  schema1
```

Command line equivalent:

```shell
./runMTK.sh  -allTables -excludeTables comp_schema.emp,finance_schema.jobhist,temp_schema.temp_table,more_schema.more_tables -funcs finance_schema.add_two_numbers -safeMode -connRetryCount 7  schema1
```

## Offline migration

Run an offline migration with all schemas.

Content of the `options_textfile` text file:

```
offlineMigration file_dest
allTables
schemaOnly
```

Syntax of the migration command:

```shell
./runMTK.sh -optionsFile options_textfile -allSchemas
```

Command line equivalent:

```shell
./runMTK.sh -offlineMigration file_dest -allTables -schemaOnly -allSchemas
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
