import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "primary" : "warning");
  }

  formatState() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatState()}
        </span>
        <button className={"btn btn-secondary btn-sm"}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
