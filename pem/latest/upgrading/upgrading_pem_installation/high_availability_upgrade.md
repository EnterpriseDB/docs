---
title: Upgrading an HA PEM installation
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/upgrading/upgrading_pem_installation/high_availability_upgrade/
lastModified: 2026-05-05T18:04:32+05:30
---

# Upgrading an HA PEM installation

If you're using a [high availability PEM](https://www.enterprisedb.com/docs/pem/latest/considerations/ha_pem/), you can perform a major or minor upgrade of the PEM installation.

The example commands provided assume a RHEL-based operating system.

> **Important**
>
> This upgrade procedure is designed to minimize downtime to your PEM cluster.
> However, it restarts your primary database instance once.
> To allow the primary to restart and avoid one of the replicas being promoted, ensure that automatic failover is disabled.
>
> If you are using Patroni, ensure that the value of `DB_UNIT_FILE` in `/usr/edb/pem/share/.install-config` is set to `patroni`.
> as detailed in the [installation instructions](https://www.enterprisedb.com/docs/pem/latest/installing/ha/patroni_sm/#install-pem-on-the-primary).

## Upgrading a deployment with colocated PEM web application and backend database

### Upgrade the primary

On the primary server:

1. Update the PEM packages:

   ```shell
   dnf upgrade edb-pem --allowerasing
   ```

2. Execute the upgrade script:

   ```shell
   /usr/edb/pem/bin/configure-pem-server.sh
   ```

### Upgrade the replicas

On each replica server:

1. Update the PEM packages:

   ```shell
   dnf upgrade edb-pem --allowerasing
   ```

2. If you're updating to PEM 10.x from PEM 9 or PEM 10.0, ensure that libpq5 is installed (this is done on the primary by `configure-pem-server.sh`):

   ```shell
   dnf install libpq5
   ```

3. Copy the following configuration files from the primary.

   ```
   /etc/httpd/conf.d/edb-pem.conf
   /etc/httpd/conf.d/edb-ssl-pem.conf
   /usr/edb/pem/share/.install-config
   /usr/edb/pem/web/pem.wsgi
   /usr/edb/pem/web/config_setup.py
   ```

4. If you're using NGINX as your web server, also copy the following files from the primary.

   ```
   /etc/edb-uwsgi/uwsgi.ini
   /usr/lib/tmpfiles.d/edb-uwsgi.conf
   /etc/systemd/system/edb-uwsgi.service
   /etc/edb-uwsgi/apps-available/pem.ini
   /etc/nginx/conf.d/edb-pem.conf
   ```

   Then reload NGINX and uWSGI:

   ```shell
   systemctl daemon-reload
   systemctl enable edb-uwsgi
   systemctl start edb-uwsgi
   systemctl restart nginx
   ```

5. If you're using Apache HTTPD as your web server, also copy the following files from the primary.

   ```
   /etc/httpd/conf.d/edb-pem.conf
   /etc/httpd/conf.d/edb-ssl-pem.conf
   ```

   If you're upgrading from PEM 10.3 or earlier, install the `edb-python312-mod-wsgi` package. PEM 10.4 introduced edb-Python 3.12 on RHEL 9, replacing system Python 3.9. This package is required for Apache HTTPD to work correctly. On the primary server, `configure-pem-server.sh` installs it automatically, but on replica servers you must install it manually:

   ```shell
   dnf install edb-python312-mod-wsgi
   ```

   Restart Apache HTTPD:

   ```shell
   systemctl restart httpd
   ```

The upgrade is complete.

## Upgrading a deployment with separate PEM web application and backend database servers

### Upgrade the primary backend

On the primary backend database server:

1. Update the PEM packages:

   ```shell
   dnf upgrade edb-pem --allowerasing
   ```

2. Execute the upgrade script:

   ```shell
   /usr/edb/pem/bin/configure-pem-server.sh
   ```

### Upgrade the replica backends

On each replica database server:

1. Update the PEM packages:

   ```shell
   dnf upgrade edb-pem --allowerasing
   ```

2. Copy the following configuration files from the primary.

   ```
   /usr/edb/pem/share/.install-config
   ```

### Upgrade the web applications

On each web application server:

1. Update the PEM packages:

   ```shell
   dnf upgrade edb-pem --allowerasing
   ```

2. Execute the upgrade script:

   ```shell
   /usr/edb/pem/bin/configure-pem-server.sh
   ```

The upgrade is complete.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
