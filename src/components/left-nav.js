import React from "react";
import Icon, { iconNames } from "./icon/";
import VersionDropdown from "./version-dropdown";
import { products } from "../constants/products";
import { Link, PdfDownload, BackButton, TreeNode } from "./";

const productIcon = (path) => {
  const product = path.split("/")[1];
  return products[product] ? products[product].iconName : null;
};

const SectionHeading = ({ navTree, path, iconName }) => {
  return (
    <li className="ml-0 mb-4 d-flex align-items-center">
      <Icon
        iconName={iconName || productIcon(path) || iconNames.DOTTED_BOX}
        className="fill-orange mr-3"
        width="50"
        height="50"
      />
      <Link
        to={navTree.path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        {navTree.title}
      </Link>
    </li>
  );
};

const SectionHeadingWithVersions = ({
  navTree,
  path,
  versionArray,
  iconName,
  hideVersion,
}) => {
  return (
    <li className="ml-0 mb-4 d-flex align-items-center">
      <Icon
        iconName={iconName || productIcon(path) || iconNames.DOTTED_BOX}
        className="fill-orange mr-3"
        width="50"
        height="50"
      />
      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
        >
          {navTree.title}
        </Link>
        {!navTree.hideVersion && versionArray.length > 1 ? (
          <div>
            <VersionDropdown versionArray={versionArray} path={path} />
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
  hideEmptySections = false,
  hideVersion = false,
}) => {
  return (
    <ul className="list-unstyled mt-0">
      <BackButton />
      {versionArray ? (
        <SectionHeadingWithVersions
          navTree={navTree}
          path={path}
          versionArray={versionArray}
          iconName={iconName}
          hideVersion={hideVersion}
        />
      ) : (
        <SectionHeading navTree={navTree} path={path} iconName={iconName} />
      )}
      {navTree.items.map((node) => (
        <TreeNode
          node={node}
          path={path}
          key={node.path + node.title}
          hideIfEmpty={hideEmptySections}
        />
      ))}
      <li>
        <PdfDownload path={path} />
      </li>
    </ul>
  );
};

export default LeftNav;
