// Replace URLs beginning with the following patterns...
// - https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/pg4k-pgd.v1beta1#
// ...with "#" (that is, leave them relative.) This handles a weird API docs thing during development.

const replacements = [
  {pattern: /https:\/\/www\.enterprisedb\.com\/docs\/postgres_for_kubernetes\/latest\/pg4k-pgd.v1beta1#/g, replacement: "#"},
];

export const process = (filename, content) => {
  for (const r of replacements)
    content = content.replace(r.pattern, r.replacement);

  return {
    newFilename: filename,
    newContent: content,
  };
};
