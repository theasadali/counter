import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0,
  };

  incrementClicked() {}

  render() {
    return (
      <div>
        <span
          style={{ backgroundColor: "blue" }}
          className="badge badge-primary m-3"
        >
          {this.incerementCounter()}
        </span>
        <button
          onClick={this.incrementClicked}
          className="btn btn-secondary btn-sm m-3"
        >
          Increment
        </button>
      </div>
    );
  }

  incerementCounter() {
    const { counter } = this.state;
    return counter === 0 ? "Zero" : counter;
  }
}

export default Counter;
