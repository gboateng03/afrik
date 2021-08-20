/** @format */

import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import "./index.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="_footerDiv">
        <Container>
          <Grid container justify="center" spacing={3}>
            <Grid item lg={2} xs={10}>
              <div>
                <p className="_pagesHeading">GET STARTED</p>
                <p className="_pageName">What is Africeum</p>
                <p className="_pageName">Vision</p>
                <p className="_pageName">Roadmap</p>
                <p className="_pageName">Onboarding Pack</p>
              </div>
            </Grid>

            <Grid item lg={2} xs={10}>
              <div>
                <p className="_pagesHeading">FOR INVESTORS</p>
                <p className="_pageName">ioPay Wallet</p>
                <p className="_pageName">Get IOTX</p>
                <p className="_pageName">Staking Portal</p>
                <p className="_pageName">Burn-drop</p>
                <p className="_pageName">Explore</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={10}>
              <div>
                <p className="_pagesHeading">FOR BUILDERS</p>
                <p className="_pageName">Ecosystem</p>
                <p className="_pageName">Live IoTT Network</p>
                <p className="_pageName">Blog</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={10}>
              <div>
                <p className="_pagesHeading">FOR COMMUNITY</p>
                <p className="_pageName">Github</p>
                <p className="_pageName">Dev Docs</p>
                <p className="_pageName">Halo Grants</p>
                <div className="_socialIconDiv">
                  <AiFillFacebook size="24" className="_socialIcon" />
                  <AiFillTwitterSquare size="24" className="_socialIcon" />
                  <AiFillLinkedin size="24" className="_socialIcon" />
                  <FaTelegram size="24" className="_socialIcon" />
                </div>
              </div>
            </Grid>
            <Grid item lg={3} xs={10}>
              <div>
                <p className="_siteTitle">
                  SUBSCRIBE TO RECEIVE OUR LATEST UPDATES
                </p>
                <div className="_footer_subscribe_div">
                  <input
                    type="email"
                    placeholder="Email"
                    className="_footer_subscribe_input"
                  />
                  <button className="_footer_submit_btn">Submit</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="sub_footer_div">
          <p style={{ margin: 10 }}>©2021 Africeum</p>
          <p style={{ margin: 10 }}>Terms of Use & Privacy Policy</p>
        </div>
      </div>
    );
  }
}
