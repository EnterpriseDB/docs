```
title:"Using a Service Configuration File on CentOS or Redhat 6.x"
```

<div id="using_a_service_configuration_file_on_centos_or_redhat_6" class="registered_link"></div>

On a CentOS or RedHat version 6.x host, the RPM installer creates a service configuration file named `edb-as-11.sysconfig` in `/etc/sysconfig/edb/as11` (see Figure 4.1). Please note that options specified in the service configuration file are only enforced if `initdb` is invoked via the service command; if you manually invoke `initdb` (at the command line), you must specify the other options (such as the location of the `data` directory and installation mode) on the command line.

![](C:\Users\Charm\Desktop\11\11\01_epas_inst_linux\images\the_advanced_server_service_configuration_file.png)

*Figure 4.1 -The Advanced Server service configuration file.*

The file contains the following environment variables:

- `PGENGINE` specifies the location of the engine and utility executable files.
- `PGPORT` specifies the listener port for the database server.
- `PGDATA` specifies the path to the data directory.
- `PGLOG` specifies the location of the log file to which the server writes startup information.
- Use `INITDBOPTS` to specify any `initdb` option or options that you wish to apply to the new cluster. For more information, see Section 4.4.2.1.

You can modify the `edb-as-11.sysconfig` file before using the service command to invoke the startup script to change the listener port, data directory location, startup log location or installation mode. If you plan to create more than one instance on the same system, you may wish to copy the `edb-as-11.sysconfig` file (and the associated `edb-as-11` startup script) and modify the file contents for each additional instance that resides on the same host.