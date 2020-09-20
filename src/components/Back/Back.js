import React from "react";
import { Link } from "react-router-dom";
import "./Back.css";

export const Back = ({ type }) => {
  return (
    <Link to="/" className="back-button">
      <svg viewBox="0 0 100 100">
        <path
          d="M5,50 40,5 40,30 95,30 95,70 40,70 40,95Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    </Link>
  );
};

export default Back;
