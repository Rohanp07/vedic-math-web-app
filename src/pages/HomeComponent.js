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
      pracP:"/practiceN",
      content:"Nikhilam Sutra stipulates subtraction of a number from the nearest power of 100 ie 10,100,1000,",
      ht:<strong>Wanna learn with us? Lets Go!!!!</strong>
    },
    {
      opr: "Ekadiken Purven",
      page: "/learnEka",
      pracP:"/practiceE",
      content:"Ekadhikena Purvena (One More than the Previous) is a sutra useful in finding squares of numbers.SO get ready to find squares blazing fast and flaunt before your Friends",
      ht:<strong>Shhhh!!! it's a secret"</strong>
    },
    {
      opr: "Antyayordashkepi",
      page: "/learnAntya",
      pracP:"/practiceA",
      content:"This sutra is helpful in multiplying numbers whose last digits add up to 10. Wanna know the tricks of HUman Computer.",
      ht:<strong>Know the secret recipes.</strong>
    },
    {
      opr: "Nikhilam Navatashcaramam Dashatah(Multiplication-Version)",
      page: "/learnNikhilamMulti",
      pracP:"/practiceNM",
      content:"Nikhilam Sutra stipulates subtraction of a number from the nearest power of 100 ie 10,100,1000,",
      ht:<strong>Wanna learn with us? Lets Go!!!!</strong>
    },
  
  ]);
  const Information = information;
  return (
    <div>
        <Particles
        params={{
          particles: {
            number: {
              value: 1000,
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
        
      <h1 className="JumboHeading " style={{color:"azure",paddingTop:'3%' , paddingBottom:'3%'}}>Start Learning !! 📚</h1>
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
