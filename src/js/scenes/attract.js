import "../../css/scenes/attract.css";
import React, { Component } from "react";
import { Stage, Text, Sprite } from "react-pixi-fiber";
import * as Pixi from "pixi.js";
import { Transition } from "react-transition-group";
import { Georgie } from "../sprites/Georgie";
export default class Attract extends Component {
  constructor(props) {
    super(props);
    this.state = { transitionMode: "" };
  }

  render() {
    const { mode, timeout, width, height } = this.props;
    const OPTIONS = {
      backgroundColor: 0x2a201e
    };
    const centerAnchor = new PIXI.Point(0.5, 0.5);

    return (
      <Transition
        mountOnEnter={true}
        timeout={timeout}
        in={mode === "open" ? true : false}
      >
        {state => (
          <div className={`attract scene ${mode}`}>
            <Stage
              options={OPTIONS}
              width={parseInt(width)}
              height={parseInt(height)}
            >
              <Georgie
                width={parseInt(width)}
                height={parseInt(height)}
                transitionMode={state}
              />
              <Text
                text="The Presidents"
                style={{
                  fontWeight: "bold",
                  fontSize: 50,
                  align: "center",
                  fill: "white"
                }}
                x={50}
                y={150}
              />
            </Stage>
          </div>
        )}
      </Transition>
    );
  }
}

Attract.defaultProps = {
  mode: "open"
};
