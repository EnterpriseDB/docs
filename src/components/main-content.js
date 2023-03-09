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
      <TimedBanner toDate={new Date("2023-05-02")}>
        EDB Postgres Vision 2023: Make the Move with EDB May 9-11 Bellagio Hotel
        & Casino, Las Vegas{" "}
        <a
          className="pl-1 font-weight-bold"
          href="https://events.enterprisedb.com/oxVGNv?RefId=web"
        >
          Register Today
        </a>
      </TimedBanner>
      <SearchNavigation logo={searchNavLogo} searchProduct={searchProduct} />
      <main role="main" className="content-container mt-0 p-5">
        {children}
      </main>
    </div>
  );
};

export default MainContent;
