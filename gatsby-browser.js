require("prismjs/themes/prism-okaidia.css");
require("prismjs/plugins/command-line/prism-command-line.css");

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

  // Check for location so build does not fail
  if (location && location.hash) {
    try {
      const item = document.querySelector(`${location.hash}`);

      if (item) {
        window.scrollTo({
          top: item.offsetTop - mainNavHeight,
          behavior: "smooth",
        });
      }
    } catch (error) {
      // if hash is bad exception will be raised
      console.error(error);
    }
  }

  return true;
}
