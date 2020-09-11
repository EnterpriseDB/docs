import React from 'react';
import DevOnly from './dev-only';

const DevFrontmatter = ({ frontmatter }) => {
  let keys = Object.keys(frontmatter);
  return (
    <DevOnly>
      <div className="alert alert-primary mt-5" role="alert">
        <div>Page frontmatter</div>
        <br />
        {keys.map(key => (
          <div key={key}>
            <strong>{key}</strong>: {frontmatter[key]}
          </div>
        ))}
      </div>
    </DevOnly>
  );
};

export default DevFrontmatter;
