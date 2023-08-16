import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon, { iconNames } from "./icon";
import usePathPrefix from "../hooks/use-path-prefix";

const PdfDownload = ({ pagePath }) => {
  const data = useStaticQuery(graphql`
    {
      allPublicFile(filter: { ext: { eq: ".pdf" } }) {
        nodes {
          absolutePath
          urlPath
        }
      }
    }
  `);

  const productPath = pagePath.split("/").slice(0, 3).join("/");

  const file = data.allPublicFile.nodes.find((pdf) => {
    const productVersionPath = pdf.absolutePath
      .split("/")
      .slice(-3, -1)
      .join("/");
    return `/${productVersionPath}` === productPath;
  });

  const pathPrefix = usePathPrefix();

  if (file) {
    return (
      <div className="mt-4">
        <a href={pathPrefix + file.urlPath}>
          <Icon
            iconName={iconNames.PDF}
            className="fill-orange mr-1 position-relative top-minus-2"
            width="16"
            height="auto"
          />
          Download PDF
        </a>
      </div>
    );
  }
  return null;
};

export default PdfDownload;
