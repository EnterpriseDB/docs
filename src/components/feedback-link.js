import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function FeedbackLink({
  children,
  fileRelativePath,
  title,
  template = "product-feedback.yaml",
  labels = ["feedback"],
  ...rest
}) {
  const data = useStaticQuery(graphql`
    {
      edbGit {
        docsRepoUrl
        branch
        sha
      }
    }
  `);

  // to minimize deployment time, static render all paths relative to the develop branch (on staging / draft) or main (production)
  // then swap in actual ref on first live render.
  const [historyRef, setHistoryRef] = useState(
    data.edbGit.branch === "main" ? data.edbGit.branch : "develop",
  );
  useEffect(() => {
    setHistoryRef(data.edbGit.sha);
  }, [data.edbGit.branch, data.edbGit.sha]);

  const githubIssuesUrl = `${data.edbGit.docsRepoUrl}/issues/new?title=${encodeURIComponent(
    title,
  )}&context=${encodeURIComponent(
    `${data.edbGit.docsRepoUrl}/blob/${historyRef}${fileRelativePath}\n`,
  )}`;

  return (
    <a
      href={
        githubIssuesUrl + `&template=${template}&labels=${labels.join(",")}`
      }
      {...rest}
    >
      {children}
    </a>
  );
}
