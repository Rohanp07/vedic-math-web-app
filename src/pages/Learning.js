import React from "react";
import ReactPlayer from "react-player/youtube";
import "../components/style/learning.css";
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
const Learning = (props) => {
  const history = useHistory();
  const loc = props.info.pracP
  // console.log(loc)
  const handleClick = () => history.push(loc)
  return (
    <div className="overall">
    <div className="sub-overall">
      <div className="car">
          <Carousel className="carou">
          <Carousel.Item interval={1000}>
            {/* <img
              className="d-block w-100"
              // src="holder.js/800x400?text=First slide&bg=373940"
              src="C:\\Users\\acer\\Desktop\\hj.jpg"
              alt="First slide"
            /> */}
            <div className='first-slide'>
                
            </div>
            <Carousel.Caption>
            <h3>Arise, awake, and stop not till the goal is reached </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            /> */}
            <div className='second-slide'>
                {/* <h1>Hello</h1> */}
            </div>
            <Carousel.Caption>
              <h3>Let us Help U</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <div className='third-slide'>
                    {/* <h1>Hello</h1> */}
                </div>
            <Carousel.Caption>
              <h3>Make maths simple with these Tricks. You and Us , Let's Rock</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <h1 className="head" style={{ padding: "2%" }}>LEARN VEDIC MATHS</h1>

        <div className="covering">
          <div className="one">
            <div className="player">
                        <ReactPlayer
                          url={props.info.videoLink}
                          controls="true"
                          id="ytPlayer"
                        />
            </div>
            <div className="infoDiv">
              <h3>{props.info.name}</h3>
              <p className="infoPara">
                {props.info.textInfo}
              </p>
            </div>
            <br></br>
            <h3 style={{ fontStyle:'italic' }}>We hope you understood the concepts well, lets brush them up by solving some problems</h3>
            <br></br>
            <Button variant="primary" onClick={handleClick}>Solve Problems</Button>
          </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Learning;
