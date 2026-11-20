---
title: Specifying Migration Toolkit command options using a file
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/
lastModified: 2024-09-04T16:04:40+02:00
---

# Specifying Migration Toolkit command options using a file

EDB supports using a text file to specify several [database migration options](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/08_mtk_command_options/) instead of manually entering them at the command line. This is particularly helpful when:

- You have to specify a large number of command line options or a large number of values for complex migration scenarios. Entering all options or values at the command line becomes cumbersome, or you might reach command line length limits.

- You want to apply the same migration options and values to several different databases, or you might want to automate database migration. Running `runMTK.sh` with several options and values repeatedly at the command line becomes prone to errors.

The `-optionsFile <options_textfile>` argument allows you to reference a text file with options and values, making the migration process easier.

## Execute a migration using an options file

To perform a migration with a file that specifies the command options:

1. [Create a text file with the command options](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/creating_txt_file/).

2. [Perform a migration by invoking the file with the command options](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/executing_migration_with_txt/).

- [Creating the options file](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/creating_txt_file/): To specify a text file that contains command line options and values, create an \` file with the options you want to execute. Then run the runMTK.sh command with the -optionsFile \` argument.
- [Executing a migration with the options file](https://www.enterprisedb.com/docs/migration_toolkit/latest/07_invoking_mtk/mtk_command_options_in_file/executing_migration_with_txt/): After you create the options file, reference it when executing the migration command:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
