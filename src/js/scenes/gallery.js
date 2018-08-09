import "../../css/scenes/attract.css";

import React, { Component } from "react";
import { Stage, Text, Sprite } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import { Presidents } from "../sprites/Presidents";

import { Transition } from "react-transition-group";

export default class Gallery extends Component {
  constructor(props) {
    super(props);

    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onEntered = this.onEntered.bind(this);
  }

  componentDidMount() {}

  onEntering() {}
  onEntered() {}
  onExited() {}
  onExiting() {}

  render() {
    const { mode, timeout, width, height, data } = this.props;
    const OPTIONS = {
      backgroundColor: 0x2a201e
    };

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
        <div className={`gallery scene ${mode}`}>
          <Stage
            options={OPTIONS}
            width={parseInt(width)}
            height={parseInt(height)}
          >
            {/*data.Presidents.map(p => (
              <Presidents
                width={parseInt(width)}
                height={parseInt(height)}
                imageURL={p.portrait}
              />
              
            ))*/}
            <Text
              text="Why won't the images load!?"
              style={{
                fontWeight: "bold",
                fontSize: 50,
                align: "center",
                fill: "black"
              }}
              x={50}
              y={150}
            />
          </Stage>
        </div>
      </Transition>
    );
  }
}

Gallery.defaultProps = {
  mode: "closed"
};
