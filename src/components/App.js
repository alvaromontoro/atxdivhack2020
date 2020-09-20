import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home/Home.js";
import Game from "../routes/Game/Game.js";
import Demo from "../routes/Demo/Demo.js";
import Picker from "../routes/Picker/Picker.js";
import Loader from "../routes/Loader/Loader.js";
import Loading from "../components/Loading/Loading.js";
import gameControl from "gamecontroller.js/src/gamecontrol";

function App() {
  const [gamepad, setGamepad] = useState(false);

  gameControl.on("connect", function () {
    setGamepad(true);
  });

  gameControl.on("disconnect", function () {
    setGamepad(false);
  });

  return gamepad ? (
    <Router>
      <main id="main" tabIndex="-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pick/:type" component={Picker} />
          <Route path="/game/:id" component={Game} />
          <Route path="/demo/:id" component={Demo} />
          <Route path="/loader" component={Loader} />
        </Switch>
      </main>
    </Router>
  ) : (
    <Loading />
  );
}

export default App;
