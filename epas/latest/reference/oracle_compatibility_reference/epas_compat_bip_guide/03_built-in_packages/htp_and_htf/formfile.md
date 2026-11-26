---
title: FORMFILE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/htp_and_htf/formfile/
lastModified: 2025-11-25T20:39:04+05:30
---

# FORMFILE

This function and procedure generates the `<INPUT>` tag with `TYPE="file"`. This tag allows the user to select files whose contents can be submitted with a form.

## Syntax

The following is the syntax for HTP:

```
HTP.FORMFILE(
   cname          IN       varchar2
   caccept        IN       varchar2   DEFAULT NULL
   cattributes    IN       varchar2   DEFAULT NULL);
```

The following is the syntax for HTF:

```
HTF.FORMFILE (cname, caccept, cattributes) RETURN VARCHAR2;
```

## Parameters

| Parameter   | Purpose                                         |
| ----------- | ----------------------------------------------- |
| cname       | The value for the NAME attribute                |
| caccept     | A comma-seperated list of MIME types for upload |
| cattributes | Other attributes to include as is in the tag    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
