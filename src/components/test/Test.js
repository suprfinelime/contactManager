import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    id: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          id: data.id
        })
      );
  }

  /* componentWillMount() {
    console.log("component will mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUpdate() {
    console.log("component will update");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("component will recieve props");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: "something"
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshot before Update");
  } */

  render() {
    const { title, id } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{id}</p>
      </div>
    );
  }
}

export default Test;
