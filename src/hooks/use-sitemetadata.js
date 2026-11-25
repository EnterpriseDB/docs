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
          algoliaAppId
          algoliaSearchKey
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
