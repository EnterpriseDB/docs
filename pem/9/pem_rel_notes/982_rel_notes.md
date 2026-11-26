---
title: Postgres Enterprise Manager 9.8.2 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/982_rel_notes/
lastModified: 2026-02-27T12:33:08+05:30
---

# Postgres Enterprise Manager 9.8.2 release notes

Released: 25th February 2026

This is a security patch with the following fixes. This patch is recommended for all PEM 9 users.

| Type    | Description                                                                                                                                                                                     |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change  | PEM now depends on the OS-provided libcurl package on RHEL 8 x86 (this was already the case for all other platforms). The deprecated `libcurl-pem` package can be safely removed after upgrade. |
| Bug fix | cryptography was updated to 46.0.5 (Fixes: CVE-2026-26007).                                                                                                                                     |
| Bug fix | urllib3 was updated to 2.6.3 (Fixes: CVE-2025-66418, CVE-2025-66471, CVE-2026-21441).                                                                                                           |
| Bug fix | Authlib was updated to 1.6.7 (Fixes: CVE-2025-68158).                                                                                                                                           |
| Bug fix | Pillow was updated to 12.1.1 (Fixes: CVE-2026-25990, for the platforms using Python 3.10+).                                                                                                     |
| Bug fix | Werkzeug was updated to 3.1.5 (Fixes: CVE-2025-66221, CVE-2026-21860).                                                                                                                          |
| Bug fix | PyNaCl was updated to 1.6.2 (Fixes: CVE-2026-26007).                                                                                                                                            |
| Bug fix | pyasn1 was updated to 0.6.2 (Fixes: CVE-2026-23490).                                                                                                                                            |
| Bug fix | RequireJS was updated to 2.3.8 (Fixes: CVE-2024-38999).                                                                                                                                         |
| Bug fix | Swagger-UI was updated to 5.31.0 (Fixes: CVE-2021-46708, CVE-2018-25031).                                                                                                                       |
| Bug fix | Axios was updated to 1.13.5 (Fixes: CVE-2025-27152, CVE-2026-25639, CVE-2025-58754, CVE-2024-57965).                                                                                            |
| Bug fix | Plain SQL restore now runs with the 'restrict' option to prevent harmful psql meta-commands (Fixes: CVE-2025-13780).                                                                            |
| Bug fix | PEM now masks the secret key for the 'restrict' option in the process watcher when restoring plain SQL files (Fixes: CVE-2026-1707).                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
