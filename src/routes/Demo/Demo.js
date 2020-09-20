import React from "react";
import { Link } from "react-router-dom";

export const Demo = ({
  match: {
    params: { id },
  },
}) => (
  <div className="demo">
    <h1>Demo {id}</h1>
    <p>This is the Demo component.</p>
    <Link to="/">home</Link>
  </div>
);

export default Demo;
