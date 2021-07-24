import React from "react";
import ReactPlayer from "react-player/youtube";
import "../components/style/learning.css";
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';

const Learning = (props) => {
  const history = useHistory();
  const handleClick = () => history.push('/practice');
  return (
    <div>
      <h1 style={{ padding: "2%" }}>LEARN VEDIC MATHS</h1>
      <ReactPlayer
        url={props.info.videoLink}
        controls="true"
        id="ytPlayer"
      />
      <div className="infoDiv">
        <h3>{props.info.name}</h3>
        <p className="infoPara">
          {props.info.textInfo}
        </p>
      </div>
      <Button variant="primary" onClick={handleClick}>Solve Problems</Button>
    </div>
  );
};

export default Learning;
