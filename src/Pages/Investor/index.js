import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "./../../Components/Footer";
import InvestorHero from "./../../Components/InvestorHero";
import WhatAndWhy from "./../../Components/WhatAndWhy";
import DoWithIOTEX from "./../../Components/DoWithIOTEX";
import GetStartedCard from "./../../Components/GetStartedCard";
import BlockchainIdeasProjects from "./../../Components/BlockchainIdeasProjects";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Container, Grid } from "@material-ui/core";

import "./index.css";

export default class Ivestor extends React.Component {
  constructor() {
    super();
    this.state = {
      getStartedCardData: [
        {
          cardTitle: "INVESTORS",
          pointOne: "Learn about IOTX token",
          pointTwo: "How to buy",
          pointThree: "Explore ecosystem",
          btnValue: "Explore",
        },
        {
          cardTitle: "DEVELOPERS",
          pointOne: "Build anything",
          pointTwo: "Comprehensive set of tools",
          pointThree: "Cross chain compatible",
          btnValue: "Build",
        },
        {
          cardTitle: "BUSINESS",
          pointOne: "Use cases and projects",
          pointTwo: "Easy to build and deploy",
          pointThree: "Custom fit for any business",
          btnValue: "Connect",
        },
      ],
    };
  }
  render() {
    let { getStartedCardData } = this.state;
    return (
      <div>
        <Navbar color="transparent" />
        <InvestorHero />
        <WhatAndWhy />
        <DoWithIOTEX />
        <Container>
          <BlockchainIdeasProjects />
          <Zoom>
            <div className="_iotex_blockchain_txt">Get Africeum</div>
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
        </Container>
        <Footer />
      </div>
    );
  }
}
