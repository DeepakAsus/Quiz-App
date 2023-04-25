import React from "react";
import Qna from "./Qna";

export default function Mainpg(props) {
  const [inputArr, setInputArr] = React.useState([0, 1, 2, 3, 4, 5]);

  const [optionElems, setOptionElems] = React.useState([100, 1, 2, 3, 4, 5]);

  const [isChecked, setIsChecked] = React.useState(false);

  const [score, setScore] = React.useState(0);

  var ansArr = props.content.map((object) => {
    return object.answer + " ";
  });

  function handleSelect(event) {
    
    
    var optionElemsCopy = [];
    for (var i = 0; i < 6; i++) {
      optionElemsCopy[i] = optionElems[i];
    }
  
    for (var i = 1; i < 6; i++) {
      
      if (i == event.target.id) {
        // console.log(optionElemsCopy[i].classList);
        
        if (optionElemsCopy[i].classList) {
          console.log(optionElemsCopy[i].classList)
          optionElemsCopy[i].classList.remove("option-selected");
        }
        
        event.target.classList.add("option-selected");
        optionElemsCopy[i] = event.target;
      }
    }

    setOptionElems(optionElemsCopy);
    
    var option = event.target.value;
    var len = 6;
    var newArr = [];
    for (var j = 0; j < 6; j++) {
      newArr[j] = inputArr[j];
    }

    for (var i = 0; i < len; i++) {
      if (i == event.target.id) {
        newArr[i] = event.target.innerHTML + " ";
      }
    }
    setInputArr(newArr);
    
  }

  var questionNo = 0;
  var questionElems = props.content.map((item) => {
    questionNo++;
    return (
      <Qna
        key={item.id}
        question={item.question}
        options={item.options}
        questionNo={questionNo}
        input={inputArr}
        handleSelect={handleSelect}
        isChecked={isChecked}
        ansArr={ansArr}
        inputArr={inputArr}
        isRestart={props.isRestart}
      />
    );
  });


  //evaluating the answers
 
  function handleCheck(event) {
    
    //PLAY AGAIN BUTTON CONDITION
    if (isChecked) {
    
      
      setIsChecked(false);
      props.fetchQuestions()


      
      setInputArr([0, 1, 2, 3, 4, 5]);
      setOptionElems([0, 1, 2, 3, 4, 5]);
      setScore(0);
    } 
    //CHECK BUTTON CONDITION
    else {
      
      console.log("ELSE")
      setIsChecked(true);
      ansArr.splice(0, 0, 100);

      var marks = 0;
      for (var i = 1; i < 6; i++) {
        if (inputArr[i] == ansArr[i]) {
          marks++;
        }
      }
      setScore(marks);
    }
  }
  

  return (
    <div className="mainpg-container">
      <div className="qnElem-container">{questionElems}</div>

      <div
        className="score"
        style={{
          visibility: isChecked && !props.isRestart ? "visible" : "hidden",
        }}
      >
        <p className="score-result">You scored {score}/5 correct answers</p>
      </div>
      <div >
        {props.content && <button style={{left: isChecked? "800px": "550px"}} className="check-btn" onClick= {handleCheck}>
          {isChecked ? "Play again" : "Check answers"}
        </button>}
      </div>
    </div>
  );
}
