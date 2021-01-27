import React from 'react';
import { Link } from './';
import { Row, Col } from 'react-bootstrap';
import { productStubs } from '../constants/product-stubs';
import Icon from './icon';
import isAbsoluteUrl from 'is-absolute-url';

const StubLink = ({ link }) => {
  const pdf = link.href.trim().endsWith('.pdf');
  const external = isAbsoluteUrl(link.href);

  return (
    <li>
      <Link to={link.href}>{link.text}</Link>
      {external && (
        <Icon
          iconName="export"
          className="fill-blue ml-2 position-relative top-minus-2"
          width="16"
          height="auto"
        />
      )}
      {pdf && (
        <Icon
          iconName="PDF"
          className="fill-orange ml-2 position-relative top-minus-2"
          width="16"
          height="auto"
        />
      )}
    </li>
  );
};

const StubSection = ({ section }) => {
  return (
    <div className="mb-5">
      <h3 className="mb-3">{section.title}</h3>
      <ul className="list-unstyled">
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
    <Row className="mt-5">
      {Array.from(Array(columnCount), (e, i) => {
        const sections = stubData.sections.filter(
          section => section.column === i + 1,
        );
        return (
          <Col md={6} key={`column_${i}`}>
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
