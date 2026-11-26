---
title: Pseudo-Types
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/data_types/datatype-pseudo/
lastModified: 2026-08-11T09:07:15Z
---

# Pseudo-Types

<a id="topic_vmf_z4c_qfb"></a>

WarehousePG supports special-purpose data type entries that are collectively called _pseudo-types_. A pseudo-type cannot be used as a column data type, but it can be used to declare a function's argument or result type. Each of the available pseudo-types is useful in situations where a function's behavior does not correspond to simply taking or returning a value of a specific SQL data type.

Functions coded in procedural languages can use pseudo-types only as allowed by their implementation languages. The procedural languages all forbid use of a pseudo-type as an argument type, and allow only _void_ and _record_ as a result type.

A function with the pseudo-type _record_ as a return data type returns an unspecified row type. The _record_ represents an array of possibly-anonymous composite types. Since composite datums carry their own type identification, no extra knowledge is needed at the array level.

The pseudo-type _void_ indicates that a function returns no value.

> **Note** WarehousePG does not support triggers and the pseudo-type _trigger_.

The types _anyelement_, _anyarray_, _anynonarray_, and _anyenum_ are pseudo-types called polymorphic types. Some procedural languages also support polymorphic functions using the types _anyarray_, _anyelement_, _anyenum_, and _anynonarray_.

The pseudo-type _anytable_ is a WarehousePG type that specifies a table expression—an expression that computes a table. WarehousePG allows this type only as an argument to a user-defined function. See [Table Value Expressions](#topic_ig2_1pc_qfb) for more about the _anytable_ pseudo-type.

For more information about pseudo-types, see the PostgreSQL documentation about [Pseudo-Types](https://www.postgresql.org/docs/9.4/datatype-pseudo.html).

**Parent topic:** [Data Types](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/data_types/)

<a id="topic_dbn_bpc_qfb">

</a>

## Polymorphic Types

Four pseudo-types of special interest are _anyelement_, _anyarray_, _anynonarray_, and _anyenum_, which are collectively called _polymorphic_ types. Any function declared using these types is said to be a polymorphic function. A polymorphic function can operate on many different data types, with the specific data types being determined by the data types actually passed to it at runtime.

Polymorphic arguments and results are tied to each other and are resolved to a specific data type when a query calling a polymorphic function is parsed. Each position (either argument or return value) declared as _anyelement_ is allowed to have any specific actual data type, but in any given call they must all be the same actual type. Each position declared as _anyarray_ can have any array data type, but similarly they must all be the same type. If there are positions declared _anyarray_ and others declared _anyelement_, the actual array type in the _anyarray_ positions must be an array whose elements are the same type appearing in the _anyelement_ positions. _anynonarray_ is treated exactly the same as _anyelement_, but adds the additional constraint that the actual type must not be an array type. _anyenum_ is treated exactly the same as _anyelement_, but adds the additional constraint that the actual type must be an `enum` type.

When more than one argument position is declared with a polymorphic type, the net effect is that only certain combinations of actual argument types are allowed. For example, a function declared as `equal(*anyelement*, *anyelement*)` takes any two input values, so long as they are of the same data type.

When the return value of a function is declared as a polymorphic type, there must be at least one argument position that is also polymorphic, and the actual data type supplied as the argument determines the actual result type for that call. For example, if there were not already an array subscripting mechanism, one could define a function that implements subscripting as `subscript(*anyarray*, integer) returns *anyelement*`. This declaration constrains the actual first argument to be an array type, and allows the parser to infer the correct result type from the actual first argument's type. Another example is that a function declared as `myfunc(*anyarray*) returns *anyenum*` will only accept arrays of `enum` types.

Note that _anynonarray_ and _anyenum_ do not represent separate type variables; they are the same type as _anyelement_, just with an additional constraint. For example, declaring a function as `myfunc(*anyelement*, *anyenum*)` is equivalent to declaring it as `myfunc(*anyenum*, *anyenum*)`: both actual arguments must be the same `enum` type.

A variadic function (one taking a variable number of arguments) is polymorphic when its last parameter is declared as `VARIADIC *anyarray*`. For purposes of argument matching and determining the actual result type, such a function behaves the same as if you had declared the appropriate number of _anynonarray_ parameters.

For more information about polymorphic types, see the PostgreSQL documentation about [Polymorphic Arguments and Return Types](https://www.postgresql.org/docs/9.4/xfunc-c.html#AEN56822).

<a id="topic_ig2_1pc_qfb">

</a>

## Table Value Expressions

The _anytable_ pseudo-type declares a function argument that is a table value expression. The notation for a table value expression is a `SELECT` statement enclosed in a `TABLE()` function. You can specify a distribution policy for the table by adding `SCATTER RANDOMLY`, or a `SCATTER BY` clause with a column list to specify the distribution key.

The `SELECT` statement is run when the function is called and the result rows are distributed to segments so that each segment runs the function with a subset of the result table.

For example, this table expression selects three columns from a table named `customer` and sets the distribution key to the first column:

```
TABLE(SELECT cust_key, name, address FROM customer SCATTER BY 1)
```

The `SELECT` statement may include joins on multiple base tables, `WHERE` clauses, aggregates, and any other valid query syntax.

The _anytable_ type is only permitted in functions implemented in the C or C++ languages. The body of the function can access the table using the WarehousePG Server Programming Interface (SPI) or the WarehousePG Partner Connector (GPPC) API.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
