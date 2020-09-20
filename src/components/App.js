import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../routes/Home/Home.js";
import Game from "../routes/Game/Game.js";
import Demo from "../routes/Demo/Demo.js";
import Picker from "../routes/Picker/Picker.js";
import Loader from "../routes/Loader/Loader.js";

function App() {
  return (
    <Router>
      <main id="main">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pick/:type" component={Picker} />
          <Route path="/game/:id" component={Game} />
          <Route path="/demo/:id" component={Demo} />
          <Route path="/loader" component={Loader} />
          {/* <Route path="/about/:name" component={About} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
