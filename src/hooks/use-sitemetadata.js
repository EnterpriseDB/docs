import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
          imageUrl
          algoliaIndex
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
