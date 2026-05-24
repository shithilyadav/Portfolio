import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Shithil Yadav</span>{" "}
            from <span className="purple">Thane, Maharashtra, India</span>.
            <br />
            I’m Fresher{" "}
            <span className="purple">Software Engineer</span> {" "}
            <span className="purple"></span>.
            <br />I have Completed M.Sc.  in{" "}
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">University of Mumbai</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Teaching Students ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shithil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
