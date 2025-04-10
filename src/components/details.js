import React from "react";

const Details = ({ summary, children, ...props }) => {
  return (
    <details {...props}>
      <summary>{summary}</summary>
      {children}
    </details>
  );
};

export default Details;
