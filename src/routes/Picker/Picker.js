import React from "react";
import SongList from "../../components/SongList/SongList";
import BackButton from "../../components/Back/Back";
import { updateMonetization } from "../../utils/monetization";
import "./Picker.css";

export const Picker = ({
  match: {
    params: { type },
  },
}) => {
  updateMonetization();

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
