import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    errorMessage: null,
  };

  componentDidCatch(error) {
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.errorMessage) {
      return <p className="alert alert-danger">{this.state.errorMessage}</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
