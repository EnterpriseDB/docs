```
title:"Installing an RPM Package"
```

<div id="installing_an_rpm_package" class="registered_link"></div>

Before installing Advanced Server, you must have credentials that allow access to the EnterpriseDB repository. For information about requesting credentials, visit:

https://info.enterprisedb.com/rs/069-ALB-339/images/Repository%20Access%2004-09-2019.pdf

After receiving your repository credentials you can:

1. Create the repository configuration file.

2. Modify the file, providing your user name and password.

3. Install Migration Toolkit.

**Creating a Repository Configuration File**

To create the repository configuration file, assume superuser privileges and invoke the following command:

​			`yum -y install https://yum.enterprisedb.com/edb-repo-rpms/edb-repo-latest.noarch.rpm`

The repository configuration file is named `edb.repo`. The file resides in `/etc/yum.repos.d`.

After creating the `edb.repo` file, use your choice of editor to ensure that the value of the enabled parameter is `1`, and replace the `username` and `password` placeholders in the `baseurl` specification with the name and password of a registered EnterpriseDB user.

`[edb]` 

`name=EnterpriseDB RPMs $releasever - $basearch` 

`baseurl=https://<*username*>:<*password*>@yum.enterprisedb.com/edb/redhat/rhel-$releasever-$basearch` 

`enabled=1` 

`gpgcheck=1` 

`gpgkey=file:///etc/pki/rpm-gpg/ENTERPRISEDB-GPG-KEY`

After saving your changes to the configuration file, you can use `yum install` command to install Advanced Server. For example, to install the server and its core components, use the command:

​			`yum install edb-as11-server`

When you install an RPM package that is signed by a source that is not recognized by your system, yum may ask for your permission to import the key to your local server. If prompted, and you are satisfied that the packages come from a trustworthy source, enter a y, and press `Return` to continue.

After installing Advanced Server, you must configure the installation; see Section [4.4](https://www.enterprisedb.com/edb-docs/d/edb-postgres-advanced-server/installation-getting-started/installation-guide-for-linux/11/EDB_Postgres_Advanced_Server_Installation_Guide_Linux.1.13.html#pID0E0IJ0HA) , *Configuring a Package Installation*, for details.

During the installation, yum may encounter a dependency that it cannot resolve. If it does, it will provide a list of the required dependencies that you must manually resolve.