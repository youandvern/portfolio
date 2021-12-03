import React from "react";
import "./style.css";

/**
 * Simple Component to show name and title.
 * @return  {html}
 */ export default function NameBlock(props) {
  return (
    <>
      <div className="name-block">
        <h3>Andrew Young</h3>
        <p>Software Engineer</p>
      </div>
    </>
  );
}
