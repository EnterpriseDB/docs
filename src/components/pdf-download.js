import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Icon from './icon';

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

  const productPath = path
    .split('/')
    .slice(0, 3)
    .join('/');
  const file = data.allFile.nodes.find(
    pdf => `/${pdf.relativeDirectory}` === productPath,
  );

  if (file) {
    return (
      <div className="mt-4">
        <a href={file.publicURL}>
          <Icon
            iconName="PDF"
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
