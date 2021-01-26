import React from 'react';
import { Link } from './';
import { Row, Col } from 'react-bootstrap';
import { productStubs } from '../constants/product-stubs';

const StubLink = ({ link }) => {
  return (
    <li>
      <Link to={link.href}>{link.text}</Link>
    </li>
  );
};

const StubSection = ({ section }) => {
  return (
    <div>
      <h3>{section.title}</h3>
      <ul>
        {section.links.map((link, i) => (
          <StubLink link={link} key={link.href + i} />
        ))}
      </ul>
    </div>
  );
};

const StubCards = ({ product, version }) => {
  const stubData = productStubs[product][version];
  const columnCount = stubData.sections.reduce(
    (max, section) => Math.max(max, section.column),
    1,
  );

  return (
    <Row>
      {Array.from(Array(columnCount), (e, i) => {
        const sections = stubData.sections.filter(
          section => section.column === i + 1,
        );
        return (
          <Col md={4} key={`column_${i}`}>
            {sections.map(section => (
              <StubSection section={section} key={section.title} />
            ))}
          </Col>
        );
      })}
    </Row>
  );
};

export default StubCards;
