import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Step1 from "./step1.jsx";
import Step2 from "./step2.jsx";
import Step3 from "./step3.jsx";

/**
 * Global page controller which displays the three levels (landing planet, menu WordGroup, and then menu items).
 * @return  {html}
 */
export default function PageScheduler(props) {
  // Initialize state variables for page navigation
  const [page1, setPage1] = useState(true); // planet page (1st level)
  const [page2, setPage2] = useState(false); // menu page (2nd level)
  const [page3, setPage3] = useState(false); // information pages (3rd level - projects, resume, etc.)

  // Initialize state variable used to autonavigate to the projects page
  const [forceMenu, setForceMenu] = useState(false);

  // Initialize state variables to store click position
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Use state and effect hooks to render page 2 when necessary
  const [renderStep2, setRenderStep2] = useState(false);
  useEffect(() => {
    if (page2) {
      setRenderStep2(
        <Step2
          onFinish={setPage2}
          onNext={setPage3}
          setClickPos={setClickPos}
          menu={forceMenu}
          setMenu={setForceMenu}
        />
      );
    } else {
      setRenderStep2(false);
    }
  }, [page2]);

  // return appropriate page(s) to mount
  return (
    <>
      {page1 && <Step1 onFinish={setPage1} onNext={setPage2} />}

      {renderStep2}

      {page3 && (
        <Step3
          onFinish={setPage3}
          onPrevious={setPage2}
          fromPos={clickPos}
          renderPage={page3}
          toMenu={setForceMenu}
        />
      )}
    </>
  );
}
