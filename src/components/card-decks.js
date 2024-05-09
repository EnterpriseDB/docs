import React from "react";
import { Link } from "../components/";
import { Col } from "react-bootstrap";
import Icon from "../components/icon/";
import GithubSlugger from "github-slugger";

const KatacodaBadge = () => <span className="new-thing">Demo</span>;

const FullCard = ({ card }) => {
  return (
    <div className="card rounded shadow-sm p-2 mt-4 w-100">
      {card.iconName && (
        <Link to={card.path}>
          <Icon
            iconName={card.iconName}
            className="mt-3 ms-3 fill-orange"
            width="100"
            height="100"
          />
        </Link>
      )}
      <div className="card-body">
        <h3 className="card-title balance-text">
          <Link to={card.path}>{card.navTitle || card.title}</Link>
        </h3>

        <p className="card-text">{card.description}</p>

        <div className="d-grid gap-2">
          {card.items.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className="btn btn-link text-start p-0"
            >
              {child.navTitle || child.title}
              {child.interactive && <KatacodaBadge />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const SimpleCard = ({ card }) => (
  <div className="card rounded shadow-sm p-1 mb-4 w-100">
    <div className="card-body">
      <h3 className="card-title balance-text">
        <Link className="stretched-link" to={card.path}>
          {card.navTitle || card.title}
          {card.interactive && <KatacodaBadge />}
        </Link>
      </h3>

      <p className="card-text">{card.description}</p>
    </div>
  </div>
);

const CardDecks = ({ cards, cardType = "simple", deckTitle = "" }) => {
  let slugger = new GithubSlugger();
  return (
    <>
      {deckTitle && (
        <h2 className="mt-3" id={"section-" + slugger.slug(deckTitle)}>
          {deckTitle}
        </h2>
      )}
      <div className="container">
        <div className="row no-gutters">
          {cards.map((card) => {
            return (
              <Col
                key={card.path}
                md={12}
                lg={6}
                xl={cardType === "simple" && 4}
                className="d-flex"
              >
                {cardType === "full" ? (
                  <FullCard card={card} />
                ) : (
                  <SimpleCard card={card} />
                )}
              </Col>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardDecks;
