import React, { useEffect, useState } from "react";
import { Link } from "./";
import { useStaticQuery, graphql } from "gatsby";

const TimestampLink = ({ timestamp, fileRelativePath }) => {
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
  const [editBranch, setEditBranch] = useState("develop");
  useEffect(() => {
    setHistoryRef(data.edbGit.sha);
    // don't encourage folks to edit on main - set the edit links to develop in production builds
    setEditBranch(
      data.edbGit.branch === "main" ? "develop" : data.edbGit.branch,
    );
  }, [data.edbGit.branch, data.edbGit.sha]);

  const url = `${data.edbGit.docsRepoUrl}/commits/${historyRef}${fileRelativePath}`;

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

const Footer = ({ timestamp, fileRelativePath }) => (
  <footer className="mt-5 opacity-6 small text-center">
    <span className="text-muted mx-2">© EDB</span>·
    <Link className="text-muted mx-2" to="https://www.enterprisedb.com/gdpr">
      GDPR
    </Link>
    ·
    <Link className="text-muted mx-2" to="https://trust.enterprisedb.com/">
      Trust Center
    </Link>
    ·
    <Link className="text-muted mx-2" to="/security">
      Security
    </Link>
    ·
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
    <TimestampLink timestamp={timestamp} fileRelativePath={fileRelativePath} />
  </footer>
);

export default Footer;
