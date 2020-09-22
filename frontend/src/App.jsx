import React, { Component } from "react";
import { getSpringRelase } from "./services/springReleaseSerivce";

class App extends Component {
  state = {};

  async componentDidMount() {
    try {
      const { data: springRelease } = await getSpringRelase();
      console.log(springRelease);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <h1>TEST</h1>;
  }
}

export default App;
