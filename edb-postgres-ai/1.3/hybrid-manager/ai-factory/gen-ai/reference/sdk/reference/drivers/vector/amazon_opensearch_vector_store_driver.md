---
title: amazon_opensearch_vector_store_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/amazon_opensearch_vector_store_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# amazon\_opensearch\_vector\_store\_driver

<span id="griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver"></span>

Bases:
[`OpenSearchVectorStoreDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/opensearch/#griptape.drivers.vector.opensearch.OpenSearchVectorStoreDriver "OpenSearchVectorStoreDriver (griptape.drivers.vector.opensearch.OpenSearchVectorStoreDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Type                     | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/amazon_opensearch_vector_store_driver/#griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.session" title="session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.session)"><code class="language-python">session</code></a>                                                                                                       | `Session`                | The boto3 session to use.<br/>                                                                                                                |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/amazon_opensearch_vector_store_driver/#griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.service" title="service = field(default='es', kw_only=True)           class-attribute       instance-attribute    (griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.service)"><code class="language-python">service</code></a>                                                                                                                                                                 | `str`                    | Service name for AWS Signature v4. Values can be 'es' or 'aoss' for for OpenSearch Serverless. Defaults to 'es'.<br/>                         |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/amazon_opensearch_vector_store_driver/#griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.http_auth" title="http_auth = field(default=Factory(lambda self: import_optional_dependency('opensearchpy').AWSV4SignerAuth(self.session.get_credentials(), self.session.region_name, self.service), takes_self=True))           class-attribute       instance-attribute    (griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.http_auth)"><code class="language-python">http\_auth</code></a> | `str \| tuple[str, str]` | The HTTP authentication credentials to use. Defaults to using credentials in the boto3 session.<br/>                                          |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/vector/opensearch_vector_store_driver/#griptape.drivers.vector.opensearch_vector_store_driver.OpenSearchVectorStoreDriver.client" title="client() (griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.client)"><code class="language-python">client</code></a>                                                                                                                                                                                                                                                                                 | `OpenSearch`             | An optional OpenSearch client to use. Defaults to a new client using the host, port, http\_auth, use\_ssl, and verify\_certs attributes.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/vector/amazon\_opensearch\_vector\_store\_driver.py</code>

</summary>

```python
@define
class AmazonOpenSearchVectorStoreDriver(OpenSearchVectorStoreDriver):
    """A Vector Store Driver for Amazon OpenSearch.

    Attributes:
        session: The boto3 session to use.
        service: Service name for AWS Signature v4. Values can be 'es' or 'aoss' for for OpenSearch Serverless. Defaults to 'es'.
        http_auth: The HTTP authentication credentials to use. Defaults to using credentials in the boto3 session.
        client: An optional OpenSearch client to use. Defaults to a new client using the host, port, http_auth, use_ssl, and verify_certs attributes.
    """

    session: Session = field(default=Factory(lambda: import_optional_dependency("boto3").Session()), kw_only=True)
    service: str = field(default="es", kw_only=True)
    http_auth: str | tuple[str, str] = field(
        default=Factory(
            lambda self: import_optional_dependency("opensearchpy").AWSV4SignerAuth(
                self.session.get_credentials(),
                self.session.region_name,
                self.service,
            ),
            takes_self=True,
        ),
    )

    def upsert_vector(
        self,
        vector: list[float],
        *,
        vector_id: Optional[str] = None,
        namespace: Optional[str] = None,
        meta: Optional[dict] = None,
        **kwargs,
    ) -> str:
        """Inserts or updates a vector in OpenSearch.

        If a vector with the given vector ID already exists, it is updated; otherwise, a new vector is inserted.
        Metadata associated with the vector can also be provided.
        """
        vector_id = vector_id or str_to_hash(str(vector))
        doc = {"vector": vector, "namespace": namespace, "metadata": meta}
        doc.update(kwargs)
        if self.service == "aoss":
            response = self.client.index(index=self.index_name, body=doc)
        else:
            response = self.client.index(index=self.index_name, id=vector_id, body=doc)

        return response["_id"]
```

</details>

- `http_auth = field(default=Factory(lambda self: import_optional_dependency('opensearchpy').AWSV4SignerAuth(self.session.get_credentials(), self.session.region_name, self.service), takes_self=True))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.http_auth"></span>

- `service = field(default='es', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.service"></span>

- `session = field(default=Factory(lambda: import_optional_dependency('boto3').Session()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.session"></span>

<span id="griptape.drivers.vector.amazon_opensearch_vector_store_driver.AmazonOpenSearchVectorStoreDriver.upsert_vector"></span>

### upsert\_vector(vector, \*, vector\_id=None, namespace=None, meta=None, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/drivers/vector/amazon\_opensearch\_vector\_store\_driver.py</code>

</summary>

```python
def upsert_vector(
    self,
    vector: list[float],
    *,
    vector_id: Optional[str] = None,
    namespace: Optional[str] = None,
    meta: Optional[dict] = None,
    **kwargs,
) -> str:
    """Inserts or updates a vector in OpenSearch.

    If a vector with the given vector ID already exists, it is updated; otherwise, a new vector is inserted.
    Metadata associated with the vector can also be provided.
    """
    vector_id = vector_id or str_to_hash(str(vector))
    doc = {"vector": vector, "namespace": namespace, "metadata": meta}
    doc.update(kwargs)
    if self.service == "aoss":
        response = self.client.index(index=self.index_name, body=doc)
    else:
        response = self.client.index(index=self.index_name, id=vector_id, body=doc)

    return response["_id"]
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
