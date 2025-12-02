import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import img from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with{" "}
              <b className="purple">Electrical Engineering</b> and{" "}
              <b className="purple">BIM</b>, and I have gained solid hands-on
              experience over the years… ⚡
              <br />
              <br />I am fluent in industry-standard tools like{" "}
              <i>
                <b className="purple">Revit, AutoCAD, and Navisworks</b>
              </i>
              .
              <br />
              <br />
              My field of interest lies in{" "}
              <i>
                <b className="purple">BIM Execution, Clash Detection,</b> and{" "}
                <b className="purple">MEPF Systems modeling</b>
              </i>
              , as well as working on{" "}
              <b className="purple">Infrastructure and Building Projects</b>.
              <br />
              <br />
              <p>
                Previously, I worked as an{" "}
                <b className="purple">Electrical Project Engineer</b> for{" "}
                <b className="purple">33/11 kV substation</b> and{" "}
                <b className="purple">
                  33 kV interconnection & bifurcation construction projects
                </b>
                , gaining valuable{" "}
                <i>
                  <b className="purple">on-site execution experience</b>
                </i>
                .
              </p>
              .
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={img} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amal-r-140500180/?profileId=ACoAACrJ_MABATmkkTSswzuhGlPDPAMiiyPF3o4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_r__amal_?igsh=MWhhNTdoOXJlZGIzYw=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
