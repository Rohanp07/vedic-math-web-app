import React,{useState} from 'react';
import questions from '../assets/questions';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Button from 'react-bootstrap/Button'


const Test = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [value, setValue] = React.useState('');
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
	var flag=false;
    
    return (
        <div>
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>

						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>

						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
                    <div className="options">
                    <ToggleButtonGroup>
                       
                    </ToggleButtonGroup>
                    </div>
                    <Button variant="contained" color="primary">Next</Button>

                
                </>
			)}
        </div>
        
    )
}

export default Test
