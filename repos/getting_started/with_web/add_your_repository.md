---
title: Add your repository using the web interface
description: How to add the EDB repository to your system
product: EDB repositories and downloading
url: https://www.enterprisedb.com/docs/repos/getting_started/with_web/add_your_repository/
lastModified: 2025-07-29T09:44:41-07:00
---

# Add your repository using the web interface

You can add your repository using the web interface. (Alternatively, you can add the repository using the command line. See [Getting started using the CLE](https://www.enterprisedb.com/docs/repos/getting_started/with_cli/).)

1. Go to <https://www.enterprisedb.com/repos-downloads>.

   If you're not already logged in, log in to your EDB account. Go to the Account Profile page. On the Account Profile page, select **Repo Access**.

2. Select **Access Repos 2.0**.

3. On the next page, select the platform you want to download packages to.

4. From the list of EDB software on the left side, select the software you want to add.

   On the right side, instructions to install that software appear.

   <img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/repos/getting_started/with_web/images/step1.png" style="border:1px solid;margin: 1em auto 1em" alt="Repos 2.0 - Step 1" />

5. `curl -1sLf'https://downloads.enterprisedb.com/<token>/enterprise/setup.deb.sh'| sudo`

6. Go to **Step 1** and copy the Auto command. This is a ready-to-run repository installer for your system. Run alone, it installs only the EDB repositories for Repos 2.0. EDB's website has already personalized the command by embedding your Repos token into the command, so you can run it as is.

7. Paste the command into your terminal.

   Once the operation is complete, your system can download packages from EDB.

> **Note**
>
> If you have any issues, see [Troubleshooting](https://www.enterprisedb.com/docs/repos/getting_started/troubleshooting/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
