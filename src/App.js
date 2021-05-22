import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  add = () => {
    console.log("add clicked");
    this.setState(state => ({ count: state.count + 1 }));
  };

  minus = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App;
