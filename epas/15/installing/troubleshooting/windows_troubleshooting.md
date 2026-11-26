---
title: Windows installation troubleshooting
description: Provides details about troubleshooting installations on Windows platforms
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/installing/troubleshooting/windows_troubleshooting/
lastModified: 2023-11-09T17:35:38+05:30
---

# Windows installation troubleshooting

### Difficulty displaying Java-based applications

If you have difficulty displaying Java-based server features (controls or text not displaying correctly or blank windows), upgrading to the latest `libxcb-xlib` libraries corrects the problem on most distributions. See the [Java bug database](http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=6532373) for other possible workarounds.

### - -mode unattended authentication errors

Authentication errors from component modules during unattended installations might indicate that the specified values of `--servicepassword` or `--superpassword` are incorrect.

### Errors during an EDB Postgres Advanced Server installation

If you encounter an error during the installation process, exit the installation, and ensure that your version of Windows is up to date. After applying any outstanding operating system updates, invoke the EDB Postgres Advanced Server installer again.

### The installation fails to complete due to existing data directory contents

If an installation fails to complete due to existing content in the data directory, the server writes an error message to the server logs:

`A data directory is neither empty, or a recognisable data directory`.

If you encounter a similar message, confirm that the data directory is empty. The presence of files, including the system-generated `lost+found` folder, prevents the installation from completing. Either remove the files from the data directory, or specify a different location for the data directory before invoking the installer again to complete the installation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
