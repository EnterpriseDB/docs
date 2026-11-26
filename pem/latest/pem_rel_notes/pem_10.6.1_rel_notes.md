---
title: Postgres Enterprise Manager 10.6.1 release notes
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/pem_rel_notes/pem_10.6.1_rel_notes/
lastModified: 2026-11-23T12:32:07+05:30
---

# Postgres Enterprise Manager 10.6.1 release notes

Released: 19 November 2026

Bug fixes, and security fixes in Postgres Enterprise Manager 10.6.1 include the following:

## Enhancements

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Auto Discovery can now register a discovered server under a cluster as well as under a server group.
</summary><p>The <strong>Server group</strong> field in the Auto Discovery dialog previously listed only server groups. It now has separate <strong>Server Groups</strong> and <strong>Clusters</strong> sections, matching the Add Server dialog.</p>
</details></td></tr>
<tr><td><details><summary><code>configure-pem-server.sh</code> now stops with a clear message when a step fails, and writes the reason to the log.
</summary><p>Previously the script could continue after a failed step, or stop with a message that did not give the cause. The script now checks the steps that can fail, including the schema upgrade, server registration, web <code>setup-db</code>, and certificate steps. A failed <code>psql</code> query is no longer reported as a success. Failed <code>systemctl</code> commands show the reason.</p> <p>The following behaviour also changes:</p> <ul> <li>Schema upgrade files in <code>share/upgrades</code> run in numeric order, and the schema version is checked after each file. A database that is newer than the package gets a warning and is left alone.</li> <li>The sslutils upgrade is skipped, with a log message, if the extension is not available on the server.</li> <li>Certificates and keys are written to temporary files and moved into place only when every step succeeds.</li> <li>The backup of old certificates now covers <code>*.crt</code>, <code>*.key</code>, and <code>*.crl</code> files at the top of the data directory. Previously only <code>*.crt</code> files were backed up.</li> </ul>
</details></td></tr>
<tr><td><details><summary>Added missing indexes on the <code>pem.alert</code> table.
</summary><p>The indexes reduce the time taken to fetch chart data that depends on the table.</p>
</details></td></tr>
<tr><td><details><summary>The agent now refreshes its long-lived PEM server connections by age, and never while a connection is busy or in a transaction.
</summary><p>Previously only the main connection was refreshed, and the refresh was driven by a loop count. The alert threads, the spooler threads, and the heartbeat connection were replaced only after they failed. Every long-lived PEM connection is now refreshed after a minimum lifetime, plus a random jitter so that connections do not refresh together.</p> <p>The lifetime is set by the new <code>agent_connection_lifetime</code> setting, in seconds, in <code>agent.cfg</code> (<code>AgentConnectionLifetime</code> in the Windows registry). It can also be set with a <code>--register-agent</code> option. The default is 3600, the minimum is 600, and the maximum is 86400. A value that is out of range or not a number uses the default and logs a warning. If a refresh fails, the agent keeps using its existing connection and tries again.</p>
</details></td></tr>
</tbody></table>

