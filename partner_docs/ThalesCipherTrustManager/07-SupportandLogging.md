---
title: Support and logging details
description: Details of the support process and logging information
product: Partner Docs
url: https://www.enterprisedb.com/docs/partner_docs/ThalesCipherTrustManager/07-SupportandLogging/
lastModified: 2023-07-31T13:27:23-04:00
---

# Support and logging details

## Support

Technical support for the use of these products is provided by both EDB and Thales. A support contract must be in place at both EDB and Thales. You can open a support ticket with either company to start the process. If it's determined through the support ticket that resources from the other vendor are required, open a support ticket with that vendor through normal support channels. This approach allows both companies to work together to help you as needed.

## Logging

The following log files are available.

## EDB Postgres Advanced Server logs

Navigate to the `Data` directory in your chosen EDB Postgres Advanced Server instance. From there, you can navigate to `log` or `current_logfiles`. Or, you can navigate to the `postgresql.conf` file, where you can customize logging options or enable `edb_audit` logs.

## EDB Postgres Extended Server logs

Navigate to the `Data` directory in your chosen EDB Postgres Extended Server instance. From there, you can navigate to `log`, or you can navigate to the `postgresql.conf` file, where you can customize logging options.  An example of the full path to view EDB Postgres Extended logs is `/var/lib/edb-pge/15/data/log`.

## Thales CipherTrust Manager logs

Thales CipherTrust Manager collects and stores records for both the server and the client.

If you log in to your Thales CipherTrust Manager UI, on the left menu bar, select **Records**. From there, you can choose to view either server records or client records.
![Thales Records](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/partner_docs/ThalesCipherTrustManager/Images/ThalesRecords.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
