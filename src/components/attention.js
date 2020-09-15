import React from 'react';
import { Alert } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';

const Attention = ({ children, ...otherProps }) => (
  <Alert variant="warning" {...otherProps}>
    <Markdown>
      { children }
    </Markdown>
  </Alert>
);

export default Attention;
