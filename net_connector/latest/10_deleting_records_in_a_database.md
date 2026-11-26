---
title: Deleting records in a database
product: .NET Connector
version: 10.0.1.1
url: https://www.enterprisedb.com/docs/net_connector/latest/10_deleting_records_in_a_database/
lastModified: 2026-02-16T12:16:04+01:00
---

# Deleting records in a database

<div id="deleting_records_in_a_database" class="registered_link"></div>

You can use the `ExecuteNonQuery()` method of `EDBCommand` to delete records from a database stored on an EDB Postgres Advanced Server host with a `DELETE` statement.

In the example that follows, the `DELETE` command is stored in the variable `deleteCommand`. The values prefixed with a colon (`:`) are placeholders for EDBParameters.

The `EDBParameter` for the employee ID is created and assigned at the same time using command’s parameter collection `EDBParameterCollection.AddWithValue(string parameterName, object value)` method.

The `DELETE` command is then executed by the `ExecuteNonQuery()` method of the `deleteCommand` object.

Note that `ExecuteNonQuery()` method returns the number of rows affected by the command. It is usually a good practice to check that the number of affected rows matches your expectations (0 or 1 in this example).

The example deletes an employee having the 1234 ID from the `emp` table:

## .NET

```csharp
using EnterpriseDB.EDBClient;

namespace DeletingRecords;

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
            await using var deleteCommand = new EDBCommand("DELETE FROM emp WHERE empno = :ID", conn);

            deleteCommand.Parameters.AddWithValue(":ID", 1234);

            var numRows = await deleteCommand.ExecuteNonQueryAsync();

            Console.WriteLine($"{numRows} record(s) deleted successfully");

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

namespace DeletingRecords
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
                    using (var deleteCommand = new EDBCommand("DELETE FROM emp WHERE empno = :ID", conn))
                    {
                        deleteCommand.Parameters.AddWithValue(":ID", 1234);
                        
                        var numRows = await deleteCommand.ExecuteNonQueryAsync();
                
                        Console.WriteLine($"{numRows} record(s) deleted successfully");
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
1 record(s) deleted successfully
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
