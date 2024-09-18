import React from "react";
import { Link } from "./";

const SearchNavigationLinks = (props) => (
  <>
    <Link
      to="/search"
      className={["btn btn-link text-nowrap ms-2", props.className].join(" ")}
    >
      Advanced Search
    </Link>
  </>
);

export default SearchNavigationLinks;
