import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "./../../Components/Footer";
import BlogCard from "./../../Components/Blog";
import GetStartedCard from "./../../Components/GetStartedCard";
import SpeedSecurity from "./../../Components/SpeedSecurity";
import JoinCommunity from "./../../Components/JoinCommunity";
import BlockchainIdeasProjects from "./../../Components/BlockchainIdeasProjects";
import AwardWinning from "./../../Components/AwardWinning";
import BigBall from "./../../assets/bigball.png";
import SmallBall from "./../../assets/smallball.png";
import Image_circular from "./../../assets/img_circular3.png";
import Blog1_image from "./../../assets/news_bg1.png";
import Blog2_image from "./../../assets/news_bg2.png";
import Blog3_image from "./../../assets/news_bg3.png";
import Active_device_Image1 from "./../../assets/img_pebble_s.png";
import Active_device_Image2 from "./../../assets/img_ucam_s.png";
import Blur_device_image1 from "./../../assets/img_pebble_n.png";
import Blur_device_image2 from "./../../assets/img_ucam_n.png";
import GetStartedBgImage1 from "./../../assets/get_start_card1.png";
import GetStartedBgImage2 from "./../../assets/get_start_card2.png";
import GetStartedBgImage3 from "./../../assets/get_start_card3.png";
import Award_line_1 from "./../../assets/awind_line_1.png";
import Award_line_2 from "./../../assets/awind_line_2.png";
import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { AiFillCaretDown, AiOutlineGithub } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import "./../../hover-min.css";
import "./../../hover.css";
import "./index.css";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: [
        {
          blogTitle:
            "Africeum Listed on Coinbase [Becomes First Listed IOT Blockchain Company]",
          blog_image: Blog1_image,
        },
        {
          blogTitle:
            "Event: What’s Next for Africeum: The Future of Smart Devices [Meet The Team] - Aug 19th",
          blog_image: Blog2_image,
        },
        {
          blogTitle:
            "In the News: Africeum is Eating IOTA Market Share With 1.3 Update.",
          blog_image: Blog3_image,
        },
      ],
      devices_Images: [
        {
          activeImage: Active_device_Image1,
          blurImage: Blur_device_image1,
          active: true,
        },
        {
          activeImage: Active_device_Image2,
          blurImage: Blur_device_image2,
          active: true,
        },
      ],
      getStartedCardData: [
        {
          bgImage: GetStartedBgImage1,
          cardTitle: "INVESTORS",
          pointOne: "Learn about IOTX token",
          pointTwo: "How to buy",
          pointThree: "Explore ecosystem",
          btnValue: "Explore",
        },
        {
          bgImage: GetStartedBgImage2,
          cardTitle: "DEVELOPERS",
          pointOne: "Build anything",
          pointTwo: "Comprehensive set of tools",
          pointThree: "Cross chain compatible",
          btnValue: "Build",
        },
        {
          bgImage: GetStartedBgImage3,
          cardTitle: "BUSINESS",
          pointOne: "Use cases and projects",
          pointTwo: "Easy to build and deploy",
          pointThree: "Custom fit for any business",
          btnValue: "Connect",
        },
      ],
    };
  }
  changeDiviceImage = (i) => {
    let { devices_Images } = this.state;
    if (i === 0) {
      devices_Images[0].active = true;
      devices_Images[1].active = false;
    } else {
      devices_Images[0].active = false;
      devices_Images[1].active = true;
    }
    this.setState({ devices_Images: devices_Images });
  };
  render() {
    let { blogs, devices_Images, getStartedCardData } = this.state;
    return (
      <div>
        <Navbar color="transparent" />
        <div className="header_div">
          <div>
            <img src={BigBall} className="_big_ball" />
          </div>
          <Zoom>
            <p className="header_headig">
              Building The <br />
              Connected World
            </p>
          </Zoom>
          <div>
            <img src={SmallBall} className="_small_ball" />
          </div>
          <Zoom>
            <p className="header_des">
              Join our journey to power billions of devices and decentralized
              applications across the physical and digital world.
            </p>
          </Zoom>
        </div>
        {/* <Zoom> */}
        <p className="_get_started_txt hvr-shrink">
          Get Started
          <AiFillCaretDown />
        </p>
        {/* </Zoom> */}
        <div>
          <Container maxWidth="xl">
            <div style={{ marginTop: 50 }}>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item xl={2} lg={3} md={3} sm={6} xs={6}>
                  <Zoom>
                    <div>
                      <p className="devices_value">6,983</p>
                      <p className="devices_txt">DEVICES</p>
                    </div>
                  </Zoom>
                </Grid>
                <Grid item xl={2} lg={3} md={3} sm={6} xs={6}>
                  <Zoom>
                    <div>
                      <p className="devices_value">12,714,801</p>
                      <p className="devices_txt">TRANSACTIONS</p>
                    </div>
                  </Zoom>
                </Grid>
                <Grid item xl={2} lg={3} md={3} sm={6} xs={6}>
                  <Zoom>
                    <div>
                      <p className="devices_value">200K+</p>
                      <p className="devices_txt">COMMUNITY</p>
                    </div>
                  </Zoom>
                </Grid>
                <Grid item xl={2} lg={3} md={3} sm={6} xs={6}>
                  <Zoom>
                    <div>
                      <p className="devices_value">8,555</p>
                      <p className="devices_txt">STAKERS</p>
                    </div>
                  </Zoom>
                </Grid>
              </Grid>
            </div>
            <div>
              <img src={Image_circular} className="image_circular" />
            </div>
            <SpeedSecurity />
            <AwardWinning />
          </Container>
          {/* <div className="award_line_1"></div>
          <div className="award_line_2"></div> */}
          <div>
            <Zoom>
              <p className="_in_the_news_txt">In The News</p>
            </Zoom>
          </div>
          <Container maxWidth="xl">
            <Grid container justifyContent="center" spacing={4}>
              {blogs.map((val, i) => {
                return (
                  <Grid item xl={3} lg={3} md={6} sm={6} xs={11}>
                    <Zoom>
                      <BlogCard data={val} />
                    </Zoom>
                  </Grid>
                );
              })}
            </Grid>
            <BlockchainIdeasProjects />
            <p className="_build_txt hvr-shrink">
              Build on Africeum
              <AiFillCaretDown />
            </p>

            <div>
              <Zoom>
                <div className="_iotex_blockchain_txt">
                  Africeum Blockchain Already Powers Real Devices
                </div>
              </Zoom>
              <Zoom>
                <div className="_iotex_blockchain_des">
                  The Africeum blockchain already powers real devices, including
                  award-winning blockchain-powered cameras from Consumer
                  Electronic Show (CES) and the pebble geo device, perfect for
                  supply chain optimization in any industry.
                </div>
              </Zoom>
              <div className="_device_image_div">
                <Grid container justifyContent="center">
                  {devices_Images.map((val, i) => {
                    return (
                      <Grid item xl={6} lg={5} xs={5}>
                        <div
                          onMouseOver={() => this.changeDiviceImage(i)}
                          onMouseOut={() => {
                            let { devices_Images } = this.state;
                            devices_Images[0].active = true;
                            devices_Images[1].active = true;
                            this.setState({ devices_Images: devices_Images });
                          }}
                        >
                          <img
                            src={val.active ? val.activeImage : val.blurImage}
                            className="_device_image"
                          />
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            </div>
            <Zoom>
              <div className="_iotex_blockchain_txt">Get Started</div>
            </Zoom>
            <div style={{ marginTop: 50 }}>
              <Grid container justifyContent="center" spacing={5}>
                {getStartedCardData.map((val, i) => {
                  return (
                    <Grid item xl={3} lg={3} md={6} sm={6} xs={11}>
                      <Zoom>
                        <GetStartedCard data={val} />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
            <JoinCommunity />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
