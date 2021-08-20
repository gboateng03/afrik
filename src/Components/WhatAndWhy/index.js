import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Zoom from "react-reveal/Zoom";
import "./index.css";

export default class InvestorHero extends Component {
  render() {
    return (
      <div className="what_and_why">
        <Container>
          <Grid container alignItems="baseline">
            <Grid item sm={12} lg={6} md={6}></Grid>
            <Grid item sm={12} lg={6} md={6}>
              <div className="section">
                <Zoom>
                  <h1 className="heading">What is Africeum?</h1>
                </Zoom>
                <Zoom>
                  <p className="description">
                    The Africeum token connects the physical and digital world.
                    Our rapidly evolving ecosystem aims to put billions of
                    devices on the blockchain. Africeum is the lifeblood of this
                    ambitious, interconnected, and profitable future.
                  </p>
                </Zoom>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6}>
              <div className="section">
                <Zoom>
                  <h1 className="heading">Why Africeum?</h1>
                </Zoom>
                <Zoom>
                  <p className="description">
                    Africeum is the premier blockchain network on the market
                    that brings the idealistic power of blockchain to devices,
                    Dapps, and NFTs.
                  </p>
                </Zoom>
              </div>
            </Grid>
            <Grid item sm={12} lg={6} md={6}></Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
