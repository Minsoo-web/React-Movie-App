import React from "react";

class App extends React.Component {
  state = { count: 0 };

  add = number => {
    console.log(number);
  };

  minus = () => {
    console.log("object");
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => this.add(count)}>+</button>
        <button onClick={this.minus}>+</button>
      </div>
    );
  }
}

export default App;
