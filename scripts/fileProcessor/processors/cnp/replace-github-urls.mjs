// Replace URLs beginning with the following patterns...
// - https://raw.githubusercontent.com/EnterpriseDB/cloud-native-postgres/main/config/manager/default-monitoring.yaml 
// - https://github.com/EnterpriseDB/cloud-native-postgres/tree/main/docs/
// - https://raw.githubusercontent.com/EnterpriseDB/cloud-native-postgres/main/docs/src/
// ...with equivalent URLs referencing postgres for kubernetes in the public EDB Docs repo

const replacements = [
  {pattern: /https:\/\/raw\.githubusercontent\.com\/EnterpriseDB\/cloud-native-postgres\/main\/config\/manager\/default-monitoring\.yaml/g, replacement: "default-monitoring.yaml"},
  {pattern: /https:\/\/github\.com\/EnterpriseDB\/cloud-native-postgres\/tree\/main\/docs\/src\//g, replacement: "https://github.com/EnterpriseDB/docs/tree/main/product_docs/docs/postgres_for_kubernetes/1/"},
  {pattern: /https:\/\/github\.com\/EnterpriseDB\/cloud-native-postgres\/blob\/main\/docs\/src\//g, replacement: "https://github.com/EnterpriseDB/docs/blob/main/product_docs/docs/postgres_for_kubernetes/1/"},
  {pattern: /https:\/\/raw\.githubusercontent\.com\/EnterpriseDB\/cloud-native-postgres\/main\/docs\/src\//g, replacement: "https://raw.githubusercontent.com/EnterpriseDB/docs/main/product_docs/docs/postgres_for_kubernetes/1/"},
];

export const process = (filename, content) => {
  for (const r of replacements)
    content = content.replace(r.pattern, r.replacement);

  return {
    newFilename: filename,
    newContent: content,
  };
};
