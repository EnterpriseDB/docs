import React from "react";
import { DarkModeToggle, Link } from "../components";

const IndexSubLink = ({ url, children }) => (
  <li className="list-inline-item">
    <Link to={url} className="d-inline-block px-3 align-middle">
      {children}
    </Link>
  </li>
);

const IndexSubNav = () => (
  <div className="mt-5 d-flex justify-content-center">
    <ul className="list-inline mr-3">
      <IndexSubLink url="https://www.enterprisedb.com/">EDB Home</IndexSubLink>
      <IndexSubLink url="https://support.enterprisedb.com/support/s/">
        Knowledge Base and Technical Alerts
      </IndexSubLink>
      <IndexSubLink url="https://www.enterprisedb.com/contact">
        Contact Us
      </IndexSubLink>
      <IndexSubLink url="/community/contributing/">Have feedback?</IndexSubLink>
    </ul>
    <DarkModeToggle />
  </div>
);

export default IndexSubNav;
