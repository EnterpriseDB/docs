---
title: FORMSUBMIT
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formsubmit/
lastModified: 2023-11-09T17:35:38+05:30
---

# FORMSUBMIT

This function and procedure generates the `<INPUT>` tag with `TYPE="submit"`. This tag creates a button that submits the form.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMSUBMIT (
   cname          IN       VARCHAR2   DEFAULT NULL
   cvalue         IN       VARCHAR2   DEFAULT 'Submit'
   cattributes    IN       VARCHAR2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMSUBMIT (cname, cvalue, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                      |
| ----------- | -------------------------------------------- |
| cname       | The value for the NAME attribute             |
| cvalue      | The value for the VALUE attribute            |
| cattributes | Other attributes to include as is in the tag |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
