import React from 'react';
import { Navbar } from 'react-bootstrap';
import { SearchNavigationLinks } from '.';
import SearchBar from './search/';
import { Logo } from './';

const SearchNavigation = ({ children }) => {
  return (
    <Navbar variant="light" className="flex-md-nowrap p-3 border-bottom">
      <Logo width="200" height="50" className="mr-3" />
      <SearchBar />
      <SearchNavigationLinks />
    </Navbar>
  );
};

export default SearchNavigation;
