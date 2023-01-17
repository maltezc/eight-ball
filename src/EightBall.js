import './App.css';
import answers from './answers';
import { useState } from 'react';

import React from 'react'

 function EightBall({answers=answers}) {

  const [eightBall, setEightBall] = useState({message: "Think of a Question", color: "black"})

  function changeBall(evt) {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const answer = answers[randomIndex];

    setEightBall({answer.message, });
  }

  return (
    <div>
      {answers};

    </div>
  )
}


export default EightBall;
