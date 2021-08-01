import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import CardComponent from "../components/CardComponent";
import Image from "../assets/images/hj3.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import "../components/style.css";
import information from "../assets/info";
import firebase from "firebase";
import fire from "../components/firebase";
import "../components/style/homepage.css"
import JumboImg from "../assets/images/jumbotronImg.svg"
// import Particles from "react-tsparticles";
import Particles from 'react-particles-js';

const HomeComponent = () => {

    


    // const isLogin=false
  


  const [operations, setOperation] = useState([
    {
      opr: "Nikhilam Navatashcaramam Dashatah",
      page: "/learnNikhilam",
      pracP:"/practiceN"
    },
    {
      opr: "Ekadiken Purven",
      page: "/learnEka",
      pracP:"/practiceE"
    },
    {
      opr: "Antyayordashkepi",
      page: "/learnAntya",
      pracP:"/practiceA"
    },
  ]);
  const Information = information;
  return (
    <div>
        <Particles
        params={{
          particles: {
            number: {
              value: 500,
              density: {
                enable: true,
                value_area: 2000,
              }
            },
          },
        }}
    
      /> 
    <div className="homePage">
      <Jumbotron fluid>
        <Container className="first">
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "50px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  display: "inline-block",
                  width: "80%",
                  marginRight: "10px",
                }}
              >
                <h1 className="JumboHeading">What do we offer?</h1>
                <p className="l">
                  "We offer multiple courses regarding Vedic maths which would
                  not only strengthen your concepts but our interactive practise
                  sessions would make sure that you are clear with the taught
                  concepts."
                </p>
              </p>
            </div>
            <img
              src={JumboImg}
              style={{ width: "20%", height: "20%", float: "right" }}
            ></img>
          </div>
        </Container>
      </Jumbotron>
                

      <div class="container learning" >
        
      <h1 className="JumboHeading" style={{paddingTop:'3%' , paddingBottom:'3%'}}>Start Learning !! 📚</h1>
        <CardDeck>
          {operations.map((operations) => (
            <CardComponent operations={operations} />
          ))}
        </CardDeck>
      </div>
      <br></br>
      <br></br>


      </div>
    </div>

    
  );
};

export default HomeComponent;
