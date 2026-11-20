---
title: Inserting records in a database
product: .NET Connector
version: 10.0.1.1
url: https://www.enterprisedb.com/docs/net_connector/latest/09_inserting_records_in_a_database/
lastModified: 2026-02-16T12:16:04+01:00
---

# Inserting records in a database

<div id="inserting_records_in_a_database" class="registered_link"></div>

You can use the `ExecuteNonQuery()` method of `EDBCommand` to add records to a database stored on an EDB Postgres Advanced Server host with an `INSERT` command.

In the example that follows, the `INSERT` command is stored in the variable `insertCommand`. The values prefixed with a colon (`:`) are placeholders for EDBParameters that are instantiated, assigned values, and then added to the `INSERT` command's parameter collection in the statements that follow. The `INSERT` command is executed by the `ExecuteNonQuery()` method of the `insertCommand` object.

Note that `ExecuteNonQuery()` method returns the number of rows affected by the command. It is usually a good practice to check the number of affected rows matches your expectations (1 in this example).

The example adds an employee to the `emp` table:

## .NET

```csharp
using EnterpriseDB.EDBClient;

namespace InsertingRecords;

internal static class Program
{
    static async Task Main(string[] args)
    {
        // NOT FOR PRODUCTION, consider moving the connection string in a configuration file
        var connectionString = "Server=127.0.0.1;Port=5444;User Id=enterprisedb;Password=edb;Database=edb";
        try
        {
            await using var dataSource = EDBDataSource.Create(connectionString);
            await using var conn = await dataSource.OpenConnectionAsync();

            var query = "INSERT INTO emp(empno,ename) VALUES(:EmpNo, :EName)";
            using var insertCommand = new EDBCommand(query, conn);
            var empNo = insertCommand.Parameters.Add(new EDBParameter("EmpNo", EDBTypes.EDBDbType.Integer));
            var empName = insertCommand.Parameters.Add(new EDBParameter("EName", EDBTypes.EDBDbType.Text));                        
            empNo.Value = 1234;
            empName.Value = "Lola";

            var numRows = await insertCommand.ExecuteNonQueryAsync();

            Console.WriteLine($"{numRows} record(s) inserted successfully");
            await conn.CloseAsync();
        }
        catch (Exception exp)
        {
            Console.WriteLine($"An error occured: {exp}");
        }
    }
}
```

## .NET Framework

```csharp
using System;
using System.Threading.Tasks;
using EnterpriseDB.EDBClient;

namespace InsertingRecords
{
    internal static class Program
    {
        static async Task Main(string[] args)
        {
            // NOT FOR PRODUCTION, consider moving the connection string in a configuration file
            var connectionString = "Server=127.0.0.1;Port=5444;User Id=enterprisedb;Password=edb;Database=edb";
            try
            {
                using (var dataSource = EDBDataSource.Create(connectionString))
                using (var conn = await dataSource.OpenConnectionAsync())
                {

                    var query = "INSERT INTO emp(empno,ename) VALUES(:EmpNo, :EName)";
                    using (var insertCommand = new EDBCommand(query, conn))
                    {

                        var empNo = insertCommand.Parameters.Add(new EDBParameter("EmpNo", EDBTypes.EDBDbType.Integer));
                        var empName = insertCommand.Parameters.Add(new EDBParameter("EName", EDBTypes.EDBDbType.Text));
                        empNo.Value = 1234;
                        empName.Value = "Lola";

                        var numRows = await insertCommand.ExecuteNonQueryAsync();

                        Console.WriteLine($"{numRows} record(s) inserted successfully");
                    }
                    await conn.CloseAsync();
                }
            }
            catch (Exception exp)
            {
                Console.WriteLine($"An error occured: {exp}");
            }
        }
    }
}
```

This program should show the following output in the Console:

```text
1 record(s) inserted successfully
```

> **Note**
>
> There are several ways to declare parameters and assign their values. Here are some examples :
>
> ```csharp
> // One-liners (parameter types are induced from their value)
> insertCommand.Parameters.AddWithValue("EmpNo", 1234);
> insertCommand.Parameters.AddWithValue("EName", "Lola");
>
> // Using the parameter variable to set its value, instead of getting it via the command
> var empParam = insertCommand.Parameters.Add(new EDBParameter("EmpNo", EDBTypes.EDBDbType.Integer));
> empParam.Value = 1234;
> var nameParam = insertCommand.Parameters.Add(new EDBParameter("EName", EDBTypes.EDBDbType.Text));
> nameParam.Value = "Lola";
>
> insertCommand.Parameters[0].Value = 1234; // works but not recommended: access by index is error-prone
> insertCommand.Parameters["EmpNo"].Value = 1234; // works but any parameter name change will break here
> ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
