import React, { useMemo } from "react";
import { useScrollRestoration } from "gatsby";
import { DarkModeToggle, Link, Logo } from "./";

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

const BreadcrumbList = ({ children, className }) => {
  if (!children) return null;
  return <ul className={`breadcrumb ${className}`}>{children}</ul>;
};

const BreadcrumbItem = ({ node }) => {
  return (
    <li className="breadcrumb-item" key={node.path}>
      <Link to={node.path}>
        {node.rootedTo
          ? node.title || "TITLE NEEDED"
          : node.navTitle || node.title || "TITLE NEEDED"}
      </Link>
    </li>
  );
};

function getAncestors(tree, pagePath) {
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
  accumulateAncestors(tree);
  stack.unshift(tree);

  return stack;
}

export default function SideNavigation({
  children,
  navTree,
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
        <BreadcrumbList className="d-none d-sm-flex">
          {navTree?.ancestors?.map((a) => (
            <BreadcrumbItem node={a} key={a.path} />
          ))}
        </BreadcrumbList>
        {children}
        {footer && <SideNavigationFooter hideKBLink={hideKBLink} />}
      </div>
    </nav>
  );
}

export function BreadcrumbBar({
  navTree,
  pagePath,
  versionArray,
  iconName,
  hideVersion,
  product,
  version,
}) {
  const navStack = useMemo(() => {
    const stack = getAncestors(navTree, pagePath);
    return stack.slice(0, -1);
  }, [navTree, pagePath]);

  return (
    <nav aria-label="breadcrumb">
      <BreadcrumbList className="d-sm-none">
        {navTree.ancestors?.map((a) => (
          <BreadcrumbItem node={a} key={a.path} />
        ))}
        {navStack.map((item) => (
          <BreadcrumbItem node={item} key={item.path} />
        ))}
      </BreadcrumbList>
    </nav>
  );
}

export function CategoryList({ navTree, pagePath, className }) {
  const categories = useMemo(() => {
    const categories = getAncestors(navTree, pagePath).at(-1)?.categories;
    // rooted "ancestors" are also always categories
    // so only render categories if there are multiple categories or no ancestors
    if (categories?.length > 1 || !navTree.ancestors) return categories;
    return null;
  }, [navTree, pagePath]);

  return (
    categories && (
      <nav aria-label="Related Categories" className={className}>
        <div className="mb-2 fw-bold text-muted text-uppercase small">
          Related Categories:
        </div>
        <ul className="list-unstyled d-flex flex-wrap">
          {categories.map((category) => (
            <li key={category.path} className="me-4">
              <Link to={category.path} className="d-block py-2 align-middle">
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
}