## Security Fixes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132658/">CVE-2026-132658</a>, an issue whereby the <code>pem_agent</code> role could read and write files on the PEM server.
</summary><p>The PEM schema granted the <code>pg_read_server_files</code> and <code>pg_write_server_files</code> roles to <code>pem_agent</code>. The upgrade now revokes both roles from <code>pem_agent</code>. The agent's certificate-handling functions in sslutils are given the access they need without these roles, so sslutils 1.4.2 or later is required on the PEM server host.</p>
</details></td></tr>
<tr><td><details><summary>Included the security fixes and hardening changes from pgAdmin 4 9.19.
</summary><p>The related areas of PEM have also been hardened. See the other Security entries in these release notes for changes specific to PEM.</p>
</details></td></tr>
<tr><td><details><summary>Fixed an issue whereby the REST API <code>/token/</code> endpoint accepted an empty password.
</summary><p>Where <code>pg_hba.conf</code> on the PEM database accepts the web server's connection without a password, a request with an empty password could obtain a token for any role holding <code>pem_rest_api</code>. The endpoint now refuses a request with a missing body, or an empty or non-string username or password, with a 401 response.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132665/">CVE-2026-132665</a>, an issue whereby a user could deploy a job template to servers, server groups, or agents belonging to teams they were not a member of.
</summary><p><code>pem.deploy_job_template()</code> ignored team boundaries. Job template deploys and target actions now check that the user's team has access to each target server and agent, and the <code>add_targets</code> API reports a clear error for an inaccessible target. Redeployments that reuse stored targets are not affected.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132661/">CVE-2026-132661</a>, an issue whereby multi-factor authentication (MFA) was not enforced on all PEM routes.
</summary><p>A session that had passed only the password step could call PEM routes directly without completing MFA. MFA is now enforced on every PEM route and Socket.IO event, and a user must complete MFA before managing their MFA factors. Emailed MFA codes now expire after a configurable timeout (default 5 minutes), and an account is locked temporarily after 5 wrong MFA codes. You can also enable an optional temporary lock for <code>pem_internal</code> accounts after repeated failed logins by setting <code>PEM_FAILED_LOGIN_LOCK_ATTEMPTS</code>; it is off by default.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132664/">CVE-2026-132664</a>, an issue whereby any PEM login could read the encrypted password column of <code>pem.agent_server_binding</code>.
</summary><p>Members of <code>pem_user</code> can no longer read the <code>password</code> column. The <code>pem_agent</code>, <code>pem_admin</code>, and <code>pem_database_server_registration</code> roles can still read it, so agent registration and the console features that use the table continue to work.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132662/">CVE-2026-132662</a>, a path traversal issue in the SQL Profiler trace filter save and load functions.
</summary><p>Previously a user with the <code>pem_comp_sqlprofiler</code> role could read and overwrite files outside their own storage directory. Trace filter files are now confined to the user's storage directory and are created with restrictive permissions. The unused Query Tool <code>load_file</code> and <code>save_file</code> routes, which had the same weakness, are removed.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132663/">CVE-2026-132663</a>, an issue whereby webhook URLs could use <code>file://</code> to read local files.
</summary><p>Webhook URLs and OAuth token URLs must now use <code>http://</code> or <code>https://</code>. This is enforced in the PEM web interface, in the database, and in the agent. The upgrade disables any existing webhook that uses another URL scheme and logs a warning that names it; to use it again, correct its URL and re-enable it. The upgrade also clears stored delivery error text that might contain file contents, and delivery error text is now truncated to 1 KB. Webhooks that use HTTP or HTTPS, including those that use mTLS or OAuth, are unchanged.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132668/">CVE-2026-132668</a>, an issue whereby any PEM login could call <code>pem.send_webhook()</code> to queue payloads to any configured webhook.
</summary><p>Execute permission on <code>pem.send_webhook()</code> is revoked from <code>PUBLIC</code>, <code>pem_user</code>, <code>pem_admin</code>, and <code>pem_agent</code>. Alert-driven webhooks continue to fire.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132659/">CVE-2026-132659</a>, an issue whereby the credentials of one agent could be used to schedule jobs on every other agent.
</summary><p>All agent logins share the <code>pem_agent</code> role, which held broad write access to the PEM schema. The role is now restricted so that one agent's credentials can no longer create jobs, or change alerts, servers, agents, or notifications, for other agents. Upgrade the agent on the PEM server host together with the server: an older agent on that host can no longer run its CA certificate expiry check. Stop agents while you upgrade the PEM server.</p>
</details></td></tr>
<tr><td><details><summary>Fixed <a href="https://www.enterprisedb.com/docs/security/advisories/cve2026132660/">CVE-2026-132660</a>, an issue whereby a function planted in a writable schema could run with the rights of the function owner, up to superuser, through a <code>SECURITY DEFINER</code> function.
</summary><p>Many <code>SECURITY DEFINER</code> functions in the <code>pem</code> schema did not set a fixed <code>search_path</code>, so a caller who could create objects in a schema on the path could place a function ahead of the intended one. The <code>search_path</code> of these functions is now pinned to <code>pg_catalog, pg_temp</code>.</p>
</details></td></tr>
<tr><td>Updated Brotli to 1.2.1 to fix CVE-2026-111497.</td></tr>
</tbody></table>

