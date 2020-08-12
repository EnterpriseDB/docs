import React from 'react';
import { Link } from 'gatsby';

const Title = ({ node }) =>
  node.navTitle ? node.navTitle : node.title ? node.title : 'TITLE NEEDED';

const SubList = ({ children, collapsed }) => {
  if (collapsed) {
    return null;
  } else {
    return (
      <ul className="ml-4 list-unstyled align-items-center">{children}</ul>
    );
  }
};

const TreeNode = ({ node, path }) => {
  if (!node.path) {
    return (
      <li
        className="mt-3 mb-2 font-weight-bold text-muted text-uppercase small"
        key={node.path}
      >
        <Title node={node} />
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
          <Title node={node} />
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

export default TreeNode;
