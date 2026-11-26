---
title: Attributes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/01_attributes/
lastModified: 2023-11-09T17:35:38+05:30
---

# Attributes

<div id="attributes" class="registered_link"></div>

Every object type must contain at least one attribute. The data type of an attribute can be any of the following:

- A base data type such as `NUMBER` or `VARCHAR2`
- Another object type
- A globally defined collection type (created by the `CREATE TYPE` command) such as a nested table or varray

An attribute gets its initial value, which can be null, when an object instance is first created. Each object instance has its own set of attribute values.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
