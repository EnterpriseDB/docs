import React from "react";
import { DarkModeToggle, Link, Logo } from "./";

const DocsLink = () => (
  <Link
    to="/"
    className="mr-3 lead text-muted pt-3 header-docs-link"
    title="EDB Docs homepage"
  >
    /<span className="pl-1">docs</span>
  </Link>
);

const LogoLink = () => {
  return (
    <h1 className="h3 p-3 d-flex">
      <Link to="https://www.enterprisedb.com/" title="EDB Home">
        <Logo width="120" height="50" className="mr-1" />
      </Link>
      <DocsLink />
    </h1>
  );
};

const FooterItem = ({ url, children }) => (
  <li className="ml-0">
    <Link to={url} className="d-block py-1 align-middle">
      {children}
    </Link>
  </li>
);

const SideNavigationFooter = () => (
  <ul className="list-unstyled mt-0">
    <hr />
    <FooterItem url="https://support.enterprisedb.com/support/s/">
      Knowledge Base and Technical Alerts
    </FooterItem>
    <FooterItem url="https://www.enterprisedb.com/contact">
      Contact Us
    </FooterItem>
    <FooterItem url="/community/contributing/">Have feedback?</FooterItem>
    <DarkModeToggle className="mt-1" />
  </ul>
);

const SideNavigation = ({ children, background = "light", footer = true }) => {
  return (
    <nav className={`sidebar d-block bg-${background} border-right`}>
      <div className="sidebar-sticky pl-4 pr-4 pb-4">
        <LogoLink />
        {children}
        {footer && <SideNavigationFooter />}
      </div>
    </nav>
  );
};

export default SideNavigation;
