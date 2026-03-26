import React from "react";
import { Link } from "./";

const DocsLink = () => (
  <Link
    to="/"
    className="ms-auto ms-sm-5 me-3 ps-4 pt-3 lead text-muted"
    title="EDB Docs homepage"
  >
    <span className="ps-0">Documentation</span>
  </Link>
);

function Logo({ name, sidebarClose = false }) {
  return (
    <h1 className="h3 p-3 mb-0 d-flex flex-wrap align-items-center">
      {sidebarClose ? (
        <label className="open-close-button me-auto d-sm-none">
          <input type="checkbox" name={name || "ExpandNavigation"} />
          {name}
        </label>
      ) : null}
      <Link
        to="https://www.enterprisedb.com/"
        title="EDB Home"
        id="sidebar"
        className="edb-logo d-inline-block d-sm-block"
      ></Link>
      <DocsLink />
    </h1>
  );
}

export default Logo;
