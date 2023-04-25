import logo from './logo.svg';
import './App.css';
import Intropg from "./components/Intropg"
import React from 'react';
import Mainpg from './components/Mainpg';
import {nanoid} from "nanoid"


function App() {

  const[page, setPage] = React.useState(true)
  
  //setting data
  const[content, setContent] = React.useState([])

  function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
    
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }
  
    return array
}
  
function changePage(){
  setPage(state => !state)
  fetchQuestions()

}   

//filtering raw data
var dataArr = content.map(item=>{
  return(
    {
      id:nanoid(),
      question:item.question,
      options: shuffle([...item.incorrect_answers,item.correct_answer]),
      answer: item.correct_answer
    }
  )
})

  return (
    <div className="App">
      
        {page && <Intropg handleClick={changePage}/> }
        {!page && <Mainpg content={dataArr} fetchQuestions={fetchQuestions}/>}
    </div>
  );
}

export default App;
