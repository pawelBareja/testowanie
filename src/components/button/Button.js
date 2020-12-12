import React, { Component } from "react";

class Button extends Component {
  state = {
    label: "cos innego",
    count: 0,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    const { label, count } = this.state;
    return (
      <button onClick={this.handleClick}>
        {label} {count}
      </button>
    );
  }
}

export default Button;
