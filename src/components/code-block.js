import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const CodeBlock = (props) => {
  const codeRef = React.createRef();

  const [copyButtonText, setCopyButtonText] = useState('Copy');
  const copyClick = (e) => {
    navigator.clipboard.writeText(codeRef.current.textContent).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopyButtonText('Copy');
      }, 3000)
    });
  };

  const runClick = (e) => {
    e.target.closest('figure').querySelector('.katacoda-exec').click();
  };

  return (
    <figure className='overflow-auto'>
      <pre {...props} ref={codeRef} />
      <div className="d-flex justify-content-between flex-row-reverse">
        <Button
          size="sm"
          variant="light"
          onClick={copyClick}
        >
          {copyButtonText}
        </Button>
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
