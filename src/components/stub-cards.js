import React from 'react';
import { Link } from './';
import { Row, Col } from 'react-bootstrap';
import { productStubs } from '../constants/product-stubs';
import Icon from './icon';

const PdfIcon = ({ className }) => (
  <Icon
    iconName="PDF"
    className={`fill-orange position-relative top-minus-2 ${className}`}
    width="16"
    height="auto"
  />
);

const StubLink = ({ link }) => {
  const primaryLink = link.href ? link.href : link.pdf;
  const primaryLinkIsPdf = !link.href;

  if (!primaryLink) {
    return <>{link.text}</>;
  }

  return (
    <li>
      <Link to={primaryLink}>
        {link.text}
        {primaryLinkIsPdf && <PdfIcon className="ml-2" />}
      </Link>

      {link.pdf && link.href && (
        <Link to={link.pdf} className="ml-2">
          <PdfIcon />
        </Link>
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
