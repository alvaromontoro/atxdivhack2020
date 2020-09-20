import React from "react";
import BackButton from "../../components/Back/Back";
import { updateMonetization } from "../../utils/monetization";

import "./Demo.css";

export const Demo = ({
  match: {
    params: { id },
  },
}) => {
  let data = {};
  // load the data
  if (id) {
    data = require(`../../data/songs/${id}.json`);
  } else {
    data = window.localData;
  }
  updateMonetization(data.monetization);

  return (
    <div className="demo">
      <h1>
        {data.title}
        <span>by {data.artist}</span>
      </h1>
      <div id="pad">
        <svg viewBox="0 0 100 100"></svg>
      </div>
      <BackButton />
    </div>
  );
};

export default Demo;
