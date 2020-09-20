import React from "react";
import BackButton from "../../components/Back/Back";
import "./Loader.css";

export const Loader = () => (
  <div className="loader">
    <h1>Loader</h1>
    <p>Here you can load your JSON.</p>
    <BackButton />
  </div>
);

export default Loader;
