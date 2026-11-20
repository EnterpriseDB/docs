---
title: Migration Portal 4.10.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.10.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.10.0 release notes

Released: 27 Jun 2024

New features, enhancements, bug fixes, and other changes in Migration Portal 4.10.0 include the following:

| Type        | Description                                                                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for Postgres `tablefunc` extension functions, such as `crosstab`, in user repairs of incompatible DDL objects. The `crosstab` function is commonly used as a workaround for the Oracle `PIVOT` operator, which isn't available in Postgres. |
| Enhancement | Added a Migration Portal Knowledge Base entry that describes the use of the Postgres `tablefunc` extension `crosstab` function as a workaround for the Oracle `PIVOT` operator.                                                                           |
| Bug fix     | Fixed the issue that caused the Migration Portal to refresh when selecting the **Projects** tab after selecting the **Portal Wiki** tab.                                                                                                                  |
| Bug fix     | Improved the error handling capabilities of AI Copilot. It now provides better information about any errors returned from the backend server.                                                                                                             |
| Bug fix     | Fixed the vertical scroll for AI Copilot so that it scrolls as new information is displayed.                                                                                                                                                              |
| Bug fix     | Fixed the error that caused AI Copilot to lose in-progress streaming response when navigating to a different tab.                                                                                                                                         |
| Bug fix     | Fixed the error that caused the Quick Help section on the workspace page to go blank when navigating from the AI Copilot tab.                                                                                                                             |
| Bug fix     | Improved AI Copilot to support adding line breaks in the AI Copilot text box using modifier keys (Control, Command, Option, Shift keys) along with Enter.                                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
