import React, { Component } from "react";

class Counter extends Component {
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
    return (classes += this.props.counter.value === 0 ? "primary" : "warning");
  }

  formatState() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : this.props.counter.value;
  }

  handleIncrement = (product) => {
    console.log("Increment clicked!", product);
    this.setState({ value: this.props.counter.value + 1 });
  };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };

  render() {
    console.log("Counter - Rendered.");
    return (
      <div>
        {/* <h4>Counter #{this.props.children}</h4> */}
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatState()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className={"btn btn-secondary btn-sm"}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
