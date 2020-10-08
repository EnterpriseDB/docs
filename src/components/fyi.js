import React from 'react';
import { Alert } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';

const ForYourInfo = ({ children, ...otherProps }) => (
  <Alert variant="primary" className="border-2 border-bottom-0 border-top-0 border-right-0 br-tl-0 br-bl br-bl-0 max-w-80" {...otherProps}>
    <Markdown>
      { children }
    </Markdown>
  </Alert>
);

export default ForYourInfo;
