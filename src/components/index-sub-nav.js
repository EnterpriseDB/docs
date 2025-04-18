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
  <ul className="list-inline me-3 mt-5 d-flex flex-wrap justify-content-center">
    <IndexSubLink url="https://www.enterprisedb.com/">EDB Home</IndexSubLink>
    <IndexSubLink url="https://knowledge.enterprisedb.com/">
      Knowledge Base and Technical Alerts
    </IndexSubLink>
    <IndexSubLink url="https://www.enterprisedb.com/contact">
      Contact Us
    </IndexSubLink>
    <IndexSubLink url="/community/contributing/">Have feedback?</IndexSubLink>
    <DarkModeToggle className="list-item-inline" />
  </ul>
);

export default IndexSubNav;
