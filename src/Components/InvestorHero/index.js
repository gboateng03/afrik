import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./index.css";

export default class InvestorHero extends Component {
  render() {
    return (
      <div className="investor_hero">
        <div>
          <Zoom>
            <h1 className="heading">Explore Africeum</h1>
          </Zoom>
          <Zoom>
            <p className="description">Powering the Connected Ecosystem</p>
          </Zoom>
        </div>
      </div>
    );
  }
}
