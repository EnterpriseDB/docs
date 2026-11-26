---
title: SNMP
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/notifications/snmp/
lastModified: 2026-03-26T15:15:25+05:30
---

# SNMP

You must configure the PEM server to send the notifications to an SNMP trap/notification receiver before notifications can be sent. Set the SNMP ver to v1, v2, or v3 to identify the SNMP version.

## Example - Configure `SNMP V3` traps with `net-snmp` trap receiver

1. Set `snmp_security_engine_id` to `PEM_SNMP_AGENT` in plain text format in the Server Configuration dialog box.

2. Convert the plain text value to hexadecimal format to use it in `snmptrapd.conf` file. (You can have hexadecimal values of `snmp_security_engine_id` up to 32 octets length).

   ```shell
   echo PEM_SNMP_AGENT | hexdump -v -e '/1 "%02X"'
   50454D5F534E4D505F4147454E540A
   ```

3. Set the following parameters in the Server Configuration dialog box:
   - **snmp\_security\_nam** to **pem\_snmp\_user**
   - **snmp\_authentication\_protocol** to **MD5**
   - **snmp\_authentication\_password** to **pem\_auth\_pass**
   - **snmp\_privacy\_protocol** to **DES**
   - **snmp\_privacy\_password** to **pem\_priv\_pass**

4. The `snmptrapd.conf` file has the following values:

   ```shell
   createUser -e 0x50454D5F534E4D505F4147454E540A pem_snmp_user MD5 pem_auth_pass DES pem_priv_pass
   authUser log pem_snmp_user
   ```

> **Note**
>
> The agent must run as root to allow sending notifications with SNMP V3.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
