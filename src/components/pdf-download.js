import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Icon, { iconNames } from "./icon";
import usePathPrefix from "../hooks/use-path-prefix";

const PdfDownload = ({ pagePath, product, version, hidePDF }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { pdf: { eq: true } } }) {
        nodes {
          fields {
            path
          }
        }
      }
    }
  `);

  const pathPrefix = usePathPrefix();

  if (hidePDF) {
    return null;
  }

  const pdfBase = data.allMdx.nodes.find((pdfIndex) => {
    const basePath = pdfIndex.fields.path;
    return pagePath.startsWith(basePath);
  })?.fields?.path;

  if (!pdfBase || !product) return null;

  const pdfFile =
    pathPrefix +
    "/pdfs" +
    pdfBase +
    product +
    (version ? "_v" + version : "") +
    "_documentation.pdf";

  return (
    <div className="mt-4">
      <a href={pdfFile}>
        <Icon
          iconName={iconNames.PDF}
          className="fill-orange me-1 position-relative top-minus-2"
          width="16"
          height="auto"
        />
        Download PDF
      </a>
    </div>
  );
};

export default PdfDownload;
