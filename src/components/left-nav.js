import React from "react";
import Icon, { iconNames } from "./icon/";
import VersionDropdown from "./version-dropdown";
import { products } from "../constants/products";
import { Link, PdfDownload, TreeNode } from "./";

const productIcon = (path) => {
  const product = path.split("/")[1];
  return products[product] ? products[product].iconName : null;
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

  return null;
}

const SectionHeading = ({ navTree, pagePath, iconName }) => {
  var relnotes = getReleaseNotesNode(navTree);

  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link
        to={navTree.path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        <Icon
          iconName={iconName}
          className="fill-orange me-3"
          width="50"
          height="50"
        />
      </Link>
      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className={
            "d-block align-middle balance-text m-1 h4" +
            (navTree.path === pagePath
              ? " active fw-bold text-dark"
              : " text-primary")
          }
        >
          {navTree.title}
        </Link>

        <div>
          {
            /* don't use 'active' class here, or there'll be duplicate active items in the nav */
            relnotes && (
              <Link
                to={relnotes.path}
                className={
                  "d-block align-middle balance-text m-1 h5" +
                  (relnotes.path === pagePath
                    ? " fw-bold text-dark"
                    : " text-primary")
                }
              >
                Release Notes
              </Link>
            )
          }
        </div>
      </div>
    </li>
  );
};

const SectionHeadingWithVersions = ({
  navTree,
  path,
  pagePath,
  versionArray,
  iconName,
}) => {
  var relnotes = getReleaseNotesNode(navTree);
  return (
    <li className="ms-0 mb-4 d-flex align-items-center">
      <Link to={navTree.path}>
        <Icon
          iconName={iconName}
          className="fill-orange me-3 onhover:fill-orange onhover:stroke-orange"
          width="50"
          height="50"
        />
      </Link>

      <div className="rightsidenoclass">
        <Link
          to={navTree.path}
          className={
            "d-block align-middle balance-text m-1 h4" +
            (navTree.path === pagePath
              ? " active fw-bold text-dark"
              : " text-primary")
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
          {
            /* don't use 'active' class here, or there'll be duplicate active items in the nav */
            relnotes && (
              <Link
                to={relnotes.path}
                className={
                  "d-block align-middle balance-text m-1 h5" +
                  (relnotes.path === pagePath
                    ? " fw-bold text-dark"
                    : " text-primary")
                }
              >
                Release Notes
              </Link>
            )
          }
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
  hidePDF = false,
}) => {
  iconName = iconName || productIcon(path) || iconNames.DOTTED_BOX;
  const headingProps = {
    navTree,
    path,
    pagePath,
    versionArray,
    iconName,
  };
  return (
    <ul className="list-unstyled mt-0">
      {versionArray ? (
        <SectionHeadingWithVersions {...headingProps} />
      ) : (
        <SectionHeading {...headingProps} />
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
