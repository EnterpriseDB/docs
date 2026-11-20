---
title: LiveCompare Installation
product: LiveCompare
version: "3"
url: https://www.enterprisedb.com/docs/livecompare/3/installation/
lastModified: 2026-11-10T16:36:54+01:00
---

# LiveCompare Installation

Before installing, consult the [LiveCompare requirements](https://www.enterprisedb.com/docs/livecompare/3/requirements/) to ensure that your system meets the necessary prerequisites.

## Installation from EDB repositories

You can install LiveCompare from the EnterpriseDB's Repos 2.0 repository.

If you haven't already installed the appropriate EnterpriseDB repository, follow the instructions in the [EnterpriseDB repository installation guide](https://www.enterprisedb.com/docs/repos/getting_started/).

Then, to install LiveCompare, run the following command:

### RHEL, or other RPM-based distributions:

```bash
sudo dnf install edb-livecompare
```

### Debian, Ubuntu, or other Debian-based distributions:

```bash
sudo apt-get install edb-livecompare
```

### SLES:

```bash
sudo zypper install edb-livecompare
```

## Installation with manual download

If you prefer to download the LiveCompare package manually, you can download the package from the [EnterpriseDB website](https://www.enterprisedb.com/software-downloads).

After downloading the package, you can install it using the following command:

### RHEL, or other RPM-based distributions:

```bash
sudo rpm -i edb-livecompare-<version>.rpm
```

### Debian, Ubuntu, or other Debian-based distributions:

```bash
sudo dpkg -i edb-livecompare-<version>.deb
```

### SLES:

```bash
sudo zypper install edb-livecompare-<version>.rpm
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
