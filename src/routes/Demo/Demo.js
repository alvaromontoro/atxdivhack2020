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
  }
  updateMonetization(data.monetization);

  return (
    <div className="demo">
      <h1>Demo {id}</h1>
      <p>This is the Demo component.</p>
      <BackButton />
    </div>
  );
};

export default Demo;
