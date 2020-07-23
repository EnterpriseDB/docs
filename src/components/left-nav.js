import React from 'react';
import { Link } from 'gatsby';
import Icon, { iconNames } from './icon/';
import VersionDropdown from './version-dropdown';
import { products } from '../constants/products';

const baseUrl = (path, depth) => {
  return path
    .split('/')
    .slice(0, depth)
    .join('/');
};

const productIcon = path => {
  const product = path.split('/')[1];
  return products[product] ? products[product].iconName : null;
};

const filterAndSort = (nodes, url) => {
  return nodes
    .map(node => ({
      title: node.frontmatter.title || 'TITLE NEEDED',
      navTitle: node.frontmatter.navTitle,
      path: node.fields.path,
      items: [],
      itemObj: {},
    }))
    .filter(node => node.path.includes(url))
    .sort((a, b) => {
      if (a.path < b.path) {
        return -1;
      }
      if (a.path > b.path) {
        return 1;
      }
      return 0;
    });
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

const SubList = ({ children, collapsed }) => {
  if (collapsed) {
    return null;
  } else {
    return (
      <ul className="ml-4 list-unstyled align-items-center">{children}</ul>
    );
  }
};

const Back = () => {
  return (
    <li className="ml-0 mb-3">
      <Link to="/" className="d-block py-1 align-middle small text-dark">
        <Icon
          iconName={iconNames.ARROW_LEFT}
          className="fill-black mt-n1 mr-1"
          width="12"
          height="12"
        />
        Back
      </Link>
    </li>
  );
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

const TreeNode = ({ node, path }) => {
  if (!node.path) {
    return (
      <li
        className="mt-3 mb-2 font-weight-bold text-muted text-uppercase small"
        key={node.path}
      >
        {node.navTitle ? node.navTitle : node.title}
      </li>
    );
  }

  return (
    <li className="ml-0 align-items-center" key={node.path}>
      <div className="d-flex align-items-center">
        <Link
          to={node.path}
          className={`d-inline-block py-1 align-middle lh-12 ${
            path === node.path ? 'active font-weight-bold text-dark' : ''
          }`}
        >
          {node.navTitle ? node.navTitle : node.title}
        </Link>
      </div>
      {node.items.length > 0 && (
        <SubList collapsed={!path.includes(node.path)}>
          {node.items.map(subNode => (
            <TreeNode node={subNode} path={path} key={subNode.path} />
          ))}
        </SubList>
      )}
    </li>
  );
};

const LeftNav = ({ navLinks, path, versionArray, navOrder = null }) => {
  const newList = versionArray
    ? filterAndSort(navLinks, baseUrl(path, 3))
    : filterAndSort(navLinks, baseUrl(path, 2));
  const tree = orderTree(makeTree(newList), navOrder);
  return (
    <ul className="list-unstyled mt-0">
      <Back />
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
