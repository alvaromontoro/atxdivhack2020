import React from "react";
import { Link } from "react-router-dom";

export const Game = ({
  match: {
    params: { id },
  },
}) => (
  <div>
    <h1>Game {id}</h1>
    <p>This is the Game component.</p>
    <Link to="/">home</Link>
  </div>
);

export default Game;
