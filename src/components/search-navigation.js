import React from 'react';
import { Navbar } from 'react-bootstrap';
import { SearchNavigationLinks } from '.';
import SearchBar from './search/';

const SearchNavigation = ({ children }) => {
  return (
    <Navbar variant="light" className="flex-md-nowrap p-3 border-bottom">
      <SearchBar />
      <SearchNavigationLinks />
    </Navbar>
  );
};

export default SearchNavigation;
