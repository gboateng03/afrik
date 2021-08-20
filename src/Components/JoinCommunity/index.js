import React from "react";
import { Grid } from "@material-ui/core";
import { FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./index.css";

export default class JoinCommunity extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="_community_div">
          <h1 className="_community_heading">Join the Community</h1>
          <p className="_community_des">
            Help shape the future of the Africeum network and learn more about
            Africeum by chatting with team members and other people in the
            community.
          </p>
          <Grid container justifyContent="center" spacing={3}>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <Zoom>
                  <div className="_community_icon_div">
                    <FaTelegramPlane />
                  </div>
                </Zoom>
                <p className="_social_heading">Telegram</p>
                <p className="_social_des">Chat and read our announcements</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <Zoom>
                  <div className="_community_icon_div">
                    <FaTwitter />
                  </div>
                </Zoom>
                <p className="_social_heading">Twitter</p>
                <p className="_social_des">Follow the latest Africeum news</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <Zoom>
                  <div className="_community_icon_div">
                    <AiOutlineGithub />
                  </div>
                </Zoom>
                <p className="_social_heading">Github</p>
                <p className="_social_des">Track our development</p>
              </div>
            </Grid>
            <Grid item lg={2} xs={6}>
              <div className="_telegram_div">
                <Zoom>
                  <div className="_community_icon_div">
                    <FaYoutube />
                  </div>
                </Zoom>
                <p className="_social_heading">Youtube</p>
                <p className="_social_des">Watch our latest content</p>
              </div>
            </Grid>
          </Grid>
          <h1 className="_stay_updated_txt">Stay Updated</h1>
          <p className="_subscribe_txt">Subscribe to our monthly newsletter</p>
          <div className="_subscribe_div">
            <input
              type="email"
              placeholder="Email"
              className="_subscribe_input"
            />
            <button className="_submit_btn">Submit</button>
          </div>
        </div>
      </div>
    );
  }
}
