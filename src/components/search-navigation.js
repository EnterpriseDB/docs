import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchNavigationLinks } from ".";
import SearchBar from "./search/";
import { Link, Logo } from "./";

const LogoLink = () => (
  <Link to="/">
    <Logo width="200" height="50" className="mr-3" />
  </Link>
);

const SearchNavigation = ({ children, logo = false }) => {
  return (
    <Navbar variant="light" className="flex-md-nowrap p-3 border-bottom">
      {logo && <LogoLink />}
      <SearchBar />
      <SearchNavigationLinks />
    </Navbar>
  );
};

export default SearchNavigation;
