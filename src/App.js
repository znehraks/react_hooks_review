import React, { useState } from "react";

//Class Component
class App extends React.Component {
  state = {
    item: 1,
  };
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1,
      };
    });
  };
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Class Component</h1>
        <div>{item}</div>
        <button onClick={this.incrementItem}>increment</button>
        <button onClick={this.decrementItem}>decrement</button>
      </div>
    );
  }
}

// //Functional Component
// const App = () => {
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);
//   return (
//     <div>
// <h1>Functional Component</h1>
//       <div>{item}</div>
//       <button onClick={incrementItem}>increment</button>
//       <button onClick={decrementItem}>decrement</button>
//     </div>
//   );
// };

export default App;
