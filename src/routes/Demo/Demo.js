import React from "react";
import BackButton from "../../components/Back/Back";
import { updateMonetization } from "../../utils/monetization";

import "./Demo.css";

export const Demo = ({
  match: {
    params: { id },
  },
}) => {
  // const mat = window.ddrmat;
  let data = {};
  // load the data
  if (id) {
    data = require(`../../data/songs/${id}.json`);
  } else {
    data = window.localData;
  }
  updateMonetization(data.monetization);

  //mat.on("")

  return (
    <div className={`demo ${data.multimedia.video && "video"}`}>
      {data.multimedia.video && (
        <div id="video">
          <iframe
            title={`Video for ${data.title}`}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${data.multimedia.video}?controls=0&amp;autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <h1 className="outline">
        {data.title}
        <span>by {data.artist}</span>
      </h1>
      <div id="pad">
        <div id="top-bar">
          <div>Select</div>
          <div>Start</div>
        </div>
        <div id="buttons">
          <div id="top-left">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path d="M 30,30 70,70 M30,70 70,30" stroke="#222" strokeWidth="7" />
            </svg>
          </div>
          <div id="top-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path
                d="M 50,20 80,50 65,50 65,70 35,70 35,50 20,50 Z"
                stroke="#fff"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
          <div id="top-right">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="20" stroke="#222" strokeWidth="7" fill="none" />
            </svg>
          </div>
          <div id="center-left">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path
                d="M 20,50 50,20 50,35 70,35 70,65 50,65 50,80 20,50 Z"
                stroke="#fff"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
          <div id="center-center">
            Web DDR <abbr title="Austin Texas Diversity Hackathon 2020">ATXDivHack 2020</abbr>
          </div>
          <div id="center-right">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path
                d="M 80,50 50,20 50,35 30,35 30,65 50,65 50,80 80,50 Z"
                stroke="#fff"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
          <div id="bottom-left">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path d="M 50,30 70,70 30,70 Z" stroke="#222" strokeWidth="7" fill="none" />
            </svg>
          </div>
          <div id="bottom-center">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path
                d="M 50,80 80,50 65,50 65,30 35,30 35,50 20,50 Z"
                stroke="#fff"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>
          <div id="bottom-right">
            <svg width="100%" height="100%" viewBox="0 0 100 100">
              <path d="M 30,30 30,70 70,70 70,30 Z" stroke="#222" strokeWidth="7" fill="none" />
            </svg>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default Demo;
