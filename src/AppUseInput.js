import React, { useState } from "react";

//useInput
const useInput = (initialValue, validator) => {
  //useState
  const [value, setValue] = useState(initialValue);

  //onChange and get event
  //extract value from event
  //willUpdate: if return value of validator is true, then set true
  //if willUpdate is true, then setValue(value) is executed

  //if use like {...name}, then must value is value and onChange is onChange
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

//Functional Component
const App = () => {
  //validator function ex1
  const maxLen = (value) => value.length <= 10;

  //validator function ex2
  const notAt = (value) => !value.includes("@");

  const name = useInput("Mr.", notAt);
  return (
    <div>
      <h1>useInput Component</h1>
      {/*Spread: value={name.value} onChange={name.onChange} -> {...name} */}
      <input placeholder="name" {...name} />
    </div>
  );
};

export default App;
