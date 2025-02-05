import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

export default function EditLink({
  editTarget,
  fileRelativePath,
  originalFilePath,
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
  const [editBranch, setEditBranch] = useState("develop");
  useEffect(() => {
    // don't encourage folks to edit on main - set the edit links to develop in production builds
    setEditBranch(
      data.edbGit.branch === "main" ? "develop" : data.edbGit.branch,
    );
  }, [data.edbGit.branch]);

  const githubEditUrl = composeEditURL(
    editTarget,
    originalFilePath,
    data.edbGit.docsRepoUrl,
    editBranch,
    fileRelativePath,
  );

  return (
    <a
      href={githubEditUrl}
      className="btn btn-sm btn-primary px-4 text-nowrap"
      title="Navigate to the GitHub editor for this file, allowing you to propose changes for review by the EDB Documentation Team"
      {...rest}
    >
      Suggest edits
    </a>
  );
}

function composeEditURL(
  editTarget,
  originalFilePath,
  docsRepoUrl,
  branch,
  fileRelativePath,
) {
  if (editTarget === "originalFilePath" && originalFilePath) {
    // two options here:
    // 1. a full URL (presumably pointing at a file on github, but could be anything)
    // 2. a path to a file in this repo, relative to the root
    if (originalFilePath.startsWith("http"))
      return originalFilePath.replace(/\/blob\//, "/edit/");
    fileRelativePath = "/" + originalFilePath;
  }

  return fileRelativePath && `${docsRepoUrl}/edit/${branch}${fileRelativePath}`;
}
