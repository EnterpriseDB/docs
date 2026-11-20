---
title: FORMTEXTAREAOPEN, FORMTEXTAREAOPEN2, and FORMTEXTAREACLOSE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formtextarea/
lastModified: 2025-11-25T20:57:39+05:30
---

# FORMTEXTAREAOPEN, FORMTEXTAREAOPEN2, and FORMTEXTAREACLOSE

These functions and procedures generate the `<TEXTAREA>` and `</TEXTAREA>` tags, which create a text area form element. The difference between the two open functions and procedures is that `htp.formTextareaOpen2` has the `cwrap` parameter, which specifies a wrap style.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMTEXTAREAOPEN (
   cname          IN       VARCHAR2
   nrows          IN       INTEGER
   ncolumns       IN       INTEGER
   calign         IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.FORMTEXTAREAOPEN2(
   cname          IN       VARCHAR2
   nrows          IN       INTEGER
   ncolumns       IN       INTEGER
   calign         IN       V2         DEFAULT NULL
   cwrap          IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

HTP.FORMTEXTAREACLOSE;
```

The following is the syntax for HTF:

```
HTF.FORMTEXTAREAOPEN (cname, nrows, ncolumns, calign, cattributes) RETURN VARCHAR2;

HTF.FORMTEXTAREAOPEN2(cname, nrows, ncolumns, calign, cwrap, cattributes) RETURN VARCHAR2;
HTF.FORMTEXTAREACLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| nrows       | The integer value for the ROWS attribute     |
| ncolumns    | The integer value for the COLS attribute     |
| calign      | The value for the ALIGN attribute            |
| cwrap       | The value for the WRAP attribute             |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
