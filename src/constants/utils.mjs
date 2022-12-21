export const filterAndSortLinks = (nodes, url) => {
  return nodes
    .map((node) => ({
      ...node.frontmatter,
      ...node.fields,
      items: [],
      itemObj: {},
    }))
    .filter((node) => node.path.includes(url))
    .sort((a, b) => {
      if (a.path < b.path) {
        return -1;
      }
      if (a.path > b.path) {
        return 1;
      }
      return 0;
    });
};

export const capitalize = (s) => {
  if (!s) {
    return "";
  }
  return `${s[0].toUpperCase()}${s.slice(1)}`;
};

export const getBaseUrl = (path, depth) => {
  return path.split("/").slice(0, depth).join("/");
};
