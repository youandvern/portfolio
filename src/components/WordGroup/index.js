import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';
import WordLink from '../WordLink';
import {gsap} from 'gsap';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function WordGroup(props) {
  // props.onClick
  // props.references


  return(
    <div className= "wordlink-list" >
      <WordLink text='PROJECTS' textref= {props.references[0]} menuid="menu0" onClick={() => props.onClick('menu0')} onContainerClick={() => props.onContainerClick(props.references[0])}/>
      <WordLink text='ABOUT' textref= {props.references[1]} menuid="menu1" onClick={() => props.onClick('menu1')} onContainerClick={() => props.onContainerClick(props.references[1])} />
      <WordLink text='CONTACT' textref= {props.references[2]} menuid="menu2" onClick={() => props.onClick('menu2')} onContainerClick={() => props.onContainerClick(props.references[2])} />
      <WordLink text='RESUME' textref= {props.references[3]} menuid="menu3" onClick={() => props.onClick('menu3')} onContainerClick={() => props.onContainerClick(props.references[3])} />
    </div>
  )
}
