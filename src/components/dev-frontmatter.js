import React from 'react';
import DevOnly from './dev-only';

const DevFrontmatter = ({ frontmatter }) => {
  let keys = Object.keys(frontmatter);
  return (
    <DevOnly>
      <div className="alert alert-primary mt-5 break-word" role="alert">
        <div>Page frontmatter</div>
        <br />
        {keys.map((key) => {
          let val = frontmatter[key];
          if (typeof val !== 'string') {
            val = JSON.stringify(val);
          }

          return (
            <div key={key}>
              <strong>{key}</strong>: {val}
            </div>
          );
        })}
      </div>
    </DevOnly>
  );
};

export default DevFrontmatter;
