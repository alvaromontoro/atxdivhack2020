import React from "react";
import BackButton from "../../components/Back/Back";
import "./Demo.css";

export const Demo = ({
  match: {
    params: { id },
  },
}) => {
  console.log("update to artist");
  console.log(id);
  
  return (
    <div className="demo">
      <h1>Demo {id}</h1>
      <p>This is the Demo component.</p>
      <BackButton />
    </div>
  );
};

export default Demo;
