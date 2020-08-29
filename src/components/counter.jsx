import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: [],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

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

  handleIncrement = () => {
    console.log("Increment clicked!", this);
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatState()}
        </span>
        <button
          onClick={this.handleIncrement}
          style={this.styles}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
