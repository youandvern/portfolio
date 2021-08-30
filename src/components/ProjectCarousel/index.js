import React from 'react';
import './style.css'
import { useState, useEffect } from 'react';
import ProjectCard from '../ProjectCard';
import {gsap} from 'gsap';
import encompvid from './content/EncompVid.mp4';
import etabsvid from './content/EtabsVid.mp4';
import gemvid from './content/GemVid.mp4';
import dfssnip from './content/DfsSnip.PNG';
import proxysnip from './content/ProxySnip.PNG';
import glidervid from './content/GliderVid.mp4';
import {encomp_text, etabs_optimizer, gem_finder, distributed_file, proxy_server, mars_glider} from './content/text.js';

// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function ProjectCarousel(props) {
  const [carang, setCarang] = useState(0)

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return function unhideBody () {
      document.body.style.overflow = "auto";
    };
  });

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
    <div className= "project-carousel-container main-outer-container" >
      <div className="carousel-buttons" >
        <p className="carousel-previous" onClick={carouselPrev} title="Previous"> &#8592; </p>
        <p className="carousel-home" onClick={props.lastPage}> <i className="fas fa-bars" alt="menu" title="Menu"></i> </p>
        <p className="carousel-next" onClick={carouselNext} title="Next"> &#8594; </p>
      </div>
      <div className= "project-carousel" >
        <ProjectCard classID="a" video={encompvid} content={encomp_text}/>
        <ProjectCard classID="b" video={etabsvid} content={etabs_optimizer}/>
        <ProjectCard classID="c" video={gemvid} content={gem_finder}/>
        <ProjectCard classID="d" image={dfssnip} content={distributed_file}/>
        <ProjectCard classID="e" image={proxysnip} content={proxy_server}/>
        <ProjectCard classID="f" video={glidervid} content={mars_glider}/>
      </div>
    </div>
  )
}
