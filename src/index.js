import React, { Component } from "react";
import ReactDOM from "react-dom";

import Gallery from "./js/scenes/gallery";
import Attract from "./js/scenes/attract";

import PropTypes from "prop-types";

import "./css/styles.css";

const data = require("./data/presidents.json");
console.log(data);

class Application extends Component {
  state = {
    scene: "attract",
    timeout: 1000
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let appElement = document.getElementById("app-element");

    window.onresize = event => {
      const { width, height } = this;

      appElement.style.width = width;
      appElement.style.height = height;
    };
    //
    // This is an example of how to switch scenes
    //
    /*
    setInterval(() => {
      this.setState({
        scene: this.state.scene == "attract" ? "gallery" : "attract"
      });
    }, 1000);
    */
  }

  render() {
    const { width, height } = this;
    const { scene } = this.state;

    const timeout = 1000;

    return (
      <div
        className="application"
        id="app-element"
        style={{ width: width, height: height }}
      >
        <div id="scenes">
          <Attract
            mode={scene === "attract" ? "open" : "closed"}
            timeout={timeout}
          />
          <Gallery
            mode={scene === "gallery" ? "open" : "closed"}
            timeout={timeout}
          />
        </div>
      </div>
    );
  }

  get width() {
    return `${window.innerWidth}px`;
  }
  get height() {
    return `${window.innerHeight}px`;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);

Application.propTypes = {
  timeout: PropTypes.number
};
Application.defaultProps = {
  timeout: 1000
};
