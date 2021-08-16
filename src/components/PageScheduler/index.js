import React from 'react';
import './style.css'
import { useState, useRef, useEffect } from 'react';


import {gsap} from 'gsap';
import Step1 from './step1.js';
import Step2 from './step2.js';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function PageScheduler(props) {
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  if (page2){
    return (
      <Step2 onFinish={() => alert("hello")}/>

    )
  } else{
    return (
      <Step1 onFinish={setPage2} />
    )

  }
}
