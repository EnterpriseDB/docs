import React from 'react';
import { Link } from '../components/';
import { Col } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';

const FullCard = ({ card }) => {
  const iconName = card.iconName || iconNames.DOTTED_BOX;

  return (
    <div className="card rounded shadow-sm p-2 mt-4">
      <Link to={card.path}>
        <Icon
          iconName={iconName}
          className={`${
            iconName === iconNames.DOTTED_BOX && 'opacity-1'
          } mt-3 ml-3`}
          width="100"
          height="100"
        />
      </Link>
      <div className="card-body">
        <h3 className="card-title balance-text">
          <Link to={card.path}>{card.navTitle || card.title}</Link>
        </h3>

        <p className="card-text">{card.description}</p>

        {(card.children || []).map((child) => (
          <Link
            key={child.path}
            to={child.path}
            className="btn btn-link btn-block text-left p-0"
          >
            {child.navTitle || child.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

const SimpleCard = ({ card }) => (
  <div className="card rounded shadow-sm p-2 mt-4">
    <div className="card-body">
      <h3 className="card-title balance-text">
        <Link className="stretched-link" to={card.path}>
          {card.navTitle || card.title}
        </Link>
      </h3>

      <p className="card-text">{card.description}</p>
    </div>
  </div>
);

const CardDecks = ({ cards, cardType = 'simple' }) => {
  return (
    <div className="card-deck row no-gutters">
      {cards.map((card) => {
        return (
          <Col
            key={card.path}
            md={cardType === 'full' ? 6 : 4}
            className="d-flex"
          >
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
