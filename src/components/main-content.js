import React from "react";
import SearchNavigation from "./search-navigation";

const MainContent = ({
  children,
  searchNavLogo = false,
  searchProduct = "",
}) => {
  return (
    <div className="flex-grow-1 min-w-50">
      <SearchNavigation logo={searchNavLogo} searchProduct={searchProduct} />
      <main role="main" className="content-container mt-0 p-5">
        {children}
      </main>
    </div>
  );
};

export default MainContent;
