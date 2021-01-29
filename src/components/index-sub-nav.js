import React from 'react';
import { DarkModeToggle, Link } from '../components';

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
      <IndexSubLink url="/postgresql-docs/postgresql/">
        PostgreSQL Docs
      </IndexSubLink>
      <IndexSubLink url="/community/contribute/">Contribute</IndexSubLink>
      <IndexSubLink url="/community/authoring/">Authoring</IndexSubLink>
      <IndexSubLink url="https://support.enterprisedb.com">
        Support
      </IndexSubLink>
      <IndexSubLink url="https://enterprisedb.com/contact">
        Contact Us
      </IndexSubLink>
      <IndexSubLink url="/community/feedback/">Feedback?</IndexSubLink>
    </ul>
    <DarkModeToggle />
  </div>
);

export default IndexSubNav;
