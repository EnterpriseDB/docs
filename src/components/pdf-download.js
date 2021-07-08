import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon from "./icon";

const PdfDownload = ({ path }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { ext: { eq: ".pdf" } }) {
        nodes {
          publicURL
          absolutePath
        }
      }
    }
  `);

  const productPath = path.split("/").slice(0, 3).join("/");

  const file = data.allFile.nodes.find((pdf) => {
    const productVersionPath = pdf.absolutePath
      .split("/")
      .slice(-3, -1)
      .join("/");
    return `/${productVersionPath}` === productPath;
  });

  if (file) {
    return (
      <div className="mt-4">
        <a href={file.publicURL}>
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
