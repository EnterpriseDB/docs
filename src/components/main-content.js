import React from 'react';
import SearchNavigation from './search-navigation';

const MainContent = ({ children }) => {
  return (
    <div className="col-10">
      <SearchNavigation />
      <main role="main" className="col-12 pt-5">
        {children}
      </main>
    </div>
  );
};

export default MainContent;
