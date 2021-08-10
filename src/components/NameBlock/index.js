import React from 'react';
import './style.css'
import { useState } from 'react';


// props to include:  ** setFinished function to change state after finish imploding   ** optional text inside of planet
export default function NameBlock(props) {

    return (
      <>
        <div className="name-block">
          <h3>Andrew Young</h3>
          <p>Software Engineer</p>
        </div>
      </>
    )
}
