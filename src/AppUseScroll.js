import React, { useEffect, useRef, useState } from "react";

//useScroll
const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
    console.log(`y: ${window.scrollY}, x: ${window.scrollX}`);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

//Functional Component
const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1
        style={{
          fontSize: 60,
          position: "fixed",
          color: y > 500 ? "red" : "blue",
        }}
      >
        hiohohoiasasd
      </h1>
    </div>
  );
};

export default App;
