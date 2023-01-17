import './App.css';
// import answers from './Answers';
import { useState } from 'react';

import React from 'react'



function EightBall({ answers }) {
  console.log("answers:", answers)
  const [eightBall, setEightBall] = useState({ msg: "Think of a Question", color: "black" })
  console.log(eightBall)

  function changeBall(evt) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const eightBall = answers[randomIndex];
    setEightBall(eightBall);
  }

  let circle = {
    "background-color": eightBall.color,
    margin: "50px",
    height: "200px",
    width: "200px",
    "border-radius": "50 %",
    display: "inline - block"
  }


  return (
    <div className="circle" style={circle} onClick={changeBall}>
      {eightBall.msg}

    </div>
  )
}


export default EightBall;
