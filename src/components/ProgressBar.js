import React, { useContext } from "react";
import { MyContext } from "../ContextApi/MyContext";

function ProgressBar() {
  const { screen, setScreen } = useContext(MyContext);
  // console.log(screen, setScreen, "--------->><><>><> progresss<");
  return (
    <>
      <div className="ProgressContainer">
        <div className="activescreen">1</div>
        <div className="emptyBar1"></div>
        <div className="emptyBar2"></div>
        <div className="number">2</div>
        <div className="emptyBar2"></div>
        <div className="emptyBar2"></div>
        <div className="number">3</div>
        <div className="emptyBar2"></div>
        <div className="emptyBar2"></div>
        <div className="number">4</div>
      </div>
    </>
  );
}

export default ProgressBar;
