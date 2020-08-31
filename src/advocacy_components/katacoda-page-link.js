import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';

const KatacodaPageLink = ({ scenarioId, text = 'Launch tutorial' }) => (
  <Link to={scenarioId}>
    <Button variant='secondary'>{text}</Button>
  </Link>
);

export default KatacodaPageLink;
