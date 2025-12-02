import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro1 from "../../Assets/Projects/pro1.jpg";
import pro2 from "../../Assets/Projects/pro2.webp";
import pro3 from "../../Assets/Projects/pro3.jpg";
import pro4 from "../../Assets/Projects/pro4.webp";
import pro5 from "../../Assets/Projects/pro5.jpg";
import pro6 from "../../Assets/Projects/pro6.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              isBlog={false}
              title="MEPF BIM for Airport Terminal Building:"
              description="Multi-disciplinary BIM coordination of mechanical, electrical, plumbing, and fire-fighting systems for a large-scale airport terminal, developed up to LOD 400–500 for construction and facility management purposes"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="110 kV Substation BIM Modelling"
              description="Development of a high-detail Revit model (LOD 350–400) for a 110 kV substation, integrating structural, electrical, and civil elements for clash detection and design validation."
            />
          </Col>
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="11 kV Duct Bank Modelling"
              description="BIM-based design of underground 11 kV duct banks, including precise alignment, jointing details, and coordination with utilities and other underground services."
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="Commercial Building BIM Modelling"
              description="End-to-end BIM modeling of commercial buildings from LOD 100 to LOD 500, encompassing concept design, coordination, quantity take-offs, shop drawings, and as-built documentation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="33/11 kV Substation Construction Project:"
              description="Worked as Project Engineer for the 33/11 kV substation project, handling the electrical scope including control panels of the 33 kV substation, 5 MVA transformer, switchgear, and protection systems, and successfully completed the substation construction work."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="33 kV Interconnection & Bifurcation Project:"
              description="Worked as Project Engineer for the 33 kV interconnection and bifurcation construction project, with experience in identifying and resolving on-site challenges that affected and delayed construction progress."
            />
          </Col>

       
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
