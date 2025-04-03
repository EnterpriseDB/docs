import { useProductContext } from "./product-context";
import { getProductVersion } from "../constants/expression-replacement";

export default function ProductVersion({ productShortcode, type }) {
  const productContext = useProductContext();
  const {
    product: currentProduct,
    version: currentVersion,
    fullVersion: currentFullVersion,
    productVersions,
    absoluteFilePath,
  } = productContext;
  const errorContext = absoluteFilePath;

  return getProductVersion({
    product: productShortcode,
    currentProduct,
    currentVersion,
    currentFullVersion,
    productVersions,
    type,
    errorContext,
  });
}
