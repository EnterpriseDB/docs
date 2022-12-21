import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    siteBuildMetadata {
      buildTime
    }
    edbGit {
      branch
      sha
    }
  }
`;

const BuildInfo = ({ data }) => (
  <div style={{ marginLeft: "5px" }}>
    <p>HEAD: {data.edbGit.sha}</p>
    <p>Branch: {data.edbGit.branch}</p>
    <p>Build Time: {new Date(data.siteBuildMetadata.buildTime).toString()}</p>
  </div>
);

export default BuildInfo;
