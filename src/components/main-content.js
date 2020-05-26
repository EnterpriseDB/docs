import React from 'react';
import SearchNavigation from './search-navigation';

const MainContent = ({ children }) => {
  return (
    <div className="flex-grow-1 border-right">
      <SearchNavigation />
      <main role="main" className="mt-0 p-5">
        {children}
      </main>
    </div>
  );
};

export default MainContent;
