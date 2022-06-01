import React, { useContext } from "react";
import { MyContext } from "../ContextApi/MyContext";

function ProgressBar() {
  const { allActiveScreens } = useContext(MyContext);
  return (
    <>
      <div className="ProgressContainer">
        <div className="activescreen">1</div>
        <div className="emptyBar1"></div>
        <div
          className={allActiveScreens.includes(1) ? "emptyBar1" : "emptyBar2"}
        ></div>
        <div
          className={allActiveScreens.includes(1) ? "activescreen" : "number"}
        >
          2
        </div>
        <div
          className={allActiveScreens.includes(1) ? "emptyBar1" : "emptyBar2"}
        ></div>
        <div
          className={allActiveScreens.includes(2) ? "emptyBar1" : "emptyBar2"}
        ></div>
        <div
          className={allActiveScreens.includes(2) ? "activescreen" : "number"}
        >
          3
        </div>
        <div
          className={allActiveScreens.includes(2) ? "emptyBar1" : "emptyBar2"}
        ></div>
        <div
          className={allActiveScreens.includes(3) ? "emptyBar1" : "emptyBar2"}
        ></div>
        <div
          className={allActiveScreens.includes(3) ? "activescreen" : "number"}
        >
          4
        </div>
      </div>
    </>
  );
}

export default ProgressBar;
