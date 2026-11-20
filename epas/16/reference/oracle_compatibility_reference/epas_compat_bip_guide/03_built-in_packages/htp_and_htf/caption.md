---
title: TABLECAPTION
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/caption/
lastModified: 2024-11-22T12:16:04+01:00
---

# TABLECAPTION

This procedure and function generates the `<CAPTION>` and `</CAPTION>` tags, which insert a caption in an HTML table.

## Syntax

The following is the syntax for HTP:

```
HTP.TABLECAPTION (
   ccaption       IN       VARCHAR2
   calign         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.TABLECAPTION (ccaption, calign, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| ccaption    | The text for the caption                     |
| calign      | The value for the ALIGN attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
