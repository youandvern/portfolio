import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import {gsap} from 'gsap';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function ProjectCarousel(props) {
  const [carang, setCarang] = useState(0)

  function carouselNext (){
    let newang = carang - 60;
    setCarang(newang);
    gsap.to(".project-carousel", {rotationY: newang})
  }

  function carouselPrev (){
    let newang = carang + 60;
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
        <ProjectCard classID="a" />
        <ProjectCard classID="b" />
        <ProjectCard classID="c" />
        <ProjectCard classID="d" />
        <ProjectCard classID="e" />
        <ProjectCard classID="f" />
      </div>
    </div>
  )
}
