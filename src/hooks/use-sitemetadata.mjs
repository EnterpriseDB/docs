import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          baseUrl
          imageUrl
          siteUrl
          algoliaIndex
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
