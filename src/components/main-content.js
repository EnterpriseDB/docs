import React from "react";
import SearchNavigation from "./search-navigation";
import TimedBanner from "./timed-banner";

const MainContent = ({
  children,
  searchNavLogo = false,
  searchProduct = "",
}) => {
  return (
    <div className="flex-grow-1 min-w-50">
      <TimedBanner toDate={new Date("2023-03-15")}>
        tbd <a className="pl-1 font-weight-bold" href=""></a>
      </TimedBanner>
      <SearchNavigation logo={searchNavLogo} searchProduct={searchProduct} />
      <main role="main" className="content-container mt-0 p-5">
        {children}
      </main>
    </div>
  );
};

export default MainContent;
