import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "http://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>there is no tag!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }
}

export default Counter;
