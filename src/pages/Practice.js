import React, { useState, setState } from "react";
import questions from "../assets/questions";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import '../components/style/practice.css'
import mathImg from '../assets/images/undraw_mathematics_4otb.png'

export default function Practice() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [value, setValue] = React.useState("");
  const [flag, setFlag] = useState(0);

  function test() {}

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
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
		  <img src = {mathImg} className="image mathImg"/>   
        </div>
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
		</div>
		  <img src = {mathImg} className="image mathImg"/>   
        </>
      )}
    </div>
  );
}
