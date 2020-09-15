import React from 'react';
import { Button } from 'react-bootstrap';

const CodeBlock = (props) => {
  const runClick = (e) => {
    e.target.closest('figure').querySelector('.katacoda-exec').click();
  };

  return (
    <figure>
      <pre {...props}/>
      <div className="d-flex justify-content-between flex-row-reverse">
        <Button size="sm" variant="light">Copy</Button>
        <Button
          size="sm"
          variant="outline-info"
          className="katacoda-exec-button d-none"
          onClick={runClick}
        >
          ► Run
        </Button>
      </div>
    </figure>
  );
}

export default CodeBlock;
