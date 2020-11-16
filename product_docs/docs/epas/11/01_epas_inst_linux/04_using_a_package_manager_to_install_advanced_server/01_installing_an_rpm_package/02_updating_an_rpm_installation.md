```
title:"Updating an RPM Installation"
```

<div id="updating_an_rpm_installation" class="registered_link"></div>

If you have an existing Advanced Server RPM installation, you can use yum to upgrade your repository configuration file and update to a more recent product version. To update the `edb.repo` file, assume superuser privileges and enter:

​			`yum upgrade edb-repo`

yum will update the `edb.repo` file to enable access to the current EDB repository, configured to connect with the credentials specified in your `edb.repo` file. Then, you can use yum to upgrade all packages whose names include the expression `edb`:

​			`yum upgrade` *`edb`*\*

Please note that the `yum upgrade` command will only perform an update between minor releases; to update between major releases, you must use pg_upgrade.

For more information about using yum commands and options, enter `yum --help` on your command line, or visit:

https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Deployment_Guide/ch-yum.html