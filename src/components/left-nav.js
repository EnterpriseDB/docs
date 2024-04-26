import React from "react";
import Icon, { iconNames } from "./icon/";
import VersionDropdown from "./version-dropdown";
import { products } from "../constants/products";
import { Link, PdfDownload, TreeNode } from "./";

const productIcon = (path) => {
  const product = path.split("/")[1];
  return products[product] ? products[product].iconName : null;
};

const pathSame = (treepath, path, versions) => {
  if (versions == null) {
    return treepath == path;
  }

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

function getReleaseNotesNode(navTree) {
  for (var node of navTree.items) {
    if (node.path) {
      if (node.path.includes("/rel_notes/")) {
        return node;
      } else if (node.path.includes("/release_notes/")) {
        return node;
      } else if (node.path.includes("/epas_rel_notes/")) {
        return node;
      } else if (node.path.includes("/pem_rel_notes/")) {
        return node;
      }
    }
  }

  console.log("Returning null");
  return null;
}

const SectionHeading = ({ navTree, path, iconName }) => {
  var relnotes = getReleaseNotesNode(navTree);

  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link
        to={navTree.path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        <Icon
          iconName={iconName || productIcon(path) || iconNames.DOTTED_BOX}
          className="fill-orange me-3"
          width="50"
          height="50"
        />
      </Link>
      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className={
            "d-block align-middle balance-text m-1 " +
            (pathSame(navTree.path, path, null)
              ? "text-dark h4"
              : "text-primary h4")
          }
        >
          {navTree.title}
        </Link>

        <div>
          {relnotes ? (
            <Link
              to={relnotes.path}
              className={
                "d-block align-middle balance-text m-1 " +
                (pathSame(relnotes.path, path, null)
                  ? "text-dark h5"
                  : "text-primary h5")
              }
            >
              Release Notes
            </Link>
          ) : null}
        </div>
      </div>
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
  var relnotes = getReleaseNotesNode(navTree);
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
            "d-block align-middle balance-text m-1 " +
            (pathSame(navTree.path, path, versionArray)
              ? "text-dark h4"
              : "text-primary h4")
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
          {relnotes ? (
            <Link
              to={relnotes.path}
              className={
                "d-block align-middle balance-text m-1 " +
                (pathSame(relnotes.path, path, versionArray)
                  ? "text-dark h5"
                  : "text-primary h5")
              }
            >
              Release Notes
            </Link>
          ) : null}
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
