import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anudari Batsaikhan </span>
            based in <span className="purple"> Seattle, WA. </span>
            
             I’m a senior majoring in Computer Science at Seattle Pacific University, graduating in December 2024.
           
            <br />
            <br />
            I hold several <span className="purple"> certifications </span>that demonstrate my technical expertise:
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> AWS Certified Developer – Associate
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> HTML, CSS, and JavaScript for Web Developers (Johns Hopkins University)
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Technical Support Fundamentals (Google)
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
