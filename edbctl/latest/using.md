---
title: Using edbctl
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/using/
lastModified: 2026-09-10T16:36:47+05:30
---

# Using edbctl

Use the `edbctl --help or -h` command to return the complete list of commands:

```
edbctl --help
```

```output title="Output"
The edbctl command-line interface (CLI) is a tool for managing HCP resources
and performing database cluster operations. You must first configure an access key using the
"credential" command to proceed using this tool. These credentials will allow you to access the supported
HCP resources and manage them using the edbctl CLI. The CLI supports various commands for managing
projects, clusters, backups, credentials, and more.

Usage:
  edbctl [options]
  edbctl [command]

Examples:
edbctl credential import-access-key --name user1 --access-key baak_xyz --address http://localhost:8080
edbctl config set context_project "Adaptable Chameleon"

Management Commands:
  credential        Manage authentication credentials.
  project           Manage projects associated with the database clusters.
  location          Manage locations associated with the projects.
  cluster           Manage database cluster resources.
  cluster-template  Manage database cluster template resources.
  backup            Manage cluster backups.
  catalog           Manage database catalog resources.

Configuration Commands:
  config            Manages configuration settings for edbctl tool
  help              Help about any command

Setup Commands:
  image             Image management commands
  operand           Operand management commands
  image-pull-secret Pull Secret management commands
  hybrid-manager    Hybrid Manager management, monitoring, and diagnostics

Options:
  -h, --help      help for edbctl
  -v, --version   version for edbctl

Use "edbctl [command] --help" for more information about a command.
```

## Common flags

Only `-h/--help` and `-v/--version` are true global flags. These flags are per-subcommand and fall back to their corresponding config settings when omitted:

- `--credential` (`-c`) — falls back to `context_credential`
- `--project` (`-P`) — falls back to `context_project`
- `--output` (`-o`) — falls back to `output_mode`

### Output formats

Most commands accept `-o/--output` with these values: `table` (default), `json`, `yaml`, `xml`, and `json-raw`. The `json-raw` format returns the unprocessed API response without field renaming, which is useful for scripting and differs from `json`.

## edbctl commands list

- [edbctl aimodel](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_aimodel/) — Manage AI model resources.
- [edbctl backup](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_backup/)	— Manage cluster backups.
- [edbctl catalog](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_catalog/)	— Manage database catalog resources.
- [edbctl chat](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_chat/) — Chat with the AI assistant.
- [edbctl cluster](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster/) — Manage database cluster resources.
- [edbctl cluster-template](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster_template/)	— Manage database cluster template resources.
- [edbctl config](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/)	— Manage configuration settings for `edbctl` tool.
- [edbctl credential](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_credential/)	— Manage authentication credentials.
- [edbctl disaster-recovery](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_disaster_recovery/) — Manage disaster recovery operations for HM-internal database clusters.
- [edbctl federation](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_federation/) — Manage Hybrid Manager federation pairing.
- [edbctl hybrid-manager](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_hybrid_manager/) — Hybrid Manager management, monitoring, and diagnostics.
- [edbctl image](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_image/) — Manage asset images.
- [edbctl image-pull-secret](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_image_pull_secret/) — Pull secret management commands.
- [edbctl location](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_location/) — Manage locations for database cluster provisioning.
- [edbctl operand](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_operand/) — Manage operand images.
- [edbctl project](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_project/) — Manage projects associated with the database clusters.

* [edbctl aimodel](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_aimodel/): Use the edbctl utility to manage AI model resources.
* [edbctl backup](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_backup/): Use the edbctl utility to manage backups for a Hybrid Manager cluster.
* [edbctl catalog](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_catalog/): Use the edbctl utility to manage catalogs for a Hybrid Manager cluster.
* [edbctl chat](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_chat/): Use the edbctl utility to chat with the AI assistant.
* [edbctl cluster](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster/): Use the edbctl utility to manage database cluster resources for a Hybrid Manager cluster.
* [edbctl cluster-template](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_cluster_template/): Use the edbctl utility to manage cluster templates for a Hybrid Manager cluster.
* [edbctl config](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_config/): Use the edbctl utility to display or modify edbctl configuration settings.
* [edbctl credential](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_credential/): Use the edbctl utility to creates and manage authentication credentials.
* [edbctl disaster-recovery](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_disaster_recovery/): Use the edbctl utility to manage disaster recovery operations for HM-internal database clusters.
* [edbctl federation](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_federation/): Use the edbctl utility to mint and exchange Hybrid Manager federation pairing tokens, and to inspect or revoke the resulting pairings.
* [edbctl hybrid-manager](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_hybrid_manager/): Use the edbctl utility for Hybrid Manager management, monitoring, and diagnostics.
* [edbctl image](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_image/): Use the edbctl utility to manage and sync images for Hybrid Manager.
* [edbctl image-pull-secret](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_image_pull_secret/): Use the edbctl utility to manage pull secrets used in the bootstrapping process for Hybrid Manager.
* [edbctl location](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_location/): Use the edbctl utility to manage locations for Hybrid Manager.
* [edbctl operand](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_operand/): Use the edbctl utility to manage EDB Postgres AI Postgres Operand images.
* [edbctl project](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_project/): Use the edbctl utility to manage projects for organizing clusters and resources for Hybrid Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
