---
title: pgd completion
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/completion/
lastModified: 2025-08-22T01:38:47Z
---

# pgd completion

## Synopsis

The `pgd completion` commands are used to manage the completion settings for the EDB Postgres Distributed CLI.

## Syntax

```plaintext
pgd completion <SHELL>
```

Where `<SHELL>` is the shell for which to generate the autocompletion script.

Possible values for shell are `bash`, `fish`, `zsh` and `powershell`.

## Options

No command specific options. See [Global Options](https://www.enterprisedb.com/docs/pgd/6/reference/cli/command_ref/#global-options).

## Example

```shell
pgd completion zsh
```

This command would normally be evaluated as part of a shell session's startup files. It generates a completion script for the Zsh shell and writes it to the standard output. Therfore you would add to your `.zshrc` file:

```shell
eval "$(pgd completion zsh)"
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
