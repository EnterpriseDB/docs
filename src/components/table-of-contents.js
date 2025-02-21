import React, { useEffect, useState } from "react";
import { Link } from "./";
import { useScrollRestoration } from "gatsby";
import { useLocation } from "@gatsbyjs/reach-router";

const TableOfContents = ({ toc, deepToC }) => {
  const scrollRestoration = useScrollRestoration("header-navigation-sidebar");
  const loc = useLocation();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(loc.hash);
  }, [loc]);

  return (
    <ul className="list-unstyled lh-12 toc-sticky pt-3" {...scrollRestoration}>
      <li className="mb-2 fw-bold text-muted text-uppercase small">
        On this page
      </li>
      {toc
        .filter((item) => item.title)
        .map((item) => (
          <li key={item.url || item.title}>
            <Link
              className={`d-block py-2 align-middle  ${
                hash === item.url ? "active" : deepToC ? "fw-normal" : ""
              }`}
              to={item.url}
            >
              {item.title}
            </Link>
            {deepToC && item.items?.filter && (
              <ul className="list-unstyled ps-4 lh-8">
                {item.items
                  .filter((subitem) => subitem.title)
                  .map((subitem) => (
                    <li key={subitem.url || subitem.title}>
                      <Link
                        className={`d-block py-1 align-middle  ${
                          hash === subitem.url ? "active" : "fw-lighter"
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
