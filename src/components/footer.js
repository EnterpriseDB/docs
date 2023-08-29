import React, { useEffect, useState } from "react";
import { Link } from "./";
import { useStaticQuery, graphql } from "gatsby";

const TimestampLink = ({ timestamp, githubFileLink }) => {
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
  const [url, setUrl] = useState(githubFileLink);
  useEffect(() => {
    if (githubFileLink)
      setUrl(
        githubFileLink.replace(
          `${data.edbGit.docsRepoUrl}/commits/${data.edbGit.branch}/`,
          `${data.edbGit.docsRepoUrl}/commits/${data.edbGit.sha}/`,
        ),
      );
  }, [
    githubFileLink,
    data.edbGit.docsRepoUrl,
    data.edbGit.branch,
    data.edbGit.sha,
  ]);

  if (timestamp) {
    return (
      <>
        ·
        <div className="d-inline-block mx-2">
          {url ? (
            <a href={url}> Modified {timestamp.split("T")[0]} </a>
          ) : (
            <span>Modified {timestamp.split("T")[0]}</span>
          )}
        </div>
      </>
    );
  } else if (url) {
    return (
      <>
        ·
        <div className="d-inline-block mx-2">
          <a href={url}>File History</a>
        </div>
      </>
    );
  } else {
    return null;
  }
};

const Footer = ({ timestamp, githubFileLink }) => (
  <footer className="mt-5 opacity-6 small text-center">
    <span className="text-muted mx-2">© EDB</span>·
    <Link className="text-muted mx-2" to="https://www.enterprisedb.com/gdpr">
      GDPR
    </Link>
    ·
    <Link className="text-muted mx-2" to="/security">
      Security
    </Link>
    .
    <Link
      className="text-muted mx-2"
      to="https://www.enterprisedb.com/privacy-policy"
    >
      Privacy Policy
    </Link>
    ·
    <Link
      className="text-muted mx-2"
      to="https://www.enterprisedb.com/terms-use"
    >
      Terms of Use
    </Link>
    ·
    <Link
      className="text-muted mx-2"
      to="https://www.enterprisedb.com/trademarks"
    >
      Trademarks
    </Link>
    <TimestampLink timestamp={timestamp} githubFileLink={githubFileLink} />
  </footer>
);

export default Footer;
