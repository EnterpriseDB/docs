import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchNavigationLinks } from ".";
import SearchBar from "./search/";
import { Link, Logo } from "./";

const LogoLink = () => (
  <Link to="https://www.enterprisedb.com/" title="EDB Home">
    <Logo width="120" height="50" className="me-1" />
  </Link>
);

const DocsLink = ({ className }) => (
  <Link
    to="/"
    className={["me-3 lead text-muted pt-2", className].join(" ")}
    title="EDB Docs homepage"
  >
    /<span className="ps-0">docs</span>
  </Link>
);

const SearchNavigation = ({
  children,
  searchProduct,
  searchVersion,
  logo = false,
}) => {
  return (
    <Navbar
      variant="light"
      expand="md"
      className="flex-md-nowrap p-3 border-bottom justify-content-start justify-content-md-between"
    >
      {logo ? (
        <>
          {/* Homepage */}
          <LogoLink />
          <DocsLink className="text-nowrap flex-grow-1" />
        </>
      ) : (
        <></>
      )}
      <SearchBar
        searchProduct={searchProduct}
        searchVersion={searchVersion}
        className="order-last order-md-5"
      />
      <SearchNavigationLinks className="order-5 order-md-last" />
    </Navbar>
  );
};

export default SearchNavigation;
