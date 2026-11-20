---
title: Returning the Lasso report
product: Lasso
version: "4"
url: https://www.enterprisedb.com/docs/lasso/latest/return/
lastModified: 2024-01-11T19:52:27Z
---

# Returning the Lasso report

The script produces a TAR file containing the gathered data
in the directory where you executed Lasso. This file is the
Lasso report.

You can also use Lasso on a server that has no
Postgres installation. In that case, use the
`--system-only` option to produce a TAR file that contains only
system-related information.

Unless you're running Lasso on an isolated network system, without
external access to EDB's infrastructure, you can upload the
produced tarball directly through Lasso using the `--upload` option. For
more information, see [Servers accepting upload of reports](https://www.enterprisedb.com/docs/lasso/latest/appendix-a/).

Alternatively, you can attach the report to a specific support ticket
through the Portal. Or, use the **Support operations > Upload report** menu
from your company's page.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
