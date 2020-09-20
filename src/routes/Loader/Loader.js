import React, { useState } from "react";
import BackButton from "../../components/Back/Back";
import { Link } from "react-router-dom";
import "./Loader.css";

export const Loader = () => {
  const [data, setData] = useState(null);

  const processData = () => {
    const stringToProcess = document.querySelector("#json-to-process").value || "";

    try {
      const jsonProcessed = JSON.parse(stringToProcess);

      if (
        jsonProcessed &&
        jsonProcessed.title &&
        jsonProcessed.artist &&
        jsonProcessed.multimedia
      ) {
        setData(jsonProcessed);
        window.localData = jsonProcessed;
      }
    } catch (e) {
      console.log("Error:", e.message);
      setData(null);
    }
  };

  return (
    <div className="loader">
      <h1>Loader</h1>
      <div className="form">
        <p>Here you can load your JSON.</p>
        <textarea
          id="json-to-process"
          placeholder="Enter your JSON here"
          aria-label="JSON with Web DDR information"
        ></textarea>
        <button onClick={processData}>Process JSON</button>
        {data && (
          <div>
            <Link to="/game/user-load">Play Game</Link>
            <Link to="/demo/user-load">Play Demo</Link>
          </div>
        )}
      </div>
      <BackButton />
    </div>
  );
};

export default Loader;
