---
title: Basic object concepts
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/
lastModified: 2023-02-14T16:10:29+05:30
---

# Basic object concepts

<div id="basic_object_concepts" class="registered_link"></div>

An object type is a description or definition of some entity. This definition of an object type is characterized by two components:

- Attributes — Fields that describe particular characteristics of an object instance. For a person object, examples are name, address, gender, date of birth, height, weight, eye color, and occupation.
- Methods — Programs that perform some type of function or operation on or are related to an object. For a person object, examples are calculating the person’s age, displaying the person’s attributes, and changing the values assigned to the person’s attributes.

* [Attributes](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/01_attributes/): Every object type must contain at least one attribute. The data type of an attribute can be any of the following:
* [Methods](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/02_methods/): Methods are SPL procedures or functions defined in an object type. Methods are categorized into three general types:
* [Overloading methods](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/15_object_types_and_objects/01_basic_object_concepts/03_overloading_methods/): In an object type you can define two or more identically named methods (that is, a procedure or function) of the same type but with different signatures. Such methods are referred to as overloaded methods.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
