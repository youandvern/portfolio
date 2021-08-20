import React from 'react';
import './style.css'
import { useState, useRef, useEffect } from 'react';


import {gsap} from 'gsap';
import Step1 from './step1.js';
import Step2 from './step2.js';
import Step3 from './step3.js';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function PageScheduler(props) {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);

  return (
    <>
    {page1 && <Step1 onFinish={setPage1} onNext={setPage2}/> }
    {page2 && <Step2 onFinish={setPage2} onNext={setPage3}/> }
    {page3 && <Step3 onFinish={setPage3} />}
    </>
  )
}
