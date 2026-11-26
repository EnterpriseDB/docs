---
title: Methods
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/application_programming/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/02_methods/
lastModified: 2025-11-25T20:39:04+05:30
---

# Methods

<div id="methods" class="registered_link"></div>

Methods are SPL procedures or functions defined in an object type. Methods are categorized into three general types:

- **Member methods** — Procedures or functions that operate in the context of an object instance. Member methods have access to and can change the attributes of the object instance on which they're operating.
- **Static methods** — Procedures or functions that operate independently of any particular object instance. Static methods don't have access to and can't change the attributes of an object instance.
- **Constructor methods** — Functions used to create an instance of an object type. A default constructor method is always provided when an object type is defined.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
