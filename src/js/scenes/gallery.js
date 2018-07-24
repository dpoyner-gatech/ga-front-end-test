import "../../css/scenes/gallery.css";

import React, { Component } from "react";

import { Transition } from "react-transition-group";

import presidents from "../../data/presidents.json";

export default class Gallery extends Component {
  state = {
    opened: -1,
    interacted: false
  };
  constructor(props) {
    super(props);

    this.onEntering = this.onEntering.bind(this);
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.closePres = this.closePres.bind(this);
  }

  componentDidMount() {}

  checkInteractivity() {
    // setInterval(() => {
    //   if (!this.state.interacted) {
    //     this.props.switchScenes("attract");
    //   }
    // }, this.props.timeout);
  }

  onEntering() {}
  onEntered() {
    this.checkInteractivity();
  }
  onExited() {}
  onExiting() {}

  openPres(key) {
    console.log("clicked opened");
    this.setState({
      opened: key,
      interacted: true
    });
  }
  closePres(e) {
    e.stopPropagation();

    console.log("clicked close");
    this.setState({
      opened: -1,
      interacted: true
    });
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
        <div className={`gallery scene ${mode}`}>
          <h1 className="title"> Here are the Presidents </h1>
          <div className="pres-group">
            {presidents.Presidents.map((president, key) => {
              return (
                <div
                  className={`pres ${
                    this.state.opened === key ? "opened" : "closed"
                  }`}
                  key={key}
                  onClick={this.openPres.bind(this, key)}
                >
                  <h2>{president.name}</h2>

                  <div
                    className={`info ${
                      this.state.opened === key ? "show" : "hide"
                    }`}
                  >
                    <button className="close" onClick={this.closePres}>
                      &times;
                    </button>
                    <img src={president.portrait} alt="portait" />
                    <div className="terms">
                      {president.terms[0]}-{president.terms[1]}
                    </div>
                    <div className="party">{president.party}</div>
                    <div className="vp">
                      {president.vice_president.map((vp, key) => {
                        return <div key={key}>{vp}</div>;
                      })}
                    </div>
                    <div className="bio">{president.biography}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Transition>
    );
  }
}

Gallery.defaultProps = {
  mode: "closed"
};
