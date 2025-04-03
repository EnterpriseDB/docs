import { useProductContext } from "./product-context";
import { getProductName } from "../constants/expression-replacement";

export default function ProductName({ productShortcode, type }) {
  const productContext = useProductContext();
  const { product: currentProduct, absoluteFilePath } = productContext;
  const errorContext = absoluteFilePath;

  return getProductName({
    product: productShortcode || currentProduct,
    type,
    errorContext,
  });
}
