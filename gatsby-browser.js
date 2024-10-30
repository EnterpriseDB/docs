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

  return true;
}

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
