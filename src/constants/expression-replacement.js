import { products } from "./products.js";
import semver from "semver";

export const expressionRE =
  /(?<!\\)\{\{(?<command>\w+)(?:\((?<product>[^)]+)\)){0,1}\.(?<type>[^}]+)\}\}/;
const nameCodes = {
  ln: "name",
  short: "shortName",
  abbr: "abbreviation",
  ccn: "commonCommandName",
};

export default function expressionReplacement({
  text,
  currentProduct,
  currentVersion,
  currentFullVersion,
  productVersions,
  filename,
  position,
}) {
  if (typeof text !== "string" || !text.includes("{{")) return text;

  if (!currentProduct && filename)
    currentProduct = filename.split("product_docs/docs/")[1]?.split("/")?.at(0);
  if (!currentVersion && filename)
    currentVersion = filename.split("product_docs/docs/")[1]?.split("/")?.at(1);

  let errorContext = filename;
  if (errorContext && position)
    errorContext += `:${position.start?.line}:${position.start?.column}`;

  text = text.replace(
    new RegExp(expressionRE, "g"),
    (match, p1, p2, p3, offset, s, { command, product, type }) => {
      switch (command) {
        case "name":
          return getProductName({
            product: product || currentProduct,
            type,
            errorContext,
          });
        case "version":
          return getProductVersion({
            product,
            currentProduct,
            currentVersion,
            currentFullVersion,
            productVersions,
            type,
            errorContext,
          });
        default:
          break;
      }
      return match;
    },
  );

  return text;
}

export function getProductName({ product, type, errorContext }) {
  if (!product) {
    const error = `Product not specified for name lookup - implicit product won't work in code or headings in non-versioned products.`;
    console.error(`${errorContext} ${error}.`);
    return `[error: ${error}]`;
  }

  const productDef = products[product];
  if (!productDef) {
    const error = `Product ${product} not found for name lookup`;
    console.error(`${errorContext} ${error}.`);
    return `[error: ${error}]`;
  }
  const nameType = nameCodes[type];
  if (!nameType) {
    const error = `Unknown name type: ${type} for name lookup.`;
    console.error(`${errorContext} ${error}.`);
    return `[error: ${error}]`;
  }

  const name = productDef[nameType];
  if (!name) {
    const error = `Product ${product} does not have ${nameType} defined for name lookup`;
    console.error(`${errorContext} ${error}.`);
    return `[error: ${error}]`;
  }
  return name;
}

export function getProductVersion({
  product,
  currentProduct,
  currentVersion,
  currentFullVersion,
  productVersions,
  type,
  errorContext,
}) {
  if (!currentVersion && !product && !currentProduct) {
    const error = `Product not specified for version lookup - implicit product won't work in code or headings in non-versioned products.`;
    console.error(`${errorContext} ${error}.`);
    return `[error: ${error}]`;
  }

  let version = currentVersion;
  let fullVersion = currentFullVersion || version;
  if (product && product !== currentProduct) {
    version = productVersions ? productVersions[product][0] : "";
    fullVersion = version;
  }

  if (type === "full") return fullVersion;
  if (type === "short") return version;
  const semantic = semver.valid(semver.coerce(fullVersion));
  if (!semantic) return version;
  switch (type) {
    case "major":
      return semver.major(semantic);
    case "minor":
      return semver.minor(semantic);
    case "patch":
      return semver.patch(semantic);
    default:
      break;
  }
  const error = `don't know what you mean by a '${type}' version`;
  console.error(`${errorContext} ${error}.`);
  return `[error: ${error}]`;
}
