---
title: PII detection and redaction
description: Find personally identifiable information (PII) in text and replace it with placeholders by calling the AIDB PII extract and redact functions with a registered token classifier model.
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/sql-functions/pii-detection/
lastModified: 2026-11-26T13:15:29+05:30
---

# PII detection and redaction

Use the AIDB PII functions to find personally identifiable information (PII) in text and to redact it. The model labels each piece of text it recognizes as PII, such as a name, email address, or account number. AIDB returns these labeled pieces, called spans, or replaces them with placeholders.

> **Note**
>
> PII detection is a model's best effort, not an anonymization guarantee. The model can miss names it hasn't seen and can flag things that aren't PII, such as public names or reference numbers like `INV-2024-0042`. `openai/privacy-filter` works best on English text. Review results before relying on them for compliance, and use `labels` and `min_score` to tune them.

Call these four SQL functions with the model:

| Function                   | Returns                                                                 |
| -------------------------- | ----------------------------------------------------------------------- |
| `aidb.pii_extract()`       | One row per span: `label`, `start_pos`, `length`, `text`, `score`.      |
| `aidb.pii_extract_batch()` | The same for an array of texts, with `input_index`, the array position. |
| `aidb.pii_redact()`        | The text with each span replaced by a placeholder.                      |
| `aidb.pii_redact_batch()`  | One redacted text per array element, in array order.                    |

