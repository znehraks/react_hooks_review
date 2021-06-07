import React, { useEffect, useRef, useState } from "react";

//useClick
const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  if (typeof onClick !== "function") {
    return;
  }
  return element;
};

//Functional Component
const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1>useEffect Component</h1>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
