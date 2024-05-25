import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/anudari.png";
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
            Hi, I'm
                <b className="purple"> Anudari Batsaikhan, </b>
            a Computer Science major with a passion for creating robust software solutions and designing intuitive user interfaces.
            Welcome to my portfolio where you can explore my 
            <b className="purple"> programming projects </b>
             and 
             <b className="purple"> UI/UX designs.</b>
              <br />
              <br />I am fluent in 
              
                <b className="purple"> C/C++, Javascript and Python. </b>
            
              
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              
              &nbsp; like
             
                <b className="purple"> React.js.</b>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/anukann"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/anudari-batsaikhan-5630a21a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
