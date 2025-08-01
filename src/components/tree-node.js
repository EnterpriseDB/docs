import React from "react";
import { Link } from "./";

const Title = ({ node }) =>
  node.navTitle ? node.navTitle : node.title ? node.title : "TITLE NEEDED";

const SubList = ({ children, collapsed }) => {
  if (collapsed) {
    return null;
  } else {
    return (
      <ul className="ms-4 list-unstyled align-items-center">{children}</ul>
    );
  }
};

const KatacodaBadge = () => <span className="new-thing">Demo</span>;

const TreeNode = ({ node, path, hideIfEmpty }) => {
  if (!node.path) {
    if (hideIfEmpty) {
      return null;
    } else {
      return (
        <li className="mt-3 mb-2 fw-bold text-muted text-uppercase small">
          <Title node={node} />
          {/* {node.interactive && <KatacodaBadge />} */}
        </li>
      );
    }
  }

  return (
    <li className="ms-0 align-items-center list-parent" key={node.path}>
      <div className="d-flex align-items-center">
        <Link
          to={node.path}
          className={`d-inline-block py-1 align-middle lh-12 ${node.childCount && !node.rootedTo ? "section-title" : ""} ${node.rootedTo ? "transplanted-child" : ""} ${
            path === node.path ? "active fw-bold text-dark" : ""
          }`}
        >
          <Title node={node} />
          {node.interactive && <KatacodaBadge />}
        </Link>
      </div>
      {node.items.length > 0 && (
        <SubList collapsed={!path.includes(node.path)}>
          {node.items.map((subNode) => (
            <TreeNode
              node={subNode}
              path={path}
              key={subNode.path || subNode.navTitle || subNode.title}
            />
          ))}
        </SubList>
      )}
    </li>
  );
};

export default TreeNode;
