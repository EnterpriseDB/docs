require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/command-line/prism-command-line.css");

exports.onRouteUpdate = ({ location }) => scrollToAnchor(location);

exports.shouldUpdateScroll = ({
  prevRouterProps,
  routerProps,
  pathname,
  getSavedScrollPosition,
}) => {
  let hashElem =
    routerProps.location.hash &&
    document.getElementById(routerProps.location.hash.substring(1));
  // avoid obscure issue where scrolling to hash in gatsby-react-router-scroll slams to end of page if animated
  if (hashElem) {
    hashElem.scrollIntoView({ behavior: "instant" });
    return false;
  }
  return true; // default
};

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
