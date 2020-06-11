import React from 'react';
import { Link } from 'gatsby';
import { Col } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon';

const FullCard = ({ card }) => (
  <div className="card rounded shadow-sm p-2 mt-4">
    <Link to={card.fields.path}>
      <Icon iconName={iconNames.DOTTED_BOX} className="opacity-1 mt-3 ml-3" width="100" height="100" />
    </Link>
    <div className="card-body">
      <h3 className="card-title balance-text">
        <Link to={card.fields.path}>
          {card.frontmatter.navTitle || card.frontmatter.title}
        </Link>
      </h3>

      <p className="card-text">{card.frontmatter.description}</p>

      {card.children.map(child => (
        <Link
          key={child.fields.path}
          to={child.fields.path}
          className="btn btn-link btn-block text-left p-0"
        >
          {child.frontmatter.navTitle || child.frontmatter.title}
        </Link>
      ))}
    </div>
  </div>
);

const SimpleCard = ({ card }) => (
  <div className="card rounded shadow-sm p-2 mt-4">
    <div className="card-body">
      <h3 className="card-title balance-text">
        <Link className="stretched-link" to={card.fields.path}>
          {card.frontmatter.navTitle || card.frontmatter.title}
        </Link>
      </h3>

      <p className="card-text">{card.frontmatter.description}</p>
    </div>
  </div>
);

const CardDecks = ({ cards, colSize = 4, cardType = 'simple' }) => {
  return (
    <div className="card-deck row no-gutters">
      {cards.map(card => {
        return (
          <Col key={card.fields.path} md={colSize} className="d-flex">
            {cardType === 'full' ? (
              <FullCard card={card} />
            ) : (
              <SimpleCard card={card} />
            )}
          </Col>
        );
      })}
    </div>
  );
};

export default CardDecks;
