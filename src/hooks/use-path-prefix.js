import { useStaticQuery, graphql } from "gatsby";

const usePathPrefix = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        pathPrefix
        siteMetadata {
          isDevelopment
        }
      }
    }
  `);

  if (data.site.siteMetadata.isDevelopment) {
    return "";
  }

  return data.site.pathPrefix || "";
};

export default usePathPrefix;
