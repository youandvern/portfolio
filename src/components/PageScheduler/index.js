import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Step1 from "./step1.js";
import Step2 from "./step2.js";
import Step3 from "./step3.js";

/**
 * Global page controller which displays the three levels (landing planet, menu WordGroup, and then menu items).
 * @return  {html}
 */
export default function PageScheduler(props) {
  const [page1, setPage1] = useState(true);
  const [page2, setPage2] = useState(false);
  const [page3, setPage3] = useState(false);
  const [forceMenu, setForceMenu] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  const [renderStep2, setRenderStep2] = useState(false);

  useEffect(() => {
    if (page2) {
      setRenderStep2(<Step2 onFinish={setPage2} onNext={setPage3} setClickPos={setClickPos} menu={forceMenu} setMenu={setForceMenu} />);
    } else {
      setRenderStep2(false);
    }
  }, [page2]);

  return (
    <>
      {page1 && <Step1 onFinish={setPage1} onNext={setPage2} />}
      {renderStep2}
      {page3 && <Step3 onFinish={setPage3} onPrevious={setPage2} fromPos={clickPos} renderPage={page3} toMenu={setForceMenu} />}
    </>
  );
}
