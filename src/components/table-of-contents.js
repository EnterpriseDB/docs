import React from 'react';

const TableOfContents = ({ toc }) => (
  <ul className="list-unstyled border-left pl-4 lh-12 toc-sticky pt-3">
    <li className="mb-2 font-weight-bold text-muted text-uppercase small">
      On this page
    </li>
    {toc.map(item => (
      <li key={item.title}>
        <a className="d-block py-2 align-middle" href={item.url}>
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);

export default TableOfContents;
