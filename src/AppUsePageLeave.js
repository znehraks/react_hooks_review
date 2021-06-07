import React, { useEffect, useRef, useState } from "react";

//Not hooks
const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
};
//Functional Component
const App = () => {
  const func = () => console.log("dndndndn");
  useBeforeLeave(func);
  return (
    <div>
      <h1>useEffect Component</h1>
    </div>
  );
};

export default App;
