import { useMemo } from "react";
import algoliasearch from "algoliasearch/lite";
import useSiteMetadata from "./use-sitemetadata";

// Uses the build-time secured key (restricted to this build's index);
// see algoliaSearchKey in gatsby-config.js.
const useSearchClient = () => {
  const { algoliaAppId, algoliaSearchKey } = useSiteMetadata();
  return useMemo(
    () => algoliasearch(algoliaAppId, algoliaSearchKey),
    [algoliaAppId, algoliaSearchKey],
  );
};

export default useSearchClient;
