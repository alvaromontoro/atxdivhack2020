import React from "react";
import { Link } from "react-router-dom";

export const Picker = ({
  match: {
    params: { type },
  },
}) => (
  <div className="picker">
    <h1>Picker {type}</h1>
    <p>This is the Demo component.</p>
    <Link to={`/${type}/one`}>Song one</Link>
    <br />
    <Link to={`/${type}/two`}>Song Two</Link>
  </div>
);

export default Picker;
