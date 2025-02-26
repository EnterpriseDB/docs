import React, { useMemo } from "react";
import { useScrollRestoration } from "gatsby";
import { DarkModeToggle, Link, Logo } from "./";
import { slug } from "github-slugger";

const DocsLink = () => (
  <Link
    to="/"
    className="ms-1 me-3 lead text-muted pt-3"
    title="EDB Docs homepage"
  >
    /<span className="ps-0">docs</span>
  </Link>
);

const LogoLink = ({ name }) => {
  return (
    <h1 className="h3 p-3 mb-0 d-flex align-items-center">
      <label className="open-close-button me-auto d-sm-none">
        <input type="checkbox" name={name || "ExpandNavigation"} />
        {name}
      </label>
      <Link to="https://www.enterprisedb.com/" title="EDB Home" id="sidebar">
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
      <FooterItem url="https://knowledge.enterprisedb.com/">
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

const CategoryNav = ({ category, children, className, ...props }) => {
  if (!category?.length && !children) return null;
  let levelPath = "";
  return (
    <ul className={`breadcrumb ${className}`} {...props}>
      {category?.map((l) => {
        levelPath = levelPath + "/" + slug(l);
        return (
          <li className="breadcrumb-item" key={levelPath}>
            <Link to={levelPath}>{l}</Link>
          </li>
        );
      })}
      {children}
    </ul>
  );
};

export default function SideNavigation({
  children,
  category,
  background = "light",
  footer = true,
  hideKBLink = false,
  name = "",
}) {
  const scrollRestoration = useScrollRestoration("navigation-sidebar");

  return (
    <nav
      className={`sidebar sidebar-sticky d-block bg-${background} border-end d-flex flex-column`}
    >
      <LogoLink name={name} />
      <div
        className="ps-3 pe-3 pb-4 flex-shrink-1 sidebar-nav-links"
        {...scrollRestoration}
      >
        <CategoryNav category={category} className="d-none d-sm-flex" />
        {children}
        {footer && <SideNavigationFooter hideKBLink={hideKBLink} />}
      </div>
    </nav>
  );
}

export function BreadcrumbBar({
  category,
  navTree,
  pagePath,
  versionArray,
  iconName,
  hideVersion,
  product,
  version,
}) {
  const navStack = useMemo(() => {
    const stack = [];

    const accumulateAncestors = (root) => {
      if (root.path === pagePath) return true;

      for (let item of root.items) {
        if (accumulateAncestors(item)) {
          stack.unshift(item);
          return true;
        }
      }
      return false;
    };
    accumulateAncestors(navTree);
    stack.unshift(navTree);
    stack.pop();

    return stack;
  }, [navTree, pagePath]);

  return (
    <nav aria-label="breadcrumb">
      <CategoryNav category={category} className="d-sm-none">
        {navStack.map((item) => (
          <li className="breadcrumb-item" key={item.path}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </CategoryNav>
    </nav>
  );
}
