---
title: ISINDEX
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/isindex/
lastModified: 2023-11-09T17:35:38+05:30
---

# ISINDEX

This function and procedure creates a single entry field with a text prompt, such as `"Enter value"`,  and then sends that value to the URL of the page or program.

## Syntax

The following is the syntax for HTP:

```
HTP.ISINDEX (
   cprompt        IN       VARCHAR2    DEFAULT NULL
   curl           IN       VARCHAR2    DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.ISINDEX (cprompt, curl) RETURN VARCHAR2;
```

## Parameters

| Parameter | Purpose                            |
| --------- | ---------------------------------- |
| cprompt   | The value for the PROMPT attribute |
| curl      | The value for the HREF attribute   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
