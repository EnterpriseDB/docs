---
title: Installing Language Pack on MacOS
product: Language Pack
version: "4"
url: https://www.enterprisedb.com/docs/language_pack/latest/installing/macos/
lastModified: 2024-01-31T17:42:18Z
---

# Installing Language Pack on MacOS

On MacOS, EDB provides a graphical interactive installer for Language Pack. To access the graphical installer, install Stack Builder as part of a PostgreSQL installation, and then use Stack Builder to invoke the graphical installer.

## Using Stack Builder

Using PostgreSQL, you can invoke the graphical installer with Stack Builder. See [Using Stack Builder](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/).

1. In Stack Builder, follow the prompts until you get to the module selection page.

   On the Welcome page, select the target server installation from the list of available servers. If your network requires you to use a proxy server to access the internet, select **Proxy servers** and specify a server. Select **Next**.

2. Expand the **Add-ons, tools, and utilities** node.

3. Select **EDB Language Pack** and select **Next**.

4. Browse to a directory where you want to install the language pack, or leave the directory set to the default location. Select **Next**.

5. When the installer states that all installation files have been downloaded, select **Next**.

6. Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using the graphical installer

1. Select the installation language and select **OK**.

2. On the Setup Language Pack page, select **Next**.

   The Ready to Install window displays the Language Pack installation directory.

   `/Library/languagepack/<version>`

   You cannot modify the installation directory.

3. Select **Next**.

   An information box shows the installation progress of the selected components.

4. When the installation is complete, select **Finish**.

## Configuring on MacOS

To simplify setting the value of `PATH` or `LD_LIBRARY_PATH`, you can create environment variables that identify the installation location:

```shell
PERLHOME=/Library/edb/languagepack/<version>/Perl-5.26
PYTHONHOME=/Library/edb/languagepack/<version>/Python-3.7
TCLHOME=/Library/edb/languagepack/<version>/Tcl-8.6
```

where `<version>` is the current version of Language Pack.

Then, execute the following command to instruct the Python interpreter where to find Python:

`export PYTHONHOME`

You can use the same environment variables when setting the value of `PATH`:

```shell
export PATH=$PYTHONHOME/bin:
$PERLHOME/bin:
$TCLHOME/bin:$PATH
```

Lastly, set the following variables to instruct OSX where to find the shared libraries:

```shell
export DYLD_LIBRARY_PATH=$PYTHONHOME/lib:
$PERLHOME/lib/CORE:$TCLHOME/lib:
$DYLD_LIBRARY_PATH
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
