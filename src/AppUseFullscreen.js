import React, { useEffect, useRef, useState } from "react";
import { isElementOfType } from "react-dom/test-utils";
import smile from "./smile.jpg";
//useFullScreen

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

//Functional Component
const App = () => {
  const onFullScreen = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div>
      <div ref={element}>
        <img src={smile} />
        <button onClick={exitFull}>exitFull</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};

export default App;
