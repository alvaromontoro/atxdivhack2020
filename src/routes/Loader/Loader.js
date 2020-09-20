import React, { useState } from "react";
import BackButton from "../../components/Back/Back";
import "./Loader.css";

export const Loader = () => {
  const [data, setData] = useState("");

  return (
    <div className="loader">
      <h1>Loader</h1>
      <div className="form">
        <p>Here you can load your JSON.</p>
        <textarea
          placeholder="Enter your JSON here"
          aria-label="JSON with Web DDR information"
        ></textarea>
        <button>Process JSON</button>
      </div>
      <BackButton />
    </div>
  );
};

export default Loader;
