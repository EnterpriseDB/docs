import { useFlags } from "gatsby-plugin-launchdarkly";

const FeatureFlag = ({ flagName, children }) => {
  const flags = useFlags();
  if (Object.keys(flagName).length && !(flagName in flags))
    console.warn("No such feature flag: " + flagName);
  if (flags[flagName]) {
    return children;
  }
  return null;
};

export default FeatureFlag;
