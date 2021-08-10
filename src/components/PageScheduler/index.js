import React from 'react';
import './style.css'
import { useState } from 'react';
import WordGroup from '../WordGroup';
import Planet from '../Planet';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function PageScheduler(props) {
  const [landing, setLanding] = useState(false) // landing planet has been clicked
  const useless = true

  if (useless){
    return (
      <>
        <Planet text="" setFinished={setLanding}/>
        <WordGroup display={landing}/>
      </>
    )
  }
}
