import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import webcrawler from "../../Assets/Projects/graph2.jpeg";
import btree from "../../Assets/Projects/Btree.png";
import chefcompass from "../../Assets/Projects/chefcompass.png";


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
        <Col md={5} className="project-card">
      <ProjectCard
        imgPath={chefcompass}
        isBlog={false}
        title="Chef's Compass"
        description="Chef's Compass is a platform that simplifies your culinary journey. Create, store, and share recipes, plan meals with a convenient calendar, and let it automatically generate shopping lists. It's your recipe repository, meal planner, and grocery helper, all in one place. Enjoy cooking like never before with Chef's Compass!"
        techStack="Amazon Web Services (AWS), Node.js, React Native, Google API "
        period="October 2023 - Present"
        ghLink="https://github.com/lethienantran/chef-compass-ui"
      />
    </Col>

      

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={webcrawler}
              isBlog={false}
              title="Web Crawler"
              description="This program is a comprehensive tool designed to delve into web pages, visually represent their relationships, and analyze their connectivity. It begins its journey by scanning a single URL, meticulously weaving a web of connections that encapsulate the website's structure. These connections are transformed into an adjacency matrix, serving as the foundation for the subsequent visualization phase. "
              techStack="Node.js"
              period= "February - March 2024"
              ghLink="https://github.com/joyce628/Web-Crawler_JS"             
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={btree}
              isBlog={false}
              title="B-Tree Library"
              description="This repository contains an implementation of the B-tree data structure in JavaScript. A B-tree is a balanced tree data structure commonly used for storing and managing large datasets efficiently. It is designed to optimize search, insertion, and deletion operations, making it suitable for applications requiring fast access to sorted data."
              techStack="Node.js"
              period="March 2024"
              ghLink="https://github.com/anukann/B-tree"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