For the parameters and return types, see the [Functions reference](https://www.enterprisedb.com/docs/aidb/latest/reference/functions/#aidbpii_extract).

## Registering a model for PII detection

Register a model with the `onnx_token_classifier` provider before you call the functions:

```sql
SELECT aidb.create_model(
    name     => 'pii',
    provider => 'onnx_token_classifier',
    config   => jsonb_build_object(
        'hf_model', 'openai/privacy-filter',
        'onnx_file', 'onnx/model_quantized.onnx'
    )
);
```

The examples on this page use this model, named `pii`. For the tested models, config keys, and ONNX Runtime requirements, see [`onnx_token_classifier`](https://www.enterprisedb.com/docs/aidb/latest/integrating-models/integrated-models/#onnx_token_classifier).

## Extracting PII

Run `aidb.pii_extract()` to get one row per span. `start_pos` is 1-based and `length` is in characters. `score` is the model's mean confidence over the span's tokens, from 0 to 1. It's a confidence signal, not a calibrated probability.

```sql
SELECT label, start_pos, length, text, round(score::numeric, 4) AS score
FROM aidb.pii_extract('pii',
    'Call Alice Smith at +1 (415) 555-0123 or visit 221B Baker Street, London.');
```

```output title="Output"
      label      | start_pos | length |           text            | score
-----------------+-----------+--------+---------------------------+--------
 private_person  |         6 |     11 | Alice Smith               | 1.0000
 private_phone   |        21 |     17 | +1 (415) 555-0123         | 1.0000
 private_address |        48 |     25 | 221B Baker Street, London | 0.7614
(3 rows)
```

## Redacting PII

Run `aidb.pii_redact()` to replace each span with a placeholder. By default, the placeholder is the label in uppercase between angle brackets:

```sql
SELECT aidb.pii_redact('pii',
    'My name is Harry Potter and my email is harry.potter@hogwarts.edu.');
```

```output title="Output"
                          pii_redact
--------------------------------------------------------------
 My name is <PRIVATE_PERSON> and my email is <PRIVATE_EMAIL>.
(1 row)
```

A text with no PII comes back unchanged.

## Processing batches

To process many texts, run the batch functions. They classify all array elements together, which is faster than one call per row. In `aidb.pii_extract_batch()`, `input_index` is the element's 1-based array position. An element with no PII produces no rows.

```sql
SELECT input_index, label, start_pos, length, text, round(score::numeric, 4) AS score
FROM aidb.pii_extract_batch('pii', ARRAY[
    'Hi, I''m Jordan Lee (jordan.lee@acme-mail.com). My card 5500 0000 0000 0004 was charged twice on 3 Feb 2025. Call me back at 020 7946 0958.',
    'Please transfer the deposit to IBAN DE89 3704 0044 0532 0130 00, reference INV-2024-0042, before Friday.',
    'The quarterly report shows revenue grew 12% year over year, driven by enterprise renewals.'
]);
```

```output title="Output"
 input_index |     label      | start_pos | length |               text               | score
-------------+----------------+-----------+--------+----------------------------------+--------
           1 | private_person |         9 |     10 | Jordan Lee                       | 1.0000
           1 | private_email  |        21 |     24 | jordan.lee@acme-mail.com         | 1.0000
           1 | account_number |        56 |     19 | 5500 0000 0000 0004              | 0.9844
           1 | private_date   |        97 |     10 | 3 Feb 2025                       | 1.0000
           1 | private_phone  |       125 |     13 | 020 7946 0958                    | 1.0000
           2 | account_number |        32 |     32 | IBAN DE89 3704 0044 0532 0130 00 | 0.9725
           2 | account_number |        76 |     13 | INV-2024-0042                    | 1.0000
(7 rows)
```

`aidb.pii_redact_batch()` returns its results in array order, and a NULL element gives NULL. `WITH ORDINALITY` numbers the results by array position:

```sql
SELECT * FROM aidb.pii_redact_batch('pii', ARRAY[
    'Hi, I''m Jordan Lee (jordan.lee@acme-mail.com). My card 5500 0000 0000 0004 was charged twice on 3 Feb 2025. Call me back at 020 7946 0958.',
    'Please transfer the deposit to IBAN DE89 3704 0044 0532 0130 00, reference INV-2024-0042, before Friday.',
    'The quarterly report shows revenue grew 12% year over year, driven by enterprise renewals.',
    NULL
]) WITH ORDINALITY AS r(redacted, n);
```

```output title="Output"
                                                                  redacted                                                                  | n
--------------------------------------------------------------------------------------------------------------------------------------------+---
 Hi, I'm <PRIVATE_PERSON> (<PRIVATE_EMAIL>). My card <ACCOUNT_NUMBER> was charged twice on <PRIVATE_DATE>. Call me back at <PRIVATE_PHONE>. | 1
 Please transfer the deposit to <ACCOUNT_NUMBER>, reference <ACCOUNT_NUMBER>, before Friday.                                                | 2
 The quarterly report shows revenue grew 12% year over year, driven by enterprise renewals.                                                 | 3
                                                                                                                                            | 4
(4 rows)
```

## Setting per-call options

All four functions take an optional `options` JSONB argument. An unknown key is an error.

| Key              | Default                      | Description                                                                                                                                                                                                                                   |
| ---------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `labels`         | All of the model's labels    | Keep only spans with these labels, for example, `["private_email", "private_phone"]`. Each name must be one of the model's labels. An unknown name causes an error that lists the valid ones.                                                 |
| `min_score`      | 0                            | Drop spans that score below this value, from 0 to 1.                                                                                                                                                                                          |
| `placeholder`    | `<{LABEL}>`                  | Redaction functions only. Sets the replacement for each span. `{LABEL}` becomes the label in uppercase, and `{label}` the label as is.                                                                                                        |
| `viterbi_biases` | The model's `viterbi_biases` | Advanced. Six decoder biases that trade precision against recall: `background_stay`, `background_to_start`, `inside_to_continue`, `inside_to_end`, `end_to_background`, and `end_to_start`. Set all six. Each must be between -1000 and 1000. |

```sql
SELECT aidb.pii_redact('pii', body,
    options => '{"labels": ["private_email", "private_phone", "secret"],
                 "placeholder": "[{label}]"}')
FROM tickets;
```

`labels` is an allow-list: spans with other labels stay in the text. To redact a US Social Security number, include `private_date` in `labels`, because `openai/privacy-filter` labels it as `private_date`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
