---
title: UTL_MAIL
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/22_utl_mail/
lastModified: 2023-11-09T17:35:38+05:30
---

# UTL\_MAIL

The `UTL_MAIL` package manages email. EDB Postgres Advanced Server supports the following procedures.

| Function/procedure                                                                                                                                        | Return Type | Description                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `SEND(sender, recipients, cc, bcc, subject, message [, mime_type [, priority ]])`                                                                         | n/a         | Packages and sends an email to an SMTP server.                             |
| `SEND_ATTACH_RAW(sender, recipients, cc, bcc, subject, message, mime_type, priority, attachment [, att_inline [, att_mime_type [, att_filename ]]])`      | n/a         | Same as the `SEND` procedure but with `BYTEA` or large object attachments. |
| `SEND_ATTACH_VARCHAR2(sender, recipients, cc, bcc, subject, message, mime_type, priority, attachment [, att_inline [, att_mime_type [, att_filename ]]])` | n/a         | Same as the `SEND` procedure but with `VARCHAR2` attachments.              |

> **Note**
>
> An administrator must grant execute privileges to each user or group before they can use this package.

## SEND

The `SEND` procedure sends an email to an SMTP server.

```sql
SEND(<sender> VARCHAR2, <recipients> VARCHAR2, <cc> VARCHAR2,
  <bcc> VARCHAR2, <subject> VARCHAR2, <message> VARCHAR2
  [, <mime_type> VARCHAR2 [, <priority> PLS_INTEGER ]])
```

### Parameters

`sender`

Email address of the sender.

`recipients`

Comma-separated email addresses of the recipients.

`cc`

Comma-separated email addresses of copy recipients.

`bcc`

Comma-separated email addresses of blind copy recipients.

`subject`

Subject line of the email.

`message`

Body of the email.

`mime_type`

Mime type of the message. The default is `text/plain; charset=us-ascii`.

`priority`

Priority of the email The default is `3`.

### Examples

The following anonymous block sends a simple email message.

```sql
DECLARE
    v_sender        VARCHAR2(30);
    v_recipients    VARCHAR2(60);
    v_subj          VARCHAR2(20);
    v_msg           VARCHAR2(200);
BEGIN
    v_sender := 'jsmith@enterprisedb.com';
    v_recipients := 'ajones@enterprisedb.com,rrogers@enterprisedb.com';
    v_subj := 'Holiday Party';
    v_msg := 'This year''s party is scheduled for Friday, Dec. 21 at ' ||
             '6:00 PM. Please RSVP by Dec. 15th.';
    UTL_MAIL.SEND(v_sender,v_recipients,NULL,NULL,v_subj,v_msg);
END;
```

## SEND\_ATTACH\_RAW

The `SEND_ATTACH_RAW` procedure sends an email to an SMTP server with an attachment containing either `BYTEA` data or a large object (identified by the large object's `OID`). You can write the call to `SEND_ATTACH_RAW` in two ways:

```sql
SEND_ATTACH_RAW(<sender> VARCHAR2, <recipients> VARCHAR2,
  <cc> VARCHAR2, <bcc> VARCHAR2, <subject> VARCHAR2, <message> VARCHAR2,
  <mime_type> VARCHAR2, <priority> PLS_INTEGER,
  <attachment> BYTEA[, <att_inline> BOOLEAN
  [, <att_mime_type> VARCHAR2[, <att_filename> VARCHAR2 ]]])
```

or

```sql
SEND_ATTACH_RAW(<sender> VARCHAR2, <recipients> VARCHAR2,
  <cc> VARCHAR2, <bcc> VARCHAR2, <subject> VARCHAR2, <message> VARCHAR2,
  <mime_type> VARCHAR2, <priority> PLS_INTEGER, <attachment> OID
  [, <att_inline> BOOLEAN [, <att_mime_type> VARCHAR2
  [, <att_filename> VARCHAR2 ]]])
```

### Parameters

`sender`

Email address of the sender.

`recipients`

Comma-separated email addresses of the recipients.

`cc`

Comma-separated email addresses of copy recipients.

`bcc`

Comma-separated email addresses of blind copy recipients.

`subject`

Subject line of the email.

`message`

Body of the email.

`mime_type`

Mime type of the message. The default is `text/plain; charset=us-ascii`.

`priority`

Priority of the email. The default is `3`.

`attachment`

The attachment.

`att_inline`

If set to `TRUE`, then the attachment is viewable inline. The default is `TRUE`.

`att_mime_type`

Mime type of the attachment. The default is `application/octet`.

`att_filename`

The file name containing the attachment. The default is `NULL`.

## SEND\_ATTACH\_VARCHAR2

The `SEND_ATTACH_VARCHAR2` procedure sends an email to an SMTP server with a text attachment.

```sql
SEND_ATTACH_VARCHAR2(<sender> VARCHAR2, <recipients> VARCHAR2, <cc>
VARCHAR2, <bcc> VARCHAR2, <subject> VARCHAR2, <message> VARCHAR2,
<mime_type> VARCHAR2, <priority> PLS_INTEGER, <attachment> VARCHAR2 [,
<att_inline> BOOLEAN [, <att_mime_type> VARCHAR2 [, <att_filename> VARCHAR2
]]])
```

### Parameters

`sender`

Email address of the sender.

`recipients`

Comma-separated email addresses of the recipients.

`cc`

Comma-separated email addresses of copy recipients.

`bcc`

Comma-separated email addresses of blind copy recipients.

`subject`

Subject line of the email.

`message`

Body of the email.

`mime_type`

Mime type of the message. The default is `text/plain; charset=us-ascii`.

`priority`

Priority of the email The default is `3.`

`attachment`

The `VARCHAR2` attachment.

`att_inline`

If set to `TRUE`, then the attachment is viewable inline. The default is `TRUE`.

`att_mime_type`

Mime type of the attachment. The default is `text/plain; charset=us-ascii`.

`att_filename`

The file name containing the attachment. The default is `NULL`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
