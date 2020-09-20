import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <h1>Home</h1>
    <p>This is the Home component.</p>
    <Link to="/pick/game">Game</Link>
    <Link to="/pick/demo">Demo</Link>
    <Link to="/loader">Custom</Link>
  </div>
);

export default Home;
