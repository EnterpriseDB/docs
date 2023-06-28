import React from "react";
import { Link } from "./";
import { useScrollRestoration } from "gatsby";
import { useLocation } from "@reach/router";

const TableOfContents = ({ toc, deepToC }) => {
  const scrollRestoration = useScrollRestoration("header-navigation-sidebar");
  const hash = useLocation().hash;

  console.log(`${deepToC}`);

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
              className={`d-block py-2 align-middle ${
                deepToC ? "font-weight-normal" : ""
              } ${hash === item.url ? "active" : ""}`}
              to={item.url}
            >
              {item.title}
            </Link>
            {deepToC && (
              <ul className="list-unstyled pl-4 lh-8">
                {item.items
                  .filter((subitem) => subitem.title)
                  .map((subitem) => (
                    <li key={subitem.title}>
                      <Link
                        className={`d-block py-1 align-middle font-weight-lighter ${
                          hash === subitem.url ? "active" : ""
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
