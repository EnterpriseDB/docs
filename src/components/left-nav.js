import React from "react";
import Icon, { iconNames } from "./icon/";
import VersionDropdown from "./version-dropdown";
import { products } from "../constants/products";
import { Link, PdfDownload, TreeNode } from "./";

const productIcon = (path) => {
  const product = path.split("/")[1];
  return products[product] ? products[product].iconName : null;
};

const pathSame = (treepath, path) => {
  const splitTreePath = treepath.split("/").filter(function (element) {
    return element !== "";
  });
  const splitPath = path.split("/").filter(function (element) {
    return element !== "";
  });
  if (splitPath[0] == splitTreePath[0]) {
    if (splitPath.slice(2).toString() == splitTreePath.slice(2).toString()) {
      return true;
    }
  }

  return false;
};

const SectionHeading = ({ navTree, path, iconName }) => {
  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Icon
        iconName={iconName || productIcon(path) || iconNames.DOTTED_BOX}
        className="fill-orange me-3"
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
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link to={navTree.path}>
        <Icon
          iconName={iconName || productIcon(path) || iconNames.DOTTED_BOX}
          className="fill-orange me-3 onhover:fill-orange onhover:stroke-orange"
          width="50"
          height="50"
        />
      </Link>

      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className={
            "d-block align-middle balance-text m-0 " +
            (pathSame(navTree.path, path) ? "text-dark h5" : "text-primary h5")
          }
        >
          {" "}
          {navTree.title}
        </Link>
        {!navTree.hideVersion && versionArray.length > 1 ? (
          <div>
            <VersionDropdown versionArray={versionArray} path={path} />
          </div>
        ) : !navTree.hideVersion ? (
          <div className="text-muted">Version {versionArray[0].version}</div>
        ) : null}
        <div>
          <Link
            to={navTree.path + "rel_notes/"}
            className={
              "d-block align-middle balance-text m-0 " +
              (pathSame(navTree.path + "rel_notes/", path)
                ? "text-dark h6"
                : "text-primary h6")
            }
          >
            Release Notes
          </Link>
        </div>
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
  hidePDF = false,
}) => {
  return (
    <ul className="list-unstyled mt-0">
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
          path={pagePath}
          key={node.path + node.title}
          hideIfEmpty={hideEmptySections}
        />
      ))}
      <li>
        <PdfDownload pagePath={path} hidePDF={hidePDF} />
      </li>
    </ul>
  );
};

export default LeftNav;
