import React from "react";
import { graphql } from "gatsby";
import CodeBlock from "../components/code-block";

export const query = graphql`
  query ($nodeId: String!) {
    file(id: { eq: $nodeId }) {
      fields {
        content
      }
    }
  }
`;

const FileTemplate = ({ data }) => {
  return (
    <CodeBlock className="p-3 language-yaml">
      {data.file.fields.content}
    </CodeBlock>
  );
};

export default FileTemplate;
