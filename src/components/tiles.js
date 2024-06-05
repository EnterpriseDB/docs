import React from "react";
import { CardDecks } from "../components";

export const TileModes = {
  None: "none",
  Simple: "simple",
  Full: "full",
};

const Tiles = ({ mode, node }) => {
  if (!node || !node.items) return null;
  if (mode === TileModes.None) return null;

  if (Object.values(TileModes).includes(mode)) {
    const decks = {};
    let currentDeckName = "";
    for (let item of node.items) {
      if (!item.path) {
        currentDeckName = item.title;
      } else {
        decks[currentDeckName] = decks[currentDeckName] || [];
        decks[currentDeckName].push(item);
      }
    }

    return Object.keys(decks).map((deckName) => {
      return (
        <CardDecks
          cards={decks[deckName]}
          cardType={mode}
          deckTitle={deckName}
        />
      );
    });
  }
  return null;
};

export default Tiles;
