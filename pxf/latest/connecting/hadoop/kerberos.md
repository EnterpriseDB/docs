---
title: Authenticating with Kerberos
description: Configure PXF to authenticate with a Kerberized Hadoop cluster and impersonate the connecting WHPG user.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/kerberos/
lastModified: 2026-08-12T09:50:14Z
---

# Authenticating with Kerberos

Authenticate PXF to a Kerberized Hadoop cluster using a Kerberos principal and keytab, instead of connecting as an unauthenticated user. This authentication method applies to any Hadoop connector, the Hadoop Distributed File System (HDFS), Hive, or HBase.

## Enabling Kerberos authentication

Add these settings to the same server directory you already configured for HDFS, Hive, or HBase.

> **Note**
>
> This procedure requires a Kerberos principal and keytab for PXF, generated with `kadmin` (MIT Kerberos) or `ktpass` (Active Directory) on your Kerberos Key Distribution Center (KDC), or provided by your Kerberos administrator.

1. Copy the `pxf-site.xml` template into your server directory:

   ```bash
   cp $PXF_HOME/templates/pxf-site.xml $PXF_BASE/servers/<server_name>
   ```

2. Edit `pxf.service.kerberos.principal` and `pxf.service.kerberos.keytab` with your principal and keytab path:

   ```xml
   <property>
       <name>pxf.service.kerberos.principal</name>
       <value>gpadmin/_HOST@EXAMPLE.COM</value>
   </property>
   <property>
       <name>pxf.service.kerberos.keytab</name>
       <value>${pxf.base}/keytabs/pxf.service.keytab</value>
   </property>
   ```

   PXF replaces `_HOST` in the principal with each host's fully qualified domain name. See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#pxf-sitexml) for the full list of `pxf-site.xml` properties.

3. Copy the keytab file to `$PXF_BASE/keytabs` on every segment host, at the same path. `pxf cluster sync` doesn't distribute this directory, so you need to place it there yourself.

4. Sync the server configuration to every segment host, then restart PXF to apply it:

   ```bash
   pxf cluster sync
   pxf cluster restart
   ```

To connect to a Kerberized Hive metastore over JDBC instead, set `hadoop.security.authentication` to `kerberos` in that server's `jdbc-site.xml`. See [Connecting to SQL databases over JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/).

## Tuning Kerberos parameters

Edit optional properties the same way as [Enabling Kerberos authentication](#enabling-kerberos-authentication) above, in that same server's `pxf-site.xml`, then sync and restart PXF to apply the change:

- `pxf.service.user.impersonation`: By default, PXF impersonates the WarehousePG (WHPG) user running the query when it connects to the external system, so the Hadoop cluster sees requests as coming from that user rather than from PXF's own principal. Set this to `false` to disable impersonation and connect as the PXF principal for every query instead.
- `pxf.service.user.name`: Impersonates a specific proxy user rather than the connecting WHPG user. Use this on unsecured clusters where a proxy user is already configured, or to make every WHPG user appear as this one user on the Hadoop side.
- `pxf.service.kerberos.constrained-delegation`: Set to `true` to impersonate using Kerberos constrained delegation (S4U2Self/Proxy) instead of requiring PXF's principal to be a Hadoop proxy user, for clusters that support it. This delegation mode needs additional configuration on your Active Directory or IPA server.
- `pxf.service.kerberos.ticket-renew-window`: The fraction of a Kerberos ticket's lifespan PXF waits through before refreshing it, `0.8` by default. Set it to `0` to request a new ticket on every request.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
