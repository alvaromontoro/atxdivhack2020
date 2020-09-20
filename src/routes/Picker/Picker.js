import React from "react";
import SongList from "../../components/SongList/SongList";
import BackButton from "../../components/Back/Back";
import "./Picker.css";

export const Picker = ({
  match: {
    params: { type },
  },
}) => {
  console.log("Monetization updated to original");

  return (
    <div className="picker">
      <h1 className="outline-dark">Pick a song</h1>
      <div className="songlist">
        <SongList type={type} />
      </div>
      <BackButton />
    </div>
  );
};

export default Picker;
