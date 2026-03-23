import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchNavigationLinks } from ".";
import SearchBar from "./search/";
import { Logo } from "./";

const SearchNavigation = ({
  children,
  searchProduct,
  searchVersion,
  logo = false,
}) => {
  return (
    <Navbar
      variant="light"
      className="flex-wrap flex-lg-nowrap p-3 border-bottom justify-content-start justify-content-lg-between"
    >
      {logo ? (
        <>
          {/* Homepage */}
          <Logo />
        </>
      ) : (
        <></>
      )}
      <SearchBar
        searchProduct={searchProduct}
        searchVersion={searchVersion}
        className="order-last order-lg-5"
      />
      <SearchNavigationLinks className="order-5 order-lg-last" />
    </Navbar>
  );
};

export default SearchNavigation;
