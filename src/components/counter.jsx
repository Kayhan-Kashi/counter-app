import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
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
    return (classes += this.state.value === 0 ? "primary" : "warning");
  }

  formatState() {
    const { value: value } = this.state;
    return value === 0 ? "Zero" : this.state.value;
  }

  handleIncrement = (product) => {
    console.log("Increment clicked!", product);
    this.setState({ value: this.state.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatState()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
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
