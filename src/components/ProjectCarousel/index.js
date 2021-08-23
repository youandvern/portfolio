import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import {gsap} from 'gsap';
import encompsnip from './content/EncompSnip.PNG';
import {encomp_text} from './content/text.js';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function ProjectCarousel(props) {
  const [carang, setCarang] = useState(0)

  function carouselNext (){
    let newang = carang + 60;
    setCarang(newang);
    gsap.to(".project-carousel", {rotationY: newang})
  }

  function carouselPrev (){
    let newang = carang - 60;
    setCarang(newang);
    gsap.to(".project-carousel", {rotationY: newang})
  }

  return(
    <div className= "project-carousel-container" >
      <div className="carousel-buttons" >
        <p className="carousel-previous" onClick={carouselPrev}>&#8592; </p>
        <p className="carousel-next" onClick={carouselNext}>&#8594; </p>
      </div>
      <div className= "project-carousel" >
        <ProjectCard classID="a" image={encompsnip} content={encomp_text}/>
        <ProjectCard classID="b" image={encompsnip} content={encomp_text}/>
        <ProjectCard classID="c" image={encompsnip} content={encomp_text}/>
        <ProjectCard classID="d" image={encompsnip} content={encomp_text}/>
        <ProjectCard classID="e" image={encompsnip} content={encomp_text}/>
        <ProjectCard classID="f" image={encompsnip} content={encomp_text}/>
      </div>
    </div>
  )
}
