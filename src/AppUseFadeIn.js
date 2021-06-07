import React, { useEffect, useRef, useState } from "react";

//useFadeIn
const useFadeIn = (duration = 1) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity 3s ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

//Functional Component
const App = () => {
  const fadeInH1 = useFadeIn(2);
  const fadeInP = useFadeIn(1);
  return (
    <div>
      <h1 {...fadeInH1}>useEffect Component</h1>
      <p {...fadeInP}>aslkfjdsafasfasdf</p>
    </div>
  );
};

export default App;
