---
title: Regenerating the server SSL certificates for PEM backends using sslutils
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/certificates/replacing_ssl_certificates/
lastModified: 2026-06-24T22:34:07+05:30
---

# Regenerating the server SSL certificates for PEM backends using sslutils

If the PEM backend database server certificates are near expiring, plan to regenerate the certificates and key files.

> **Important**
>
> If sslutils is in use, PEM performs these steps automatically when the certificates are nearing expiry.
> These instructions are provided for completeness in case you need to manually regenerate the PEM certificates and keys.
>
> These instructions are for PEM deployments using sslutils as the [SSL model](https://www.enterprisedb.com/docs/pem/latest/considerations/ssl_certs/).
> If you provided certificates manually using an external or local CA, regenerate the certificates in the same manner you originally generated them.

To replace the SSL certificates:

1. Stop all running PEM agents, first on the server host and then on any monitored host.

   - On Linux:

     ```shell
     # Running as root
     systemctl stop pemagent
     ```

   - On Windows:
     Use the Services applet to stop the PEM agent. The PEM agent service is named Postgres Enterprise Manager Agent. In the Services dialog box, select the service name, and select **Stop the service**.

2. Back up the existing SSL certificates and keys:

   ```shell
   cd /var/lib/edb/as<x>/data
   mkdir certs
   mv server.* root.* ca_* certs/
   ```

3. Use the `openssl` command to generate the `ca_key.key` file:

   ```shell
   openssl genrsa -out ca_key.key 4096 
   ```

4. Move the `ca_key.key` file to the data directory of the backend server, and change the permissions:

   ```shell
   mv ca_key.key /var/lib/edb/as<x>/data
   chmod 600 /var/lib/edb/as<x>/data/ca_key.key
   ```

5. Use `ca_key.key` to generate the `ca_certificate.crt` file:

   ```shell
   openssl req -x509 -nodes -days 3650 -newkey rsa:4096 -keyout ca_key.key -out ca_certificate.crt
   ```

6. Change the permissions of the `ca_certificate.crt` file:

   ```shell
   chmod 600 /var/lib/edb/as<x>/data/ca_certificate.crt
   ```

7. Reuse the `ca_certificate.crt` file as the `root.crt` file:

   ```shell
   cp /var/lib/edb/as<x>/data/ca_certificate.crt /var/lib/edb/as<x>/data/root.crt
   ```

8. Change the owner and permissions on the `root.crt` file:

   ```shell
   chown enterprisedb /var/lib/edb/as<x>/data/root.crt
   chmod 600 /var/lib/edb/as<x>/data/root.crt
   ```

9. Use the `openssl_rsa_generate_crl()` function to create the certificate revocation list `root.crl`:

   ```shell
   psql -U enterprisedb -d pem --no-psqlrc -t -A -c
   "SELECT openssl_rsa_generate_crl('/var/lib/edb/as<x>/data/ca_certificate.crt', '/var/lib/edb/as<x>/data/ca_key.key')" > /var/lib/edb/as<x>/data/root.crl
   ```

10. Change the ownership and permissions of the `root.crl` file:

    ```shell
    chown enterprisedb /var/lib/edb/as<x>/data/root.crl
    chmod 600 /var/lib/edb/as<x>/data/root.crl
    ```

11. Use the `openssl` command to generate the `server.key` file:

    ```shell
    openssl genrsa -out server.key 4096 
    ```

12. Move `server.key` to the data directory of the backend server, and change the ownership and permissions:

    ```shell
    mv server.key /var/lib/edb/as<x>/data
    chown enterprisedb /var/lib/edb/as<x>/data/server.key
    chmod 600 /var/lib/edb/as<x>/data/server.key
    ```

13. Use the `openssl req` command to create the CSR:

    ```shell
    openssl req -new -key server.key -out server.csr -subj '/C=IN/ST=MH/L=Pune/O=EDB/CN=PEM'
    ```

    Where `-subj` is provided as per your requirements. You define `CN` as the hostname/domain name of the PEM server host.

14. Use the `openssl x509` command to sign the CSR and generate a server certificate. Move `server.crt` to the data directory of the backend database server:

    ```shell
    openssl x509 -req -days 365 -in server.csr -CA ca_certificate.crt -CAkey ca_key.key -CAcreateserial -out server.crt
    mv server.crt /var/lib/edb/as<x>/data
    ```

    Where `-req` indicates the input is a CSR. The `-CA` and `-CAkey` options specify the root certificate and private key to use for signing the CSR.

15. Change the owner and the permissions on the `server.crt` file:

    ```shell
    chown enterprisedb /var/lib/edb/as<x>/data/server.crt
    chmod 600 /var/lib/edb/as<x>/data/server.crt
    ```

16. Restart the PEM server:

    ```shell
    systemctl restart edb-as-<x>
    ```

    Restarting the backend database server restarts the PEM server.

17. Regenerate each PEM agent's SSL certificates. For more information, see [Regenerating agent SSL certificates](https://www.enterprisedb.com/docs/pem/latest/certificates/regenerating_agent_certificates/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
