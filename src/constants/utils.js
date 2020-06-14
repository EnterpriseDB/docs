export const filterAndSort = (nodes, url) => {
  return nodes
    .map(node => ({
      ...node.frontmatter,
      ...node.fields,
      items: [],
      itemObj: {},
    }))
    .filter(node => node.path.includes(url))
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
