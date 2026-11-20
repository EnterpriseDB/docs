---
title: FORMOPEN and FORMCLOSE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formopen_and_formclose/
lastModified: 2025-11-25T20:39:04+05:30
---

# FORMOPEN and FORMCLOSE

This function and procedure generates the `<FORM>` and `</FORM>` tags, which create a form section in an HTML document.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMOPEN (
   curl           IN       VARCHAR2
   cmethod        IN       VARCHAR2   DEFAULT 'POST'
   ctarget        IN       VARCHAR2   DEFAULT NULL
   cenctype       IN       VARCHAR2   DEFAULT NULL
   cattributes    IN       VARCHAR2   DEFAULT NULL);

htp.FORMCLOSE;
```

The following is the syntax for HTF:

```
HTF.FORMOPEN (curl, cmethod, ctarget, cenctype, cattributes) RETURN VARCHAR2;

HTF.FORMCLOSE RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                                                             |
| ----------- | ----------------------------------------------------------------------------------- |
| curl        | The URL of the WRB or CGI script where the contents of the form are sent (required) |
| cmethod     | The value for the METHOD attribute, either `'GET'` or `'POST'`                      |
| ctarget     | The value for the TARGET attribute                                                  |
| cenctype    | The value for the ENCTYPE attribute                                                 |
| cattributes | Other attributes to include as is in the tag                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
