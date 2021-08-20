import React from "react";
import { Container, Grid } from "@material-ui/core";
import Arrow_Icon from "./../../assets/right-arrow.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./../../hover.css";
import "./index.css";
import "./index.css";

export default class GetStartedCard extends React.Component {
  render() {
    return (
      <div
        className="_getStarted_card_div"
        // style={{ backgroundImage: `url(${this.props.data.bgImage})` }}
      >
        <p className="_get_started_title">{this.props.data.cardTitle}</p>
        <div className="_points_div">
          <img src={Arrow_Icon} style={{ width: 10 }} />
          <span style={{ marginLeft: 10 }}>{this.props.data.pointOne}</span>
        </div>
        <div className="_points_div">
          <img src={Arrow_Icon} style={{ width: 10 }} />
          <span style={{ marginLeft: 10 }}>{this.props.data.pointTwo}</span>
        </div>
        <div className="_points_div">
          <img src={Arrow_Icon} style={{ width: 10 }} />
          <span style={{ marginLeft: 10 }}>{this.props.data.pointThree}</span>
        </div>
        <button className="_get_start_btn hvr-hang">
          {this.props.data.btnValue}
        </button>
      </div>
    );
  }
}
