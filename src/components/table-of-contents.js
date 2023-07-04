import React from "react";
import { Link } from "./";
import { useScrollRestoration } from "gatsby";
import { useLocation } from "@reach/router";

const TableOfContents = ({ toc }) => {
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
              className={`d-block py-2 align-middle ${
                hash === item.url ? "active" : ""
              }`}
              to={item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default TableOfContents;
