import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amal R </span>
            from <span className="purple"> Trivandrum, Kerela, India.</span>
            <br />
            I am currently employed as a electrical engineer at C & T CONSULTING
            ENGINEERS PRIVATE LIMITED
            <br />
            I have completed B.Tech in Electrical and Electronics Engineering at
            Trinity College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Designing circuits today, powering the world tomorrow!"{" "}
          </p>
          <footer className="blockquote-footer">Amal R</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
