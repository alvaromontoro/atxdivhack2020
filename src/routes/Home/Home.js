import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home">
    <h1>Home</h1>
    <Link to="/pick/game">Game</Link>
    <Link to="/pick/demo">Demo</Link>
    <Link to="/loader">Custom</Link>
  </div>
);

export default Home;
