import { useStaticQuery, graphql } from 'gatsby';

const useActiveSources = () => {
  const data = useStaticQuery(graphql`
    {
      edbSources {
        activeSources
      }
    }
  `);

  return data.edbSources.activeSources.reduce((obj, val) => {
    obj[`${val}Active`] = true;
    return obj;
  }, {});
};

export default useActiveSources;
