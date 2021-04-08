import React from 'react';
import { Link } from '../components/';
import { Col } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';

const KatacodaBadge = () => <span className="new-thing">Katacoda</span>;

const showInteractiveBadge = (frontmatter) =>
  frontmatter.showInteractiveBadge != null
    ? frontmatter.showInteractiveBadge
    : !!frontmatter.katacodaPanel;

const FullCard = ({ card }) => {
  const iconName = card.frontmatter.iconName || iconNames.DOTTED_BOX;

  return (
    <div className="card rounded shadow-sm p-2 mt-4">
      <Link to={card.fields.path}>
        <Icon
          iconName={iconName}
          className={`${
            iconName === iconNames.DOTTED_BOX && 'opacity-1'
          } mt-3 ml-3 fill-orange`}
          width="100"
          height="100"
        />
      </Link>
      <div className="card-body">
        <h3 className="card-title balance-text">
          <Link to={card.fields.path}>
            {card.frontmatter.navTitle || card.frontmatter.title}
          </Link>
        </h3>

        <p className="card-text">{card.frontmatter.description}</p>

        {card.children.map((child) => (
          <Link
            key={child.fields.path}
            to={child.fields.path}
            className="btn btn-link btn-block text-left p-0"
          >
            {child.frontmatter.navTitle || child.frontmatter.title}
            {showInteractiveBadge(child.frontmatter) && <KatacodaBadge />}
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
        <Link className="stretched-link" to={card.fields.path}>
          {card.frontmatter.navTitle || card.frontmatter.title}
          {showInteractiveBadge(card.frontmatter) && <KatacodaBadge />}
        </Link>
      </h3>

      <p className="card-text">{card.frontmatter.description}</p>
    </div>
  </div>
);

const CardDecks = ({ cards, cardType = 'simple' }) => {
  return (
    <div className="card-deck row no-gutters">
      {cards.map((card) => {
        return (
          <Col
            key={card.fields.path}
            md={12}
            lg={6}
            xl={cardType === 'simple' && 4}
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