## Changes

<table class="table w-100"><thead><tr><th>Description</th></tr></thead><tbody>
<tr><td><details><summary>Fixed an issue whereby the <code>setup.py</code> commands that manage users, servers, and preferences failed with a traceback.
</summary><p>PEM keeps users, servers, and preferences in the PEM database, so these commands cannot work on the web server's local configuration database. The commands <code>add-user</code>, <code>add-external-user</code>, <code>update-user</code>, <code>update-external-user</code>, <code>load-users</code>, <code>get-users</code>, <code>delete-user</code>, <code>dump-servers</code>, <code>load-servers</code>, <code>get-prefs</code>, and <code>set-prefs</code> now report that PEM does not support them and exit with status 1. <code>setup-db</code> and <code>cleanup-session-files</code> are unchanged.</p>
</details></td></tr>
</tbody></table>

## Bug Fixes

<table class="table w-100"><thead><tr><th>Description</th><th width="10%">Addresses</th></tr></thead><tbody>
<tr><td><details><summary>Fixed an issue whereby a server or agent could appear in more than one server group after its group was changed.
</summary><p>The object tree was not refreshed after the group change. The tree is now refetched, so the server appears only under its new group.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby the New Probe and Create Alert dialogs could intermittently fail with &quot;Something went wrong&quot;.
</summary><p>The failure occurred when a dialog containing a grid opened while another grid was already displayed, for example when opening New Probe from Manage Probes, or Create Alert from the Alert tab of a new profile. The error reported was &quot;Cannot have two HTML5 backends at the same time&quot;. All grids now share one drag-and-drop backend.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby form validation errors were not visible in the high contrast theme.
</summary><p>The field label, error icon, input border, and required-field asterisk were drawn in the same colour as the dialog background. They now use the error accent colour and meet WCAG AA contrast.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby no error was logged when an alert script configured to run on the PEM server could not be run.
</summary><p>This happened when no agent could be found to run the script, for example when the PEM server had been registered before its server information was discovered. A warning is now written to the PEM database server log.</p>
</details></td><td>65269</td></tr>
<tr><td><details><summary>Fixed an issue whereby the timestamp in alert email bodies showed the wrong UTC offset during daylight saving time.
</summary><p>For example, a time in CEST (+02) was shown with the CET offset (+01), so the body of the email disagreed with the email header by one hour.</p>
</details></td><td></td></tr>
<tr><td>Fixed an issue whereby the error dialog shown when adding a duplicate alert to a profile had no title.</td><td></td></tr>
<tr><td>Fixed an issue whereby hovering over a row in the per-target table on the Probe Diagnostics detail page made the row text unreadable in the high contrast theme.</td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby historical data for a dropped database was never purged from the <code>pemhistory</code> tables.
</summary><p>The probe-object combination for a dropped database was deleted on the next run of the &quot;Update the probe-objects combination&quot; job instead of after its grace period. The purge job then had nothing to process for that database, so its history stayed in <code>pemhistory</code> after the retention period had passed. The combination is now deleted only after the grace period.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby Probe Diagnostics charts drew a continuous line across an interval in which the probe was disabled or had no data.
</summary><p>The Executions &amp; failures and Time breakdown charts now show a gap for intervals with no data.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby the time axis of Probe Diagnostics charts was spaced by the intervals that contained data rather than by equal time ranges.
</summary><p>The x-axis now shows evenly spaced time ranges across the selected window.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed several issues in <code>configure-pem-server.sh</code> where the script took the wrong action even though no command failed.
</summary><p>The fixes include:</p> <ul> <li>The <code>-au</code> option is now accepted.</li> <li>A saved web port is no longer replaced by 8443 on every run.</li> <li>The uninstall option now removes <code>pem.wsgi</code>.</li> <li>A typed password no longer loses its backslashes.</li> <li>A rerun after a failed fresh installation now registers the server again, instead of treating the installation as an upgrade.</li> <li>A saved configuration without a <code>USE_NGINX</code> line is treated as httpd by uninstall and <code>switch-web-server.sh</code>.</li> <li><code>-ps</code>, <code>-dbi</code>, <code>-ds</code>, and <code>-nhc</code> can now be changed on a later run, and the new value is saved.</li> <li>An upgrade of a host installed with <code>-kdc</code> or <code>-utd</code> no longer requires those options to be repeated.</li> <li>FIPS settings are kept on web-only upgrades from versions before 10.3.</li> <li>An upgrade now logs the options it ignores, such as <code>-au</code>, <code>-uac</code>, <code>-uak</code>, <code>-arp</code>, <code>-aro</code>, <code>-srp</code>, and <code>--replication-solution</code>.</li> <li>The script no longer creates a stray <code>venv/lib/lib</code> link on upgrade, and no longer writes <code>0/32</code> into <code>pg_hba.conf</code> for a route without a gateway.</li> </ul>
</details></td><td></td></tr>
<tr><td>Fixed an issue whereby topology discovery failed with a duplicate key error when several PGD clusters with the same name, or several active servers with the same description, were registered in PEM.</td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby transactions per second (TPS) shown on the dashboard was incorrect when the refresh interval was not one second.
</summary><p>The dashboard did not divide the change in the transaction counters by the refresh interval. This fix is taken from pgAdmin upstream.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby the PEM agent telemetry flush held an additional connection to the PEM server.
</summary><p>The probe telemetry thread opened its own connection and did not close it when finished. It now shares one of the agent's existing PEM connections.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby Performance Diagnostic could wait indefinitely for a database connection when the monitored server was down.
</summary><p>Previously the request, and the web server thread handling it, waited without limit. A pool that cannot connect is now closed after its timeout (<code>PEM_PD_DB_POOL_TIMEOUT</code> plus the connect timeout), and a pool whose connections are all in use is waited for up to <code>PEM_PD_DB_POOL_BUSY_WAIT</code> (new setting, default 30 seconds). The reason a pooled connection could not be made is logged in the PEM server log.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby <code>configure-pem-server.sh</code> did not make the database present the generated <code>server.crt</code> on Debian-family EPAS clusters.
</summary><p>On clusters created with <code>epas_createcluster</code>, <code>ssl_cert_file</code> and <code>ssl_key_file</code> are already set to the <code>ssl-cert-snakeoil</code> files, and the script only replaced commented-out lines. The script now sets both parameters whether or not they are commented out, so the database presents the generated certificate.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby a login with the <code>pem_database_server_registration</code> role but not <code>pem_admin</code> could not register a server or bind an agent.
</summary><p>The insert failed with &quot;permission denied for table alert_queue&quot;. The trigger that synchronises the alert queue now runs with the privileges needed to write to the table.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby the Manage Probes grid showed a blank gap and skipped the first rows after switching tabs.
</summary><p>This happened when all rows fit on screen, so the grid could not scroll. All rows of the current page are now drawn from the top of the grid.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby a fresh installation that uses a PostgreSQL configuration database failed during migration setup.
</summary><p>A migration revision ID was longer than the 32-character limit of the Alembic <code>version_num</code> column, which PostgreSQL enforces. Installations that use the default SQLite configuration database were not affected.</p>
</details></td><td></td></tr>
<tr><td><details><summary>Fixed an issue whereby remotely monitored servers were shown without their agent in the breadcrumb menu, so new custom dashboards were saved at the wrong level.
</summary><p>Each remotely monitored server is now listed under the agent that monitors it, in a <strong>REMOTE SERVERS</strong> section. The dashboard level is read from the page context, so custom dashboards created on a remote server appear on that server.</p>
</details></td><td></td></tr>
</tbody></table>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
