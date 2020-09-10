import React from 'react';
import { Button } from 'react-bootstrap';

const CodeBlock = (props) => {
  const runClick = (e) => {
    e.target.closest('figure').querySelector('.katacoda-exec').click();
  };

  return (
    <figure>
      <pre {...props} style={{margin: 0, borderBottomRightRadius: 0}}/>
      <div className="d-flex justify-content-between flex-row-reverse">
        <Button size="sm" variant="light" className="no-br-tl no-br-tr">Copy</Button>
        <Button
          size="sm"
          variant="dark"
          className="no-br-tl no-br-tr katacoda-exec-button d-none"
          onClick={runClick}
        >
          Run
        </Button>
      </div>
    </figure>
  );
}

export default CodeBlock;
