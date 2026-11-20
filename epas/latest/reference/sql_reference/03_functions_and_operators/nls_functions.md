---
title: NLS functions
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/
lastModified: 2025-11-25T20:39:04+05:30
---

# NLS functions

EDB Postgres Advanced Server version 17 and later provides the support for NLS functions. These functions uses the NLS config file to map the NLS parameters with an equivalent PostgreSQL Collation.

## NLS config file

The `edb_redwood_nls.config` file maintains the list of NLS parameters mapping with an equivalent collation. The NLS parameters and an equivalent collation are listed in each row in the config file separated by commas respectively. The config file contains a default list of NLS parameters and an equivalent collation pairs. The NLS config file is located at `EPAS_INSTALLATION_DIRECTORY/share/postgresql/contrib/`.

<details>

<summary>

The default NLS config file contents:
ARABIC,"pg\_catalog"."default"

</summary>

<br />

ARABIC\_MATCH,"pg\_catalog"."default"

<br />

ARABIC\_ABJ\_SORT,"pg\_catalog"."default"

<br />

ARABIC\_ABJ\_MATCH,"pg\_catalog"."default"

<br />

ASCII7,"pg\_catalog"."default"

<br />

AZERBAIJANI,"pg\_catalog"."default"

<br />

XAZERBAIJANI,"pg\_catalog"."default"

<br />

BENGALI,"pg\_catalog"."default"

<br />

BIG5,"pg\_catalog"."default"

<br />

BINARY,"pg\_catalog"."default"

<br />

BULGARIAN,"pg\_catalog"."default"

<br />

CATALAN,"pg\_catalog"."default"

<br />

XCATALAN,"pg\_catalog"."default"

<br />

CROATIAN,"pg\_catalog"."default"

<br />

XCROATIAN,"pg\_catalog"."default"

<br />

CZECH,"pg\_catalog"."default"

<br />

XCZECH,"pg\_catalog"."default"

<br />

CZECH\_PUNCTUATION,"pg\_catalog"."default"

<br />

XCZECH\_PUNCTUATION,"pg\_catalog"."default"

<br />

DANISH,"pg\_catalog"."default"

<br />

XDANISH,"pg\_catalog"."default"

<br />

DUTCH,"pg\_catalog"."default"

<br />

XDUTCH,"pg\_catalog"."default"

<br />

EBCDIC,"pg\_catalog"."default"

<br />

EEC\_EURO,"pg\_catalog"."default"

<br />

EEC\_EUROPA3,"pg\_catalog"."default"

<br />

ESTONIAN,"pg\_catalog"."default"

<br />

FINNISH,"pg\_catalog"."default"

<br />

FRENCH,"pg\_catalog"."default"

<br />

XFRENCH,"pg\_catalog"."default"

<br />

GERMAN,"pg\_catalog"."default"

<br />

XGERMAN,"pg\_catalog"."default"

<br />

GERMAN\_DIN,"pg\_catalog"."default"

<br />

XGERMAN\_DIN,"pg\_catalog"."default"

<br />

GBK,"pg\_catalog"."default"

<br />

GREEK,"pg\_catalog"."default"

<br />

HEBREW,"pg\_catalog"."default"

<br />

HKSCS,"pg\_catalog"."default"

<br />

HUNGARIAN,"pg\_catalog"."default"

<br />

XHUNGARIAN,"pg\_catalog"."default"

<br />

ICELANDIC,"pg\_catalog"."default"

<br />

INDONESIAN,"pg\_catalog"."default"

<br />

ITALIAN,"pg\_catalog"."default"

<br />

LATIN,"pg\_catalog"."default"

<br />

LATVIAN,"pg\_catalog"."default"

<br />

LITHUANIAN,"pg\_catalog"."default"

<br />

MALAY,"pg\_catalog"."default"

<br />

NORWEGIAN,"pg\_catalog"."default"

<br />

POLISH,"pg\_catalog"."default"

<br />

PUNCTUATION,"pg\_catalog"."default"

<br />

XPUNCTUATION,"pg\_catalog"."default"

<br />

ROMANIAN,"pg\_catalog"."default"

<br />

RUSSIAN,"pg\_catalog"."default"

<br />

SLOVAK,"pg\_catalog"."default"

<br />

XSLOVAK,"pg\_catalog"."default"

<br />

SLOVENIAN,"pg\_catalog"."default"

<br />

XSLOVENIAN,"pg\_catalog"."default"

<br />

SPANISH,"pg\_catalog"."default"

<br />

XSPANISH,"pg\_catalog"."default"

<br />

SWEDISH,"pg\_catalog"."default"

<br />

SWISS,"pg\_catalog"."default"

<br />

XSWISS,"pg\_catalog"."default"

<br />

TURKISH,"pg\_catalog"."default"

<br />

XTURKISH,"pg\_catalog"."default"

<br />

UKRAINIAN,"pg\_catalog"."default"

<br />

UNICODE\_BINARY,"pg\_catalog"."default"

<br />

VIETNAMESE,"pg\_catalog"."default"

<br />

WEST\_EUROPEAN,"pg\_catalog"."default"

<br />

XWEST\_EUROPEAN,"pg\_catalog"."default"

<br />

CANADIAN\_M,"pg\_catalog"."default"

<br />

DANISH\_M,"pg\_catalog"."default"

