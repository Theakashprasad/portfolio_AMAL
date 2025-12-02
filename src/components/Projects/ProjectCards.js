import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"  style={{
    height: "250px",
    width: "100%",
    objectFit: "cover",
  }} />
      <Card.Body>
        <Card.Title
          style={{
            fontFamily: "'Roboto', sans-serif",
            fontWeight: "bold",
            fontSize: "1.3rem",
            color: "#969393",
            marginBottom: "15px",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "justify",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "0.95rem",
            lineHeight: "1.6",
            color: "#969393",
          }}
        >
          {props.description}
        </Card.Text>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
