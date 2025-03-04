import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Icon, { iconNames } from "./icon";

export const FeedbackDropdown = ({
  fileRelativePath,
  product,
  version,
  title,
}) => {
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
    `Feedback on ${product} ${version} - "${title}"`,
  )}&context=${encodeURIComponent(
    `${data.edbGit.docsRepoUrl}/blob/${historyRef}${fileRelativePath}\n`,
  )}`;

  return (
    <DropdownButton
      className="ms-3"
      size="sm"
      variant="outline-info"
      id="page-actions-button"
      role="menu"
      title={
        //this seems absolutely buck wild to me, but it's what StackOverflow suggests 🤷🏻‍♂️
        <Icon
          iconName={iconNames.ELLIPSIS}
          className="fill-orange me-2"
          width="15"
          height="15"
        />
      }
    >
      <Dropdown.Item
        href={githubIssuesUrl + "&template=problem-with-topic.yaml&labels=bug"}
        target="_blank"
        rel="noreferrer"
        role="menuitem"
      >
        Report a problem
      </Dropdown.Item>
      <Dropdown.Item
        href={
          githubIssuesUrl + "&template=product-feedback.yaml&labels=feedback"
        }
        target="_blank"
        rel="noreferrer"
        role="menuitem"
      >
        Give product feedback
      </Dropdown.Item>
    </DropdownButton>
  );
};