<br />

FRENCH\_M,"pg\_catalog"."default"

<br />

GENERIC\_M,"pg\_catalog"."default"

<br />

JAPANESE\_M,"pg\_catalog"."default"

<br />

KOREAN\_M,"pg\_catalog"."default"

<br />

SPANISH\_M,"pg\_catalog"."default"

<br />

THAI\_M,"pg\_catalog"."default"

<br />

SCHINESE\_RADICAL\_M,"pg\_catalog"."default"

<br />

SCHINESE\_STROKE\_M,"pg\_catalog"."default"

<br />

SCHINESE\_PINYIN\_M,"pg\_catalog"."default"

<br />

TCHINESE\_RADICAL\_M,"pg\_catalog"."default"

<br />

TCHINESE\_STROKE\_M,"pg\_catalog"."default"

<br />

</details>

<br/>

The config file can contain multiple mappings for a single NLS parameter. You can add a new mapping for an existing NLS parameter. The latest added mapping will be used for the NLS function operations.

Before using NLS functions for a NLS parameter, add a new mapping in the NLS config file,

- manually by editing the config file in the format  `NLS_parameter,<schema_name>.<collation>`.
- or by using the `edb_nls_cf_insert` function. When using `edb_nls_cf_insert` function it's crucial to ensure that the file has the correct write permissions. Without the appropriate permissions, attempts to modify the file will fail, potentially leading to errors or incomplete configurations.

where `<schema_name>.<collation>` is to be obtained from `pg_collation` catalog and mapped to a valid NLS parameter. Only the collations with an encoding of `-1` (which represents "any encoding") or the database encoding are allowed.

If you're encountering NOTICE messages due to invalid entries in the NLS config file, the best approach is to manually remove those invalid entries. These messages typically occur when the database is trying to reference collations that doesn't exist or are incorrectly specified in the configuration file.

<details>

<summary>

NOTICE messages examples

</summary>

Example 1 -
NOTICE:  invalid nls entry (XGERMAN.xyz-pqr) in nls config file at line number 83, skipping

Example 2 -
NOTICE:  pg collation not found for entry (XGERMAN,abc) in nls config file at line number 84, skipping

</details>

<br/>

It's important to recognize that collation values are platform-dependent, meaning a collation available on one platform might not be present on another. To avoid compatibility issues, always use collations that are available in the `pg_collation` table within your environment.

Postgres collation are not case or accent insensitive by default. So, collations that we get from `pg_collation` table are all case/accent sensitive. You can manually create case/accent insensitive collations. For more information, see [what is collation?](https://www.postgresql.org/docs/current/collation.html) and [how to create collation?](https://www.postgresql.org/docs/current/sql-createcollation.html).

Each client session reads the config file and stores the NLS parameters and collation values in in-memory HASH data structure when any of the NLS function is called for the first time. The parsing logic will read each row sequentially, segregate NLS parameters and collation values, and then store them in the right data structure.

Making changes to the config file manually requires you to reload the NLS config files in all sessions or restart the session to work with the updated mappings. Using the `edb_nls_cf_insert` function to modify the config file in a session will update the in-memory HASH data structure with new mappings. Changes made in a session will only affect other sessions after the config file is reloaded or after the other sessions are restarted.

The available functions for managing the NLS config file are listed in the following table:

| Function                                                  | Return type | Description                                                                                                         |
| --------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `edb_nls_cf_insert(nls TEXT, collation TEXT)`             | VOID        | Adds a new mapping in the NLS config file with the given NLS parameter and a mapping collation.                     |
| `edb_nls_cf_reload()`                                     | VOID        | Reloads the NLS config file and updates the NLS parameter and a mapping collation in in-memory HASH data structure. |
| `edb_nls_cf_hash_dump(OUT nls TEXT, OUT collationid INT)` | RECORD      | Dumps the NLS parameter and a mapping collation HASH contents on the client session.                                |
| `edb_nls_cf_dump(OUT nls TEXT, OUT collation TEXT)`       | RECORD      | Dumps the existing NLS config file contents on the client session.                                                  |

**Supported NLS functions**

- [NLS\_UPPER](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_upper/)

- [NLS\_LOWER](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_lower/)

- [NLS\_INITCAP](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_initcap/)

- [NLSSORT](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nlssort/)

## Examples

This example shows how to add a new mapping in the NLS config file:

```
SELECT edb_nls_cf_insert('xgerman', '"pg_catalog"."de-x-icu"');
```

```output title="Output"
 edb_nls_cf_insert 
-------------------
 
(1 row)
```

This example shows how to reload the NLS config file:

```
SELECT edb_nls_cf_reload();
```

```output title="Output"
 edb_nls_cf_reload 
-------------------
 
(1 row)
```

- [NLS\_UPPER function](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_upper/): NLS\_UPPER returns  TEXT, with all letters in uppercase.
- [NLS\_LOWER function](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_lower/): NLS\_LOWER returns  TEXT, with all letters in lowercase.
- [NLS\_INITCAP function](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nls_initcap/): NLS\_INITCAP returns  TEXT, with first letter of each word in uppercase and rest of the letters to lowercase.
- [NLSSORT function](https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/03_functions_and_operators/nls_functions/nlssort/): NLSSORT function is used to sort character or a string according to the specified collation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
