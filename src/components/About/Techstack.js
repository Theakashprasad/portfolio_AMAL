import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "2px solid #007ACC",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease",
          }}
        >
          AutoCAD
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "2px solid #00A4E4",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease",
          }}
        >
          Revit
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "2px solid #FF6B35",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease",
          }}
        >
          Navis
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "2px solid #28a745",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease",
          }}
        >
          Dialux
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            textAlign: "center",
            padding: "20px",
            border: "2px solid #D83B01",
            borderRadius: "10px",
            backgroundColor: "#f8f9fa",
            transition: "all 0.3s ease",
          }}
        >
          MS Office
        </div>
      </Col>
    </Row>
  );
}

export default Techstack;
