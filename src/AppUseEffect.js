import React, { useEffect, useState } from "react";

//Functional Component
const App = () => {
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  const sayHello = () => {
    console.log("hello");
  };
  useEffect(sayHello, [number]);
  return (
    <div>
      <h1>useEffect Component</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(anumber + 1)}>{anumber}</button>
    </div>
  );
};

export default App;
