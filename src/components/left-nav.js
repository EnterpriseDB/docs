import React from 'react';
import { Link } from 'gatsby';
import Icon, { iconNames } from './icon/';
import VersionDropdown from './version-dropdown';
import { products } from '../constants/products';
import { filterAndSortLinks, getBaseUrl } from '../constants/utils';
import { BackButton, TreeNode } from './';

const productIcon = path => {
  const product = path.split('/')[1];
  return products[product] ? products[product].iconName : null;
};

const makeTree = edges => {
  let newEdges = edges;
  for (let i = 0; i < newEdges.length - 1; i++) {
    const { path } = newEdges[i];
    const tiers = path.split('/').length;
    for (let j = i + 1; j < newEdges.length; j++) {
      const innerPath = newEdges[j].path;
      const innerTiers = innerPath.split('/').length;
      if (innerPath.includes(path) && innerTiers - 1 === tiers) {
        newEdges[i].items.push(newEdges[j]);
      }
    }
  }
  return newEdges[0].items;
};

const orderTree = (tree, order) => {
  if (!order) {
    return tree;
  }
  let result = [];
  for (let navItem of order) {
    for (let leaf of tree) {
      if (leaf.path.includes(navItem.path)) {
        result.push(leaf);
      }
    }
    if (!navItem.path) {
      result.push(navItem);
    }
  }
  return result;
};

const SectionHeading = ({ newList, path }) => {
  return (
    <li className="ml-0 mb-4 d-flex align-items-center">
      <Icon
        iconName={productIcon(path) || iconNames.DOTTED_BOX}
        className="opacity-2 mr-2"
        width="48"
        height="48"
      />
      <Link
        to={newList[0].path}
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        {newList[0].title}
      </Link>
    </li>
  );
};

const SectionHeadingWithVersions = ({ newList, path, versionArray }) => {
  return (
    <li className="ml-0 mb-4 d-flex align-items-center">
      <Icon
        iconName={productIcon(path) || iconNames.DOTTED_BOX}
        className="opacity-2 mr-2"
        width="90"
        height="90"
      />
      <div className="rightsidenoclass">
        <Link
          to={newList[0].path}
          className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
        >
          {newList[0].title}
        </Link>
        {versionArray.length > 1 ? (
          <div>
            <VersionDropdown versionArray={versionArray} path={path} />
          </div>
        ) : (
          <div className="text-muted">Version {versionArray[0].version}</div>
        )}
      </div>
    </li>
  );
};

const LeftNav = ({ navLinks, path, versionArray, navOrder = null }) => {
  const newList = versionArray
    ? filterAndSortLinks(navLinks, getBaseUrl(path, 3))
    : filterAndSortLinks(navLinks, getBaseUrl(path, 2));
  const tree = orderTree(makeTree(newList), navOrder);
  return (
    <ul className="list-unstyled mt-0">
      <BackButton />
      {versionArray ? (
        <SectionHeadingWithVersions
          newList={newList}
          path={path}
          versionArray={versionArray}
        />
      ) : (
        <SectionHeading newList={newList} path={path} />
      )}
      {tree.map(node => (
        <TreeNode node={node} path={path} key={node.path + node.title} />
      ))}
    </ul>
  );
};

export default LeftNav;
