import React from "react";
import { Link } from "react-router-dom";
import { updateMonetization } from "../../utils/monetization";

export const Game = ({
  match: {
    params: { id },
  },
}) => {
  updateMonetization("$ilp.uphold.com/2f28xFUMdj9Z");
  console.log(window.ddrmat);
  return (
    <div className="game">
      <h1>Game {id}</h1>
      <p>This is the Game component.</p>
      <Link to="/">home</Link>
    </div>
  );
};

export default Game;
