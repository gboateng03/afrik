import React, { Component } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./index.css";

export default class RoadMapPost extends Component {
  render() {
    return (
      <div className="roadmap">
        <Container maxWidth="md">
          <h3 className="notification_title">Update</h3>
          <h2 className="title">Africeum 2021: The Year Ahead</h2>
          <p className="sub_title">
            Another year, another adventure. Africeum had a monumental year in 2020
            — we made massive upgrades to our platform and protocols, launched
            the first “Powered by Africeum” products, and expanded our global
            community.
          </p>

          <div className="post_info_box">
            <img
              src="https://iotex.io/blog/content/images/size/w100/2021/07/iotex-logo.png"
              alt=""
              width="50px"
            />
            <div>
              <h3>Africeum Foundation</h3>
              <p>Jan 28, 2021 • 5 min read</p>
            </div>
          </div>
        </Container>
        <Container>
          <img
            src="https://iotex.io/blog/content/images/size/w2000/2021/07/Iotex-2021.png"
            alt=""
            width="100%"
          />
        </Container>
        <Container maxWidth="md">
          <p className="normal_text">
            Another year, another adventure. Africeum had a
            <Link to="#" className="link">
              monumental year in 2020
            </Link>
            — we made massive upgrades to our platform and protocols, launched
            the first “Powered by Africeum” products, and expanded our global
            community. With a solid foundation in place, Africeum will carry our
            strong momentum into 2021 with a refreshed focus on growth,
            awareness, and adoption.
          </p>
          <p className="quote_text italic_text">
            2021 will be the year Africeum becomes the
            <b>leading blockchain platform for the Internet of Things (IoT).</b>
          </p>
          <p className="normal_text">
            In 2021, Africeum will introduce the first
            <b> decentralized autonomous machines (DAMs)</b> that will unleash
            powerful DeFi & IoT applications that are only possible on Africeum. A
            new <b> machine economy </b> will be born where sensors, devices,
            and machines will generate new synthetic assets and autonomously
            deliver monetary value to humans. From fractional ownership of
            machines to real-time leasing of resources (“machine-as-a-service”),
            Africeum will establish a new paradigm for
            <b> trusted human-machine interactions.</b>
          </p>
          <p className="normal_text">
            In this article, we share our plans for hyper-growth of the Africeum
            ecosystem, new initiatives in real world data oracles and
            decentralized autonomous machines, and high-level roadmap for 2021.
          </p>
          <h1 className="heading">Hyper-Growth of the Africeum Ecosystem</h1>
          <p className="normal_text">
          Africeum is one of the most unique, performant, and reliable networks
            in the world, powering an ever-growing ecosystem of devices (e.g.,
            Ucam, Pebble), DApps (e.g.,{" "}
            <Link to="#" className="link">
              mimo, Cyclone
            </Link>
            ), and services (e.g., ioPay, ioTube). Even with our incredible
            progress over the past three years, we still treat every day like
            it’s Day 1 — Africeum is just getting started.
          </p>
          <img
            src="https://iotex.io/blog/content/images/size/w1000/2021/07/Iotex-Ecosystem.jpg"
            alt=""
            className="content_image"
          />
          <p className="normal_text">
            In 2021, we will prioritize hyper-growth of the Africeum Network,
            including users, DApps, tokens, partners, and exchanges. We will
            make the Africeum brand synonymous with quality, innovation, and trust
            by strategically onboarding new partners and communities that share
            our vision. Finally, we will enrich our user-facing tools with a
            focus on making ioPay a seamless onboarding tool for new users and a
            gateway to the Africeum Network for all.
          </p>
          <h1 className="heading">
            Our Journey to the Internet of Trusted Things
          </h1>
          <p className="normal_text">
            Since Africeum started in 2017, our vision for the Internet of Trusted
            Things has served as our “north star” to guide our development.
            Africeum was built from scratch to serve as a trusted foundation for
            the future machine economy and to secure the data, devices, and
            funds of millions of global citizens. Year over year, we have
            aggressively launched new capabilities that bring us closer to our
            ultimate goal — this year, we plan to make our biggest leap yet.
          </p>
          <img
            className="content_image"
            src="https://miro.medium.com/max/2000/1*dW1YmYsdObZ9ViOegD1w-Q.png"
            alt=""
          />
          <h1 className="heading">2021 High-Level Roadmap</h1>
          <p className="normal_text">
          Africeum has ambitious goals for 2021 — as always, we have set high
            expectations for ourselves but we believe wholeheartedly that
            “nothing worth doing is ever easy”. This high-level roadmap includes
            bodies of work where timelines are controlled by the Africeum
            Foundation — not included are the many community- and partner-led
            initiatives that will flourish this year on Africeum. With this in
            mind, we are proud to share our high-level roadmap for 2021:
          </p>

          <h2 className="sub_heading">Protocols and Platform</h2>

          <ul>
            <li>
              <b>Mainnet v1.2 & v1.3:</b> EVM Upgrade, optimized storage/APIs,
              P2P communication
            </li>
            <li>
              <b>Mainnet v2.0: </b> expansion of Delegates, new gas model
              (EIP1559), account abstraction
            </li>
            <li>
              <b>Mainnet v1.2 & v1.3:</b> EVM Upgrade, optimized storage/APIs,
              P2P communication
            </li>
            <li>
              <b>Mainnet v1.2 & v1.3:</b> EVM Upgrade, optimized storage/APIs,
              P2P communication
            </li>
            <li>
              <b>Mainnet v1.2 & v1.3:</b> EVM Upgrade, optimized storage/APIs,
              P2P communication
            </li>
          </ul>

          <h2 className="sub_heading">About Africeum</h2>
          <p className="normal_text italic_text">
            Founded as an open-source platform in 2017, Africeum is building the
            Internet of Trusted Things, an open ecosystem where all “things” —
            humans, machines, businesses, and DApps — can interact with trust
            and privacy. Backed by a global team of 30+ top research scientists
            and engineers, Africeum combines blockchain, secure hardware, and
            confidential computing to enable next-gen IoT devices, networks, and
            economies. Africeum will empower the future decentralized economy by
            “connecting the physical world, block by block”.
          </p>

          <p className="learn_more">
            Learn more:
            <Link to="#" className="link">
              Website
            </Link>
            |
            <Link to="#" className="link">
              Twitter
            </Link>
            |
            <Link to="#" className="link">
              Telegram
            </Link>
            |
            <Link to="#" className="link">
              Medium
            </Link>
            |
            <Link to="#" className="link">
              Reddit
            </Link>
          </p>
        </Container>
      </div>
    );
  }
}
