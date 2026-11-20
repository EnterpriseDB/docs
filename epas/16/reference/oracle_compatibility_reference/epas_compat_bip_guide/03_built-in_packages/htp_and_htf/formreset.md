---
title: FORMRESET
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formreset/
lastModified: 2024-11-22T12:16:04+01:00
---

# FORMRESET

This function and procedure generates the `<INPUT>` tag with `TYPE="reset"`. This tag creates a button that resets the form fields to their initial values.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMRESET (
   cvalue         IN       VARCHAR2   DEFAULT 'Reset'
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMRESET (cvalue, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cvalue      | The value for the VALUE attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
