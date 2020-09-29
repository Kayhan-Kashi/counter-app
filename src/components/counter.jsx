import React, { Component } from "react";

class Counter extends Component {
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call
    }
  }

  componentWillUount() {
    console.log("Counter - Unmount");
  }

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
      <div class="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatState()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            style={this.styles}
            className={"btn btn-secondary btn-sm"}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            style={this.styles}
            className={"btn btn-secondary btn-sm m-2"}
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
        {/* <h4>Counter #{this.props.children}</h4> */}
      </div>
    );
  }
}

export default Counter;
