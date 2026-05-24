import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section">
        <Container>

          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0",
            }}
          >

            {/* Left Side */}
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                  textAlign: "center",
                }}
              >
                Know Who <strong className="purple">I'M</strong>
              </h1>

              <Aboutcard />
            </Col>

            {/* Right Side Image */}
            <Col
              md={5}
              className="about-img text-center"
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>
          </Row>

          {/* Skills */}
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          {/* Tools */}
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>

          <Toolstack />

          {/* Github */}
          <Github />

        </Container>
      </Container>
    </>
  );
}

export default About;