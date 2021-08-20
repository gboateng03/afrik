import React from "react";
import Navbar from "../../Components/Navbar";
import RoadMapPost from "./../../Components/RoadMapPost";
import Footer from "./../../Components/Footer";
import BlogCard from "./../../Components/Blog";
import { Container, Grid } from "@material-ui/core";
import Blog1_image from "./../../assets/news_bg1.png";
import Blog2_image from "./../../assets/news_bg2.png";
import Blog3_image from "./../../assets/news_bg3.png";
import Zoom from "react-reveal/Zoom";
import "./index.css";

export default class Roadmap extends React.Component {
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
    };
  }
  render() {
    let { blogs } = this.state;
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <Navbar color="#141e61" />
        <RoadMapPost />
        <div className="_bottom_sec">
          <Container>
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
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}
