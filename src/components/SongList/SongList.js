import React from "react";
import { Link } from "react-router-dom";
import songs from "../../data/songs.json";
import "./SongList.css";

export const SongList = ({ type }) => {
  return (
    <ul class="songs">
      {songs.data.map((el) => (
        <li key={el.id}>
          <Link to={`/${type}/${el.id}`} className="song-link">
            <div className="song-title outline">{el.title}</div>
            <div className="song-artist">by {el.artist}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
