// Fathom analytics helpers shared by the quick search bar and advanced search.
//
// The global `window.fathom` is injected client-side by
// @raae/gatsby-plugin-fathom (which loads https://cdn.usefathom.com/script.js).
// It is unavailable during SSR, local builds without FATHOM_SITE_ID set,
// and on non-production domains where the plugin
// is disabled, so every call is guarded.

const getFathom = () =>
  (typeof window !== "undefined" && window.fathom) || null;

// Establish the given UTM source for the current URL, so search-driven sessions
// are attributable in Fathom.
export const trackSearchPageview = (utmSource) => {
  const fathom = getFathom();
  if (!fathom) return;
  const url = new URL(window.location.href);
  url.searchParams.set("utm_source", utmSource);
  fathom.trackPageview({ url: url.toString() });
};

export const trackSearchEvent = (name, ...args) => {
  const fathom = getFathom();
  if (!fathom) return;
  fathom.trackEvent(name, ...args);
};
