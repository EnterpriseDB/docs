---
title: DBMS_CRYPTO
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/
lastModified: 2023-11-09T17:35:38+05:30
---

# DBMS\_CRYPTO

The `DBMS_CRYPTO` package provides functions and procedures that allow you to encrypt or decrypt `RAW, BLOB`, or `CLOB` data. You can also use `DBMS_CRYPTO` functions to generate cryptographically strong random values.

The table lists the `DBMS_CRYPTO` functions and procedures.

| Function/procedure                      | Return type | Description                                                                                         |
| --------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| `DECRYPT(src, typ, key, iv)`            | `RAW`       | Decrypts `RAW` data.                                                                                |
| `DECRYPT(dst INOUT, src, typ, key, iv)` | N/A         | Decrypts `BLOB` data.                                                                               |
| `DECRYPT(dst INOUT, src, typ, key, iv)` | N/A         | Decrypts `CLOB` data.                                                                               |
| `ENCRYPT(src, typ, key, iv)`            | `RAW`       | Encrypts `RAW` data.                                                                                |
| `ENCRYPT(dst INOUT, src, typ, key, iv)` | N/A         | Encrypts `BLOB` data.                                                                               |
| `ENCRYPT(dst INOUT, src, typ, key, iv)` | N/A         | Encrypts `CLOB` data.                                                                               |
| `HASH(src, typ)`                        | `RAW`       | Applies a hash algorithm to `RAW` data.                                                             |
| `MAC(src, typ, key)`                    | `RAW`       | Returns the hashed `MAC` value of the given `RAW` data using the specified hash algorithm and key.  |
| `MAC(src, typ, key)`                    | `RAW`       | Returns the hashed `MAC` value of the given `CLOB` data using the specified hash algorithm and key. |
| `RANDOMBYTES(number_bytes)`             | `RAW`       | Returns a specified number of cryptographically strong random bytes.                                |
| `RANDOMINTEGER()`                       | `INTEGER`   | Returns a random integer.                                                                           |
| `RANDOMNUMBER()`                        | `NUMBER`    | Returns a random number.                                                                            |

`DBMS_CRYPTO` functions and procedures support the following error messages:

`ORA-28239 - DBMS_CRYPTO.KeyNull`

`ORA-28829 - DBMS_CRYPTO.CipherSuiteNull`

`ORA-28827 - DBMS_CRYPTO.CipherSuiteInvalid`

Unlike Oracle, EDB Postgres Advanced Server doesn't return error `ORA-28233` if you reencrypt previously encrypted information.

`RAW` and `BLOB` are synonyms for the PostgreSQL `BYTEA` data type. `CLOB` is a synonym for `TEXT`.

- [DECRYPT](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/01_decrypt/): The DECRYPT function or procedure decrypts data using a user-specified cipher algorithm, key, and optional initialization vector. The signature of the DECRYPT function is:
- [ENCRYPT](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/02_encrypt/): The ENCRYPT function or procedure uses a user-specified algorithm, key, and optional initialization vector to encrypt RAW, BLOB, or CLOB data. The signature of the ENCRYPT function is:
- [HASH](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/03_hash/): The HASH function uses a user-specified algorithm to return the hash value of a RAW or CLOB value. The HASH function is available in three forms:
- [MAC](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/04_mac/): The MAC function uses a user-specified MAC function to return the hashed MAC value of a RAW or CLOB value. The MAC function is available in three forms:
- [RANDOMBYTES](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/05_randombytes/): The RANDOMBYTES function returns a RAW value of the specified length, containing cryptographically random bytes. The signature is:
- [RANDOMINTEGER](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/06_randominteger/): The RANDOMINTEGER() function returns a random integer between 0 and 268,435,455. The signature is:
- [RANDOMNUMBER](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/04_dbms_crypto/07_randomnumber/): The RANDOMNUMBER() function returns a random number between 0 and 268,435,455. The signature is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
