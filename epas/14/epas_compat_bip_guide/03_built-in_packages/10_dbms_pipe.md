---
title: DBMS_PIPE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/
lastModified: 2023-02-14T16:10:29+05:30
---

# DBMS\_PIPE

The `DBMS_PIPE` package lets you send messages through a pipe in or between sessions connected to the same database cluster.

The table shows the procedures and functions available in the `DBMS_PIPE` package:

| Function/procedure                                     | Return type | Description                                                                                                     |
| ------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `CREATE_PIPE(pipename [, maxpipesize ] [, private ])`  | `INTEGER`   | Explicitly create a private pipe if `private` is `true` (the default) or a public pipe if `private` is `false`. |
| `NEXT_ITEM_TYPE`                                       | `INTEGER`   | Determine the data type of the next item in a received message.                                                 |
| `PACK_MESSAGE(item)`                                   | n/a         | Place `item` in the session’s local message buffer.                                                             |
| `PURGE(pipename)`                                      | n/a         | Remove unreceived messages from the specified pipe.                                                             |
| `RECEIVE_MESSAGE(pipename [, timeout ])`               | `INTEGER`   | Get a message from a specified pipe.                                                                            |
| `REMOVE_PIPE(pipename)`                                | `INTEGER`   | Delete an explicitly created pipe.                                                                              |
| `RESET_BUFFER`                                         | n/a         | Reset the local message buffer.                                                                                 |
| `SEND_MESSAGE(pipename [, timeout ] [, maxpipesize ])` | `INTEGER`   | Send a message on a pipe.                                                                                       |
| `UNIQUE_SESSION_NAME`                                  | `VARCHAR2`  | Obtain a unique session name.                                                                                   |
| `UNPACK_MESSAGE(item OUT)`                             | n/a         | Retrieve the next data item from a message into a type-compatible variable, `item`.                             |

Pipes are categorized as _implicit_ or _explicit_. An implicit pipe is created if a reference is made to a pipe name that wasn't previously created by the `CREATE_PIPE` function. For example, if the `SEND_MESSAGE` function is executed using a nonexistent pipe name, a new implicit pipe is created with that name. An explicit pipe is created using the `CREATE_PIPE` function in which the first parameter specifies the pipe name for the new pipe.

Pipes are also categorized as _private_ or _public_. Only the user who created the pipe can access a private pipe. Even a superuser can't access a private pipe that was created by another user. Any user who has access to the `DBMS_PIPE` package can access a public pipe.

You can create a public pipe only by using the `CREATE_PIPE` function with the third parameter set to `FALSE`. You can use the `CREATE_PIPE` function to create a private pipe by setting the third parameter to `TRUE` or by omitting the third parameter. All implicit pipes are private.

The individual data items, or lines, of a message are first built in a _local message buffer_, unique to the current session. The `PACK_MESSAGE` procedure builds the message in the session’s local message buffer. You then use the `SEND_MESSAGE` function to send the message through the pipe.

Receipt of a message involves the reverse operation. You use the `RECEIVE_MESSAGE` function to get a message from the specified pipe. The message is written to the session’s local message buffer. You then use The `UNPACK_MESSAGE` procedure to transfer the message data items from the message buffer to program variables. If a pipe contains multiple messages, `RECEIVE_MESSAGE` gets the messages in FIFO (first-in-first-out) order.

Each session maintains separate message buffers for messages created with the `PACK_MESSAGE` procedure and messages retrieved by the `RECEIVE_MESSAGE` function. Thus messages can be both built and received in the same session. However, if consecutive `RECEIVE_MESSAGE` calls are made, only the message from the last `RECEIVE_MESSAGE` call is preserved in the local message buffer.

- [CREATE\_PIPE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/01_create_pipe/): The CREATE\_PIPE function creates an explicit public pipe or an explicit private pipe with a specified name.
- [NEXT\_ITEM\_TYPE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/02_next_item_pipe/): The NEXTITEMTYPE function returns an integer code identifying the data type of the next data item in a message that was retrieved into the session’s local message buffer. As each item is moved off of the local message buffer with the UNPACKMESSAGE procedure, the NEXTITEM\_TYPE function returns the data type code for the next available item. A code of 0 is returned when no more items are left in the message.
- [PACK\_MESSAGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/03_pack_message/): The PACKMESSAGE procedure places an item of data in the session’s local message buffer. You must execute PACKMESSAGE at least once before issuing a SEND\_MESSAGE call.
- [PURGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/04_purge/): The PURGE procedure removes the unreceived messages from a specified implicit pipe.
- [RECEIVE\_MESSAGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/05_receive_message/): The RECEIVE\_MESSAGE function obtains a message from a specified pipe.
- [REMOVE\_PIPE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/06_remove_pipe/): The REMOVE\_PIPE function deletes an explicit private or explicit public pipe.
- [RESET\_BUFFER](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/07_reset_buffer/): The RESETBUFFER procedure resets a pointer to the session’s local message buffer back to the beginning of the buffer. This causes later PACKMESSAGE calls to overwrite any data items that were in the message buffer before the RESET\_BUFFER call.
- [SEND\_MESSAGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/08_send_message/): The SEND\_MESSAGE function sends a message from the session’s local message buffer to the specified pipe.
- [UNIQUE\_SESSION\_NAME](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/09_unique_session_name/): The UNIQUESESSIONNAME function returns a name that is unique to the current session.
- [UNPACK\_MESSAGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/10_unpack_message/): The UNPACKMESSAGE procedure copies the data items of a message from the local message buffer to a specified program variable. You must place the message in the local message buffer with the RECEIVEMESSAGE function before using UNPACK\_MESSAGE.
- [Comprehensive example](https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/11_comprehensive_example/): This example uses a pipe as a “mailbox." Three procedures are enclosed in a package named mailbox. These procedures:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
