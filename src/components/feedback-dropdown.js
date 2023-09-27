import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Icon, { iconNames } from "./icon";

export const FeedbackDropdown = ({ githubIssuesLink }) => {
  const data = useStaticQuery(graphql`
    {
      edbGit {
        docsRepoUrl
        branch
        sha
      }
    }
  `);

  // add the last commit SHA to paths dynamically to minimize page changes
  const [url, setUrl] = useState();
  useEffect(() => {
    if (githubIssuesLink)
      setUrl(
        githubIssuesLink.replace(
          encodeURIComponent(
            `${data.edbGit.docsRepoUrl}/commits/${data.edbGit.branch}/`,
          ),
          encodeURIComponent(
            `${data.edbGit.docsRepoUrl}/commits/${data.edbGit.sha}/`,
          ),
        ),
      );
  }, [
    githubIssuesLink,
    data.edbGit.docsRepoUrl,
    data.edbGit.branch,
    data.edbGit.sha,
  ]);

  return (
    <DropdownButton
      className="ms-3"
      size="sm"
      variant="outline-info"
      id="page-actions-button"
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
        href={url + "&template=problem-with-topic.yaml"}
        target="_blank"
        rel="noreferrer"
      >
        Report a problem
      </Dropdown.Item>
      <Dropdown.Item
        href={url + "&template=product-feedback.yaml&labels=feedback"}
        target="_blank"
        rel="noreferrer"
      >
        Give product feedback
      </Dropdown.Item>
    </DropdownButton>
  );
};
