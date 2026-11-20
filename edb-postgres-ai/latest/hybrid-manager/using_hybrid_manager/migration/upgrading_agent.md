---
title: Upgrading the EDB DMS agent
description: Check, upgrade, and verify the EDB DMS agent (cdcagent) package on Linux.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/upgrading_agent/
lastModified: 2026-09-01T12:38:17+02:00
---

# Upgrading the EDB DMS agent

The EDB DMS agent (packaged as `cdcagent`) is versioned and released independently of Hybrid Manager (HM). New HM releases and new migration features often require a minimum `cdcagent` version, so you may need to upgrade an already installed agent.

Before you upgrade, check the minimum `cdcagent` version your HM release requires. See [DMS agent version compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/cdcagent_compatibility/).

## Upgrade the package

To upgrade to the latest available version, run the following command as a user with `sudo` privileges:

### Debian and derivatives

```shell
sudo apt-get install -y --only-upgrade cdcagent
```

### RHEL and derivatives

```shell
sudo dnf upgrade -y cdcagent
```

### SLES

```shell
sudo zypper update -y cdcagent
```

To pin a specific version instead of taking the latest, append the version to the package name and run the command as a user with `sudo` privileges:

### Debian and derivatives

```shell
sudo apt-get install -y cdcagent=<version>
```

### RHEL and derivatives

```shell
sudo dnf install -y cdcagent-<version>
```

### SLES

```shell
sudo zypper install cdcagent=<version>
```

## Verify the upgrade

Confirm the new version is installed:

### Debian and derivatives

```shell
dpkg -l cdcagent
```

### RHEL and derivatives

```shell
rpm -q cdcagent
```

### SLES

```shell
rpm -q cdcagent
```

Then check the agent directory:

```shell
ls -la /opt/cdcagent/
```

The upgrade regenerates the runtime files (`run-cdcagent.sh`, `quarkus-run.jar`) with new timestamps. It doesn't touch your own configuration — any environment variables you set in `run-cdcagent.sh` for a source or destination carry over untouched, so you don't need to reconfigure the agent after an upgrade.

## Restart the agent

Upgrading the package doesn't restart an agent that's already running. Linux lets you replace a package's files on disk while a process still has them open, so the running agent keeps using the old version in memory until you restart it. You don't need to stop the agent before you upgrade — only before you start the new version.

1. Stop the running agent.

   If it's running in the foreground of the terminal session where you started it, stop it with **Ctrl+C**.

   If it's running detached from a terminal (for example, in the background or under `nohup`), find and stop the process instead:

   ```shell
   ps aux | grep quarkus-run
   kill <pid>
   ```

2. Restart the agent using your existing configuration:

   ```shell
   cd /opt/cdcagent
   ./run-cdcagent.sh
   ```

3. Check the agent's startup output to confirm it reports the new version before you rely on it for a migration.

## See also

- [DMS agent version compatibility](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/cdcagent_compatibility/)
- [DMS agent parameter reference](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/dms_agent_reference/)
- [Installing the EDB DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/installing_agent/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
