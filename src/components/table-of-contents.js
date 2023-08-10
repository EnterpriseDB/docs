import React from "react";
import { Link } from "./";
import { useScrollRestoration } from "gatsby";
import { useLocation } from "@reach/router";

const TableOfContents = ({ toc, deepToC }) => {
  const scrollRestoration = useScrollRestoration("header-navigation-sidebar");
  const hash = useLocation().hash;

  return (
    <ul
      className="list-unstyled border-left pl-4 lh-12 toc-sticky pt-3"
      {...scrollRestoration}
    >
      <li className="mb-2 font-weight-bold text-muted text-uppercase small">
        On this page
      </li>
      {toc
        .filter((item) => item.title)
        .map((item) => (
          <li key={item.title}>
            <Link
              className={`d-block py-2 align-middle  ${
                hash === item.url
                  ? "active"
                  : deepToC
                  ? "font-weight-normal"
                  : ""
              }`}
              to={item.url}
            >
              {item.title}
            </Link>
            {deepToC && item.items != undefined && (
              <ul className="list-unstyled pl-4 lh-8">
                {item.items
                  .filter((subitem) => subitem.title)
                  .map((subitem) => (
                    <li key={subitem.title}>
                      <Link
                        className={`d-block py-1 align-middle  ${
                          hash === subitem.url
                            ? "active"
                            : "font-weight-lighter"
                        }`}
                        to={subitem.url}
                      >
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
};

export default TableOfContents;
