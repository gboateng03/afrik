import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import { RiShareBoxLine } from "react-icons/ri";
import Zoom from "react-reveal/Zoom";
import "./index.css";

export default class InvestorHero extends Component {
  render() {
    return (
      <div className="do_with_iotex">
        <Container>
          <Grid container alignItems="baseline">
            <Grid item sm={12} md={6} lg={6}>
              {Array(4)
                .fill()
                .map((v, i) => {
                  return (
                    <div className="card">
                      <Zoom>
                        <img
                          src="https://iotexproject.iotex.io/iotex-website-v3/main/public/images/investors/buy.png"
                          alt=""
                          width="63px"
                        />
                      </Zoom>
                      <Zoom>
                        <div className="btn_box">
                          <h2 className="btn_text">Buy</h2>
                          <RiShareBoxLine className="btn_icon" />
                        </div>
                      </Zoom>
                      <Zoom>
                        <p className="card_description">
                          Binance, Kucoin, Bitmart and many other exchanges that
                          list IOTX.
                        </p>
                      </Zoom>
                    </div>
                  );
                })}
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <div className="section">
                <Zoom>
                  <h1 className="heading">What Can You Do with IOTX?</h1>
                </Zoom>
                <Zoom>
                  <p className="description">
                    Africeum is a one-of-a-kind token that gives the holder
                    access to the Africeum network, and the worldwide impact
                    that comes with it.
                  </p>
                </Zoom>
                <Zoom>
                  <p className="description">
                    IOTX holders can stake and vote for delegates,
                    democratically shaping the future of the easy-to-use
                    Africeum network, increasing its value in the process.
                  </p>
                </Zoom>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
