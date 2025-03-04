require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/command-line/prism-command-line.css");
const { navigate } = require("@gatsbyjs/reach-router");

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

/**
 *
 * @desc - a function to jump to the correct scroll position
 * @param {Object} location -
 * @param {Number} [mainNavHeight] - the height of any persistent nav -> document.querySelector(`nav`)
 */
function scrollToAnchor(location, mainNavHeight = 0) {
  // left nav: scroll
  const navItem = document.querySelector(".sidebar .active");
  if (navItem) navItem.scrollIntoView({ block: "nearest" });
  // right-nav: scroll
  const toc = document.querySelector(".toc-sticky .active");
  if (toc) toc.scrollIntoView({ block: "nearest" });

  return true;
}

exports.onClientEntry = () => {
  // this replaces logic in Gatsby's production.js that relies on a *non-path-prefixed* page URL
  // (ref: https://github.com/gatsbyjs/gatsby/blob/346314d678d9465c998c12466f810b21592f6cb5/packages/gatsby/cache-dir/production-app.js#L159)
  // its intent is to ensure the path in the browser's URL bar matches the page's own notion of
  // what its URL is - this is helpful for various reasons, but most importantly it papers over
  // case differences and such.
  // We don't want to use the built-in logic, as Google repeatedly scrapes the un-path-prefixed
  // URL out of the page (even though it's in a script tag) and tries to crawl it - the resulting
  // 404s in the search console are annoying and obscure more important errors
  const browserLoc = window.location;
  const metaUrl = document
    .querySelector("meta[property='og:url']")
    ?.attributes["content"]?.value?.replace(/\/?$/, "/");
  let pagePath = "";
  if (metaUrl && !window.pagePath) {
    // don't do this if we *didn't* clear pagePath - it'll already have been done
    try {
      pagePath = new URL(metaUrl).pathname;
    } catch {}
  }
  if (pagePath && pagePath !== browserLoc.pathname) {
    navigate(pagePath + browserLoc.hash, {
      replace: true,
    });
  }
};

exports.onInitialClientRender = () => {
  // h/t https://stackoverflow.com/questions/19646684/force-open-the-details-summary-tag-for-print-in-chrome/75260733#75260733
  window.matchMedia("print").addEventListener("change", (evt) => {
    if (evt.matches) {
      let detailsElements = document.body.querySelectorAll(
        "details:not([open])",
      );
      for (let e of detailsElements) {
        e.toggleAttribute("open", true);
        e.dataset.wasclosed = "";
      }
    } else {
      let detailsElements = document.body.querySelectorAll(
        "details[data-wasclosed]",
      );
      for (let e of detailsElements) {
        e.removeAttribute("open");
        delete e.dataset.wasclosed;
      }
    }
  });
};
