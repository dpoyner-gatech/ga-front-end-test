import React, { Component } from "react";
import ReactDOM from "react-dom";

import Gallery from "./js/scenes/gallery";
import Attract from "./js/scenes/attract";

import "./css/styles.css";

// Presidential data to be used for the Attract/Gallery (Attract can also be you're own design).
const data = require("./data/presidents.json");

class Application extends Component {
  state = {
    scene: "attract",
    timeout: 60000
  };

  constructor(props) {
    super(props);

    this.switchScenes = this.switchScenes.bind(this);
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

  switchScenes(newscene) {
    this.setState({
      scene: newscene
    });
  }

  render() {
    const { width, height, props, state } = this;

    const { scene } = state;
    const { timeout } = props;

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
            switchScenes={this.switchScenes}
          />
          <Gallery
            mode={scene === "gallery" ? "open" : "closed"}
            timeout={timeout}
            switchScenes={this.switchScenes}
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

Application.defaultProps = {
  timeout: 60000
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Application />, rootElement);
