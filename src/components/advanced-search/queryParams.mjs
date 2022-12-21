export const queryParamsToState = (query) => {
  const params = new URLSearchParams(query);

  const searchState = {};
  if (params.get("query")) {
    searchState.query = params.get("query");
  }
  if (params.get("product")) {
    searchState.refinementList = {
      ...searchState.refinementList,
      product: params.get("product"),
    };
  }
  if (params.get("version")) {
    searchState.refinementList = {
      ...searchState.refinementList,
      version: params.get("version"),
    };
  }
  if (params.get("page")) {
    searchState.page = params.get("page");
  }
  if (params.get("content")) {
    searchState.menu = { type: params.get("content") };
  }

  return searchState;
};

export const writeStateToQueryParams = (searchState) => {
  const params = new URLSearchParams();

  if (searchState.query && searchState.query.length > 0) {
    setOrRemove(params, "query", searchState.query);
  }
  if (searchState.refinementList) {
    setOrRemove(params, "product", searchState.refinementList.product);
    setOrRemove(params, "version", searchState.refinementList.version);
  }
  if (searchState.page > 1) {
    setOrRemove(params, "page", searchState.page);
  }
  if (searchState.menu) {
    setOrRemove(params, "content", searchState.menu.type);
  }

  if (window && window.history) {
    window.history.replaceState("", searchState.query, `?${params.toString()}`);
  }
};

const setOrRemove = (params, key, value) => {
  if (value && value.length > 0) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
};
