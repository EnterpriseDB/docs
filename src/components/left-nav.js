import React from "react";
import Icon, { iconNames } from "./icon/";
import VersionDropdown from "./version-dropdown";
import { products } from "../constants/products";
import { Link, PdfDownload, TreeNode } from "./";

const productIcon = (product) => {
  return products[product] ? products[product].iconName : null;
};

const SectionHeading = ({ navTree, path, iconName, product }) => {
  // if iconName starts with "edb_postgres_ai" then set the fill color to black
  let myIconName = iconName || productIcon(product) || iconNames.DOTTED_BOX;
  let className = "fill-orange me-3";
  if (myIconName && myIconName.startsWith("edb_postgres_ai")) {
    className = "fill-aquamarine me-3";
  } else if (myIconName && path.startsWith("/edb-postgres-ai/")) {
    className = "fill-aquamarine me-3";
  }

  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link
        to={navTree.path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        <Icon
          iconName={myIconName}
          className={className}
          width="50"
          height="50"
        />
      </Link>
      <div>
        <Link
          to={navTree.path}
          className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
        >
          {navTree.title}
        </Link>
      </div>
    </li>
  );
};

const SectionHeadingWithVersions = ({
  navTree,
  path,
  versionArray,
  iconName,
  product,
  preciseVersion,
  hideVersion,
}) => {
  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link
        to={navTree.path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        <Icon
          iconName={iconName || productIcon(product) || iconNames.DOTTED_BOX}
          className="fill-orange me-3"
          width="50"
          height="50"
        />
      </Link>
      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
        >
          {navTree.title}
        </Link>
        {!navTree.hideVersion && versionArray.length > 1 ? (
          <div style={{ "white-space": "nowrap" }}>
            <VersionDropdown
              versionArray={versionArray}
              preciseVersion={preciseVersion}
              path={path}
            />
          </div>
        ) : !navTree.hideVersion ? (
          <div className="text-muted">Version {versionArray[0].version}</div>
        ) : null}
      </div>
    </li>
  );
};

const LeftNav = ({
  navTree,
  path,
  pagePath,
  versionArray,
  iconName,
  product,
  version,
  hideEmptySections = false,
  hideVersion = false,
  hidePDF = false,
  preciseVersion,
}) => {
  return (
    <ul className="list-unstyled mt-0">
      {versionArray ? (
        <SectionHeadingWithVersions
          navTree={navTree}
          path={path}
          versionArray={versionArray}
          iconName={iconName}
          product={product}
          hideVersion={hideVersion}
          preciseVersion={preciseVersion}
        />
      ) : (
        <SectionHeading
          navTree={navTree}
          path={path}
          product={product}
          iconName={iconName}
        />
      )}
      {navTree.items.map((node) => (
        <TreeNode
          node={node}
          path={pagePath}
          key={node.path + node.title}
          hideIfEmpty={hideEmptySections}
        />
      ))}
      <li>
        <PdfDownload
          pagePath={path}
          hidePDF={hidePDF}
          product={product}
          version={version}
        />
      </li>
    </ul>
  );
};

export default LeftNav;
