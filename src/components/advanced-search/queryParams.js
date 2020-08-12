export const queryParamsToState = (query) => {
  const params = new URLSearchParams(query);

  const searchState = {};
  if (params.get('query')) {
    searchState.query = params.get('query');
  }
  if (params.get('product')) {
    searchState.hierarchicalMenu = { product: params.get('product') };
  }
  if (params.get('page')) {
    searchState.page = params.get('page');
  }
  if (params.get('content')) {
    searchState.menu = { type: params.get('content') };
  }

  return searchState;
};

export const writeStateToQueryParams = (searchState) => {
  const params = new URLSearchParams();

  if (searchState.query && searchState.query.length > 0) {
    setOrRemove(params, 'query', searchState.query);
  }
  if (searchState.hierarchicalMenu) {
    setOrRemove(params, 'product', searchState.hierarchicalMenu.product);
  }
  if (searchState.page > 1) {
    setOrRemove(params, 'page', searchState.page);
  }
  if (searchState.menu) {
    setOrRemove(params, 'content', searchState.menu.type);
  }

  if (window && window.history) {
    window.history.replaceState('', searchState.query, `?${params.toString()}`)
  }
};

const setOrRemove = (params, key, value) => {
  if (value && value.length > 0) {
    params.set(key, value);
  } else {
    params.delete(key);
  }
};
