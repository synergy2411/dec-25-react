import { Component } from "react";

class Output extends Component {
  state = {
    counter: 0,
  };

  constructor() {
    super();
  }

  // Component Life Cycle Events
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  shouldComponentUpdate() {}

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <>
        <h1>Class based component loaded...</h1>
        <h3>Counter : {this.state.counter}</h3>
        <button onClick={this.increaseCounter}>Increase</button>
        <p>Title : {this.props.title}</p>
      </>
    );
  }
}

export default Output;
