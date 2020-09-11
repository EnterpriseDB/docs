import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const PdfDownload = ({ path }) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { ext: { eq: ".pdf" } }) {
        nodes {
          publicURL
          relativeDirectory
        }
      }
    }
  `);

  const productPath = path.split('/').slice(0,3).join('/');
  const file = data.allFile.nodes.find(
    pdf => `/${pdf.relativeDirectory}` === productPath,
  );

  if (file) {
    return (
      <div>
        <span className="mt-3 mb-2 font-weight-bold text-muted text-uppercase small d-block">
          Other Versions
        </span>
        <a href={file.publicURL}>
          Download PDF
        </a>
      </div>
    );
  }
  return null;
};

export default PdfDownload;
