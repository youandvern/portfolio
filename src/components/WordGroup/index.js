import React from 'react';
import './style.css'
import { useState } from 'react';
import WordLink from '../WordLink';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function Planet(props) {
  function action(){
    alert("HELLO");
  }
  return(
    <div className= {props.display ? "wordlink-list" : "hidden-list"}>
      <WordLink text='PROJECTS' clickAction={action} />
      <WordLink text='ABOUT' clickAction={action} />
      <WordLink text='CONTACT' clickAction={action} />
      <WordLink text='RESUME' clickAction={action} />
    </div>
  )
}
