import React from 'react';
import SelectionBox from '../selectionBox/SelectionBox';
import Button from '../button/Button';

import './Styles.scss';

const LearningModule = ({setGameStatus}) => {
  const [currentQuestionId, setCurrentQuestionId] = React.useState(0);
  const [quizData, setQuizData] = React.useState({});
  const [width, setWidth] = React.useState(1);
  
  let currentQuestion = quizData.questionArr ? quizData.questionArr[currentQuestionId]: {};
  React.useEffect(()=>{
    getQuizData();
  },[]);

  const getQuizData=()=>{
    fetch("http://localhost:8080/problems")
      .then((res)=>{
        return res.json();
      }).then((data)=>{
        setQuizData(data);
      }).catch((err)=>{
        console.log(err);
      });
  }


  const handleSubmit=()=> {
    if(currentQuestionId < quizData.totalQuestions-1){
      setCurrentQuestionId(currentQuestionId+1);
      console.log(width)
      
    //we want to increase progress to 25% when on question 1
    //increase progress to 50% on question 2
    //increase progress to 75% on question 3
    //when at question 4 turn to home page
    } else {
      setCurrentQuestionId(0);
      setGameStatus({message: "Great Job! Play again.", loadIntro: true});
    }
    setWidth(width + 25)
  }

  let possibleAnswers = [];
  if(currentQuestion.possibleAnswers){
    possibleAnswers = currentQuestion.possibleAnswers.map((answer, index) => {
      return <SelectionBox id={index} key={index} answer={answer} />
    })
  }


  return (
    <div className="learningModule">
      <div id='progressbar'>
      <div id='bar' style={{width:width + '%'}} ></div>
      </div>
      { currentQuestion.title &&
        <>
          <div className="learningModule--header">
            <div className="learningModule--title">
              { currentQuestion.title }
            </div>
            <div className="learningModule--subHeader">
              { currentQuestion.additionalInfo }
            </div>
          </div>

          <div className="learningModule--answerArea">
            <div className="learningModule--selections">
              { possibleAnswers }
            </div>
            <div className="learningModule--submitButtonContainer">
              <Button label="Submit" handleSubmit={ handleSubmit } />
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default LearningModule;
