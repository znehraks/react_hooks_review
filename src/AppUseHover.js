import React, { useEffect, useRef, useState } from "react";

//useClick
const useHover = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onClick);
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
  const title = useHover(sayHello);
  return (
    <div>
      <h1>useEffect Component</h1>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
