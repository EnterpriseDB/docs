---
title: EDB PgBouncer 1.16.1.0 release notes
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/pgbouncer_rel_notes/09_11610_rel_notes/
lastModified: 2024-07-18T16:07:12+02:00
---

# EDB PgBouncer 1.16.1.0 release notes

Released: 11 Dec 2021

EDB PgBouncer 1.16.1.0 includes the following upstream merge and security fix:

| Type           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community PgBouncer 1.16.1.0. See the community [Release Notes](https://www.pgbouncer.org/changelog.html#pgbouncer-116x) for details.                                                                                                                                                                                                                                                                                                                                                                                            |
| Security fix   | Make PgBouncer acting as a server reject extraneous data after an SSL or GSS encryption handshake.<br /><br />A man-in-the-middle with the ability to inject data into the TCP connection could stuff some cleartext data into the start of a supposedly encryption-protected database session. This could be abused to send faked SQL commands to the server, although that would only work if PgBouncer did not demand any authentication data. However, a PgBouncer setup relying on SSL certificate authentication might well not do so. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
