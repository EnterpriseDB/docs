import React from "react";
import { useScrollRestoration } from "gatsby";
import { DarkModeToggle, Link, Logo } from "./";

const DocsLink = () => (
  <Link
    to="/"
    className="me-3 lead text-muted pt-3 header-docs-link"
    title="EDB Docs homepage"
  >
    /<span className="ps-1">docs</span>
  </Link>
);

const LogoLink = () => {
  return (
    <h1 className="h3 p-3 d-flex">
      <Link to="https://www.enterprisedb.com/" title="EDB Home">
        <Logo width="120" height="50" className="me-1" />
      </Link>
      <DocsLink />
    </h1>
  );
};

const FooterItem = ({ url, children }) => (
  <li className="ms-0">
    <Link to={url} className="d-block py-1 align-middle">
      {children}
    </Link>
  </li>
);

const SideNavigationFooter = ({ hideKBLink = false }) => (
  <ul className="list-unstyled mt-0">
    <hr />
    {!hideKBLink && (
      <FooterItem url="https://support.enterprisedb.com/support/s/">
        Knowledge Base and Technical Alerts
      </FooterItem>
    )}
    <FooterItem url="https://www.enterprisedb.com/contact">
      Contact Us
    </FooterItem>
    <FooterItem url="/community/contributing/">Have feedback?</FooterItem>
    <DarkModeToggle className="mt-1" />
  </ul>
);

const SideNavigation = ({
  children,
  background = "light",
  footer = true,
  hideKBLink = false,
}) => {
  const scrollRestoration = useScrollRestoration("navigation-sidebar");

  return (
    <nav className={`sidebar d-block bg-${background} border-end`}>
      <div className="sidebar-sticky ps-3 pe-3 pb-4" {...scrollRestoration}>
        <LogoLink />
        {children}
        {footer && <SideNavigationFooter hideKBLink={hideKBLink} />}
      </div>
    </nav>
  );
};

export default SideNavigation;
