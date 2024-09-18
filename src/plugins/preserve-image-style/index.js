// Retain style attributes found on <img> tags
// That allows for alignment and such.
// To make this work, this is implemented as a gatsby-remark plugin
// that must run before *and after* gatsby-remark-images

const visit = require("unist-util-visit-parents");
const { load } = require("cheerio");

const styleRE = /#style=(.+)$/;

module.exports = ({ markdownAST }, pluginOptions) => {
  // Second pass (after gatsby-remark-image):
  // find html nodes containing gatsby-resp-image-wrapper
  visit(markdownAST, ["html"], (node, ancestors) => {
    if (!/gatsby-resp-image-wrapper/.test(node.value)) return;
    const $ = load(node.value);
    $("span[style]:has(.gatsby-resp-image-wrapper)").each(function () {
      const el = $(this);
      const wrapper = el.find(".gatsby-resp-image-wrapper");

      // the gatsby-remark-image-generated markup will have no intrinsic size
      // so enforce one if we need it (by setting width)
      // won't do this if a width has already been specified
      if (el.css("float") && !el.css("width")) {
        const width = wrapper.css("max-width");
        el.css({ width });
      }

      // move the style to the image wrapper, and remove the wrapper-wrapper.
      wrapper
        .attr("style", function (i, style) {
          return style + " " + el.attr("style");
        })
        .unwrap();
    });

    node.value = $("body").html();
  });

  // First pass (before gatsby-remark-image):
  // find jsx/html nodes containing <img> tags
  visit(markdownAST, ["jsx"], (node, ancestors) => {
    if (/<img/.test(node.value)) {
      // wrap image with element to contain style
      const $ = load(node.value);
      $("img[style]").each(function () {
        const style = this.attribs["style"];
        delete this.attribs["style"];
        $(this).wrap(`<span style='${style}'></span>`);
      });
      node.value = $("body").html();
    }
  });

  return markdownAST;
};
