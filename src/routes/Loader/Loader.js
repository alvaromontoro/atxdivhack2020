import React from "react";
import { Link } from "react-router-dom";

export const Loader = () => (
  <div className="loader">
    <h1>Loader</h1>
    <p>Here you can load your JSON.</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default Loader;
