import React from "react";
import "../components/style/about.css";
import Image1 from "../assets/images/maharaj.jpeg";

const AboutComponent = () => {
  return (
    <div className="aboutPage">
    
    <div className="aboutAll">
      <div className="aboutVedic shadow">
        <div className="aboutContent">
        <div className="aboutContent-t float-child">
          <h1 className="head">ABOUT VEDIC MATHS</h1>

          <div className="paras">
            <p>
              Vedic Mathematics is the name given to a supposedly ancient system
              of calculation which was "rediscovered" from the Vedas between
              1911 and 1918 by Sri Bharati Krishna Tirthaji Maharaj (1884-1960).
              According to Tirthaji, all of Vedic mathematics is based on
              sixteen sutras, or wordformulae. "Vedic Mathematics" refers to a
              technique of calculation based on a set of 16 Sutras, or
              aphorisms, as algorithms and their subsutras or corollaries
              derived from these Sutras. Its enthusiasts advance the claim that
              any mathematical problem can be solved mentally with these sutras.
            </p>
            </div>
          
            </div>
           
  <img src={Image1} alt="" className='maharaj float-child'/>
        </div>
        </div>
</div>
        <div className="benefits shadow">
          <h1 className="head">Benefits</h1>
          <ul>
            <li>Provides an insight into ancient Indian mathematics</li>
            <li>Eradicates the fear of Mathematics and instils confidence</li>
            <li>Improves calculation speed and numerical skills</li>
            <li>Sharpens the brain</li>
            <li>
              Facilitates a habit of analytical thinking and measured approach
              towards any problem
            </li>
            <li>
              Enhances holistic development of human brain through
              multi-dimensional thinking approach.
            </li>
          </ul>
        </div>
      </div>
    
  );
};

export default AboutComponent;
