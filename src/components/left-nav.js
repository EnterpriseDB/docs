import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import DottedBox from './icons/dotted-box';
import ArrowLeft from './icons/arrow-left';
import ChevronDown from './icons/chevron-down';
import ChevronRight from './icons/chevron-right';
import { Button } from 'react-bootstrap';

const baseUrl = (path, depth) => {
  return path
    .split('/')
    .slice(0, depth)
    .join('/');
};

const filterAndSort = (nodes, url) => {
  return nodes
    .map(node => ({
      title: node.frontmatter.title,
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
      if (leaf.path.includes(navItem)) {
        result.push(leaf);
      }
    }
  }
  return result;
};


const DisplayNone = styled('div')`
  display: none;
`;

const SubList = ({ children, collapsed }) => {
  if (collapsed) {
    return (
      <DisplayNone>
        <ul>{children}</ul>
      </DisplayNone>
    );
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
        <ArrowLeft className="fill-black mt-n1 mr-1" width="12" height="12" />
        Back
      </Link>
    </li>
  );
};

const SectionHeading = ({ newList }) => {
  return (
    <li className="ml-0 mb-4 d-flex align-items-center">
      <DottedBox className="opacity-2 mr-2" width="52" height="52" />
      <Link
        to="/"
        className="d-block py-1 align-middle balance-text h5 m-0 text-dark"
      >
        {newList[0].title}
      </Link>
    </li>
  );
};

const TreeNode = ({ node, path }) => {
  return (
    <li className="ml-0 align-items-center" key={node.path}>
      <div className="d-flex align-items-center">
        <Link
          to={node.path}
          className={`d-inline-block py-1 align-middle ${
            path === node.path ? 'active font-weight-bold' : ''
          }`}
        >
          {node.title}
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

const LeftNav = ({ navLinks, path, withVersions, navOrder = null }) => {
  const newList = withVersions
    ? filterAndSort(navLinks, baseUrl(path, 3))
    : filterAndSort(navLinks, baseUrl(path, 2));
  const tree = orderTree(makeTree(newList), navOrder);
  return (
    <ul className="list-unstyled mt-0">
      <Back />
      <SectionHeading newList={newList} />
      {tree.map(node => (
        <TreeNode node={node} path={path} key={node.path} />
      ))}
    </ul>
  );
};

export default LeftNav;
