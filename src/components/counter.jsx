import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
  };

  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };

  formatState() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl}></img>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatState()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
