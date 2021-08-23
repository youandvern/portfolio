import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import {gsap} from 'gsap';
import encompsnip from './content/EncompSnip.PNG';
import etabssnip from './content/EtabsSnip.PNG';
import gemsnip from './content/GemSnip.PNG';
import dfssnip from './content/DfsSnip.PNG';
import proxysnip from './content/ProxySnip.PNG';
import glidersnip from './content/GliderSnip.PNG';
import {encomp_text, etabs_optimizer, gem_finder, distributed_file, proxy_server, mars_glider} from './content/text.js';

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
        <ProjectCard classID="b" image={etabssnip} content={etabs_optimizer}/>
        <ProjectCard classID="c" image={gemsnip} content={gem_finder}/>
        <ProjectCard classID="d" image={dfssnip} content={distributed_file}/>
        <ProjectCard classID="e" image={proxysnip} content={proxy_server}/>
        <ProjectCard classID="f" image={glidersnip} content={mars_glider}/>
      </div>
    </div>
  )
}
