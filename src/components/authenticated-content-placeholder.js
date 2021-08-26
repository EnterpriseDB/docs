import React from "react";

function AuthenticatedContentPlaceholder({ target, topic, description = "" }) {
  return (
    <div class="admonition admonition-note alert alert--secondary">
      <div class="admonition-heading">
        <h5>Details on this topic are in a protected area:</h5>
      </div>
      <div class="admonition-content">
        <p>
          <a href={target} title={description}>
            {topic}
          </a>{" "}
        </p>
        <p>
          If you need access, please{" "}
          <a href="https://www.enterprisedb.com/contact">contact us</a>.
        </p>
      </div>
    </div>
  );
}

export default AuthenticatedContentPlaceholder;
