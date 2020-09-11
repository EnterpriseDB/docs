import React from 'react';

const BuildInfo = ({ pageContext }) => {
  return (
    <div style={{marginLeft: '5px'}}>
      <p>HEAD: { pageContext.sha }</p>
      <p>Branch: { pageContext.branch }</p>
      <p>Build Time: { new Date(pageContext.buildTime).toString() }</p>
    </div>
  )
}

export default BuildInfo;
