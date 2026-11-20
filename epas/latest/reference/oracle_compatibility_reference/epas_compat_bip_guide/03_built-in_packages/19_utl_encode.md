---
title: UTL_ENCODE
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/
lastModified: 2025-11-25T20:39:04+05:30
---

# UTL\_ENCODE

The `UTL_ENCODE` package provides a way to encode and decode data. EDB Postgres Advanced Server supports the following functions and procedures:

| Function/procedure                                 | Return type | Description                                                                                                          |
| -------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `BASE64_DECODE(r)`                                 | `RAW`       | Use the `BASE64_DECODE` function to translate a Base64 encoded string to the original `RAW` value.                   |
| `BASE64_ENCODE(r)`                                 | `RAW`       | Use the `BASE64_ENCODE` function to translate a `RAW` string to an encoded Base64 value.                             |
| `BASE64_ENCODE(loid)`                              | `TEXT`      | Use the `BASE64_ENCODE` function to translate a `TEXT` string to an encoded Base64 value.                            |
| `MIMEHEADER_DECODE(buf)`                           | `VARCHAR2`  | Use the `MIMEHEADER_DECODE` function to translate an encoded `MIMEHEADER` formatted string to its original value.    |
| `MIMEHEADER_ENCODE(buf, encode_charset, encoding)` | `VARCHAR2`  | Use the `MIMEHEADER_ENCODE` function to convert and encode a string in `MIMEHEADER` format.                          |
| `QUOTED_PRINTABLE_DECODE(r)`                       | `RAW`       | Use the `QUOTED_PRINTABLE_DECODE` function to translate an encoded string to a `RAW` value.                          |
| `QUOTED_PRINTABLE_ENCODE(r)`                       | `RAW`       | Use the `QUOTED_PRINTABLE_ENCODE` function to translate an input string to a quoted-printable formatted `RAW` value. |
| `TEXT_DECODE(buf, encode_charset, encoding)`       | `VARCHAR2`  | Use the `TEXT_DECODE` function to decode a string encoded by `TEXT_ENCODE`.                                          |
| `TEXT_ENCODE(buf, encode_charset, encoding)`       | `VARCHAR2`  | Use the `TEXT_ENCODE` function to translate a string to a user-specified character set, and then encode the string.  |
| `UUDECODE(r)`                                      | `RAW`       | Use the `UUDECODE` function to translate a uuencode encoded string to a `RAW` value.                                 |
| `UUENCODE(r, type, filename, permission)`          | `RAW`       | Use the `UUENCODE` function to translate a `RAW` string to an encoded uuencode value.                                |

- [BASE64\_DECODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/01_base64_decode/): Use the BASE64DECODE function to translate a Base64 encoded string to the original value originally encoded by BASE64ENCODE. The signature is:
- [BASE64\_ENCODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/02_base64_encode/): Use the BASE64ENCODE function to translate and encode a string in Base64 format, as described in RFC 4648. This function can be useful when composing MIME email that you intend to send using the UTLSMTP package. The BASE64\_ENCODE function has two signatures:
- [MIMEHEADER\_DECODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/03_mimeheader_decode/): Use the MIMEHEADERDECODE function to decode values that are encoded by the MIMEHEADERENCODE function. The signature is:
- [MIMEHEADER\_ENCODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/04_mimeheader_encode/): Use the MIMEHEADER\_ENCODE function to convert a string into mime header format and then encode the string. The signature is:
- [QUOTED\_PRINTABLE\_DECODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/05_quoted_printable_decode/): Use the QUOTEDPRINTABLEDECODE function to translate an encoded quoted-printable string into a decoded RAW string.
- [QUOTED\_PRINTABLE\_ENCODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/06_quoted_printable_encode/): Use the QUOTEDPRINTABLEENCODE function to translate and encode a string in quoted-printable format. The signature is:
- [TEXT\_DECODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/07_text_decode/): Use the TEXTDECODE function to translate and decode an encoded string to the VARCHAR2 value that was originally encoded by the TEXTENCODE function. The signature is:
- [TEXT\_ENCODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/08_text_encode/): Use the TEXT\_ENCODE function to translate a string to a user-specified character set and then encode the string. The signature is:
- [UUDECODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/09_uudecode/): Use the UUDECODE function to translate and decode a uuencode encoded string to the RAW value that was originally encoded by the UUENCODE function. The signature is:
- [UUENCODE](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/19_utl_encode/10_uuencode/): Use the UUENCODE function to translate RAW data into a uuencode formatted encoded string. The signature is:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
