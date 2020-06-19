import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import SearchBar from './search/';
import Icon, { iconNames } from './icon/';

const SearchNavigation = ({ children }) => {
  return (
    <Navbar variant="light" className="flex-md-nowrap p-2 border-bottom">
      <Icon iconName={iconNames.SEARCH} className="fill-black ml-2 opacity-5" width="27" height="27" />
      <SearchBar />
      <Button variant="link" className="text-nowrap mr-2">
        Support
      </Button>
      <Button variant="link" className="text-nowrap mr-2">
        Sign In
      </Button>
    </Navbar>
  );
};

export default SearchNavigation;
