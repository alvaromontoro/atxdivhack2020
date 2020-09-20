import React from "react";
import SongList from "../../components/SongList/SongList";
import "./Picker.css";

export const Picker = ({
  match: {
    params: { type },
  },
}) => (
  <div className="picker">
    <h1 className="outline-dark">Pick a song</h1>
    <div class="songlist">
      <SongList type={type} />
    </div>
  </div>
);

export default Picker;
