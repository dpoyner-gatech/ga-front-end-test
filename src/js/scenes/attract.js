import "../../css/scenes/attract.css";

import React, { Component } from "react";

import { Transition } from "react-transition-group";

export default class Attract extends Component {
  constructor(props) {
    super(props);

    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.switchScenes = this.switchScenes.bind(this);
  }

  componentDidMount() {}

  onEntering() {}
  onEntered() {}
  onExited() {}
  onExiting() {}
  switchScenes() {
    this.props.switchScenes("gallery");
  }

  render() {
    const { mode, timeout } = this.props;

    return (
      <Transition
        mountOnEnter={true}
        timeout={timeout}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExiting={this.onExiting}
        onExited={this.onExited}
        in={mode === "open" ? true : false}
      >
        <div className={`attract scene ${mode}`}>
          {/* Have to use an onClick event instead of onPointerDown, b/c pointer events are available in react v16.4.0 */}
          {/* ...and this react is v16.3.2, I'm not sure how to update the version via codesandbox, */}
          <svg className="intro-text" width="1200px" height="720px">
            <g x="50%" y="50%">
              <text
                x="5%"
                y="50%"
                fill="none"
                stroke="white"
                strokeWidth="1"
                fontSize="450%"
              >
                America's
              </text>
              <text
                x="41%"
                y="50%"
                fill="none"
                stroke="white"
                strokeWidth="1"
                fontSize="450%"
              >
                First
              </text>
              <text
                x="60%"
                y="50%"
                fill="none"
                stroke="white"
                strokeWidth="1"
                fontSize="450%"
              >
                Presidents
              </text>
            </g>
          </svg>

          <button className="start" onClick={this.switchScenes}>
            Start<span className="ring" />
          </button>
        </div>
      </Transition>
    );
  }
}

Attract.defaultProps = {
  mode: "open"
};
