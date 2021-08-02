import React, { useState, setState } from "react";
// import questions from "../assets/questions";
// import q3 from "../assets/q3";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import '../components/style/practice.css'
import mathImg from '../assets/images/Question.svg'
// import Timer from '../components/Timer'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import '../components/style/timerClock.css'
import { useHistory } from 'react-router-dom';

export default function Practice(props) {
  const questions=props.questions
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = React.useState("");
  const [flag, setFlag] = useState(0);
  const [key, setKey] = useState(0);
  const history = useHistory();
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too late...</div>;
    }
  
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "true") {
      setFlag(1);
      // console.log("test")
    } else setFlag(0);
  };

  
  const next = () => {
    if (flag === 1) {
      setScore(score + 1);
      // console.log("three")
    }

    // console.log("three"+flag)
    setValue("");
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    setFlag(0);
    setKey(prevKey => prevKey + 1)
  };
  const handleBack=()=> history.push('/home'); 
  

  return (

    <div className="app">
      {showScore ? (
        <>
        <div>
        <div></div>
        <div className="score-section">
          
        <h1 className="finalScore">
          You scored {score} out of {questions.length} !!!
          </h1>
         
      </div> 
      <img src = {mathImg} className="image mathImg"/>   
      <Button variant="contained" color="primary" onClick={handleBack}>Back !</Button> 
      </div>
       
    
        </>
      ) : (
        <>
		  <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {/* <Button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</Button> */}
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={value}
              onChange={handleRadioChange}
            >
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <FormControlLabel
                  value={answerOption.isCorrect}
                  control={<Radio />}
                  label={answerOption.answerText}
                />
              ))}
            </RadioGroup>
          </div>
          <br></br>



          <Button variant="contained" color="primary" onClick={() => next()}>
            Next
          </Button>


        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={10}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => {
              next()
              return [true, 1500] // repeat animation in 1.5 seconds
            }}
          >
            {renderTime}
          </CountdownCircleTimer>
      </div>
		</div>
		  <img src = {mathImg} className="image mathImg"/>   
        </>
      )}
      
    </div>
  );
}
