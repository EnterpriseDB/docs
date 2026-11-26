---
title: ISINDEX
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/isindex/
lastModified: 2024-11-22T12:16:04+01:00
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
