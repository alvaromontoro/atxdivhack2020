import React from "react";
import { Link } from "react-router-dom";
import { updateMonetization } from "../../utils/monetization";
import "./Home.css";

export const Home = () => {
  updateMonetization();

  if (window.ddrmat) {
    // reset the options
    window.ddrmat
      .before("button2", () => {})
      .before("button3", () => {})
      .before("button1", () => {})
      .before("button0", () => {});
  }

  return (
    <div className="home">
      <h1 className="outline-dark">
        Web DDR
        <abbr title="Austin Texas Diversity Hackathon 2020">ATXDivHack 2020</abbr>
      </h1>
      <div className="menu">
        <Link to="/pick/game" className="outline">
          Game
        </Link>
        <br />
        <Link to="/pick/demo" className="outline">
          Demo
        </Link>
        <br />
        <Link to="/loader" className="outline">
          Custom
        </Link>
      </div>
    </div>
  );
};

export default Home;
