import React from "react";
import ReactPlayer from "react-player/youtube";
import "../components/style/learning.css";
const Learning = () => {
  return (
    <div>
      <h1 style={{ padding: "2%" }}>LEARN VEDIC MATHS</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LC-8FujOVXQ&list=PLZnxqowr6IKjTAkRah5Ps58fBnoKx-37K"
        controls="true"
        id="ytPlayer"
      />
      <div className="infoDiv">
        <h3>Subtaction using Nikhilam Sutra</h3>
        <p className="infoPara">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Learning;
