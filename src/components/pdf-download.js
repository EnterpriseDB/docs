import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PdfDownload = ({ path }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {ext: {eq: ".pdf"}}) {
        nodes {
          publicURL
          relativeDirectory
        }
      }
    }
  `);

  const file = data.allFile.nodes.find(pdf => `/${pdf.relativeDirectory}` === path);

  if (file) {
    return (
      <a href={file.publicURL}>Download PDF</a>
    )
  }
  return null;
};

export default PdfDownload;
