import React from 'react';
import SearchNavigation from './search-navigation';

const MainContent = ({ children }) => {
  return (
    <div className="col debug">
      <SearchNavigation />
      <main role="main" >
        {children}
      </main>
    </div>
  );
};

export default MainContent;
