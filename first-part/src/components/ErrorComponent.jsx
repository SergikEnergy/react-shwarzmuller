import { Component } from 'react';

class ErrorBoundaryComponent extends Component {
  constructor() {
    super();
    this.state = {
      isError: false,
    };
  }

  componentDidCatch(error) {
    //this Component was triggered when the child component has an error
    console.log(error);
    this.setState({ isError: true });
  }

  render() {
    return !this.state.isError ? this.props.children : <p>Here is no users! Try to type another name</p>;
  }
}

export default ErrorBoundaryComponent;
