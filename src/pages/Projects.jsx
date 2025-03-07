import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import kc from "../assets/img/kc.PNG";
import kc1 from "../assets/img/kc1.PNG";
import kv from "../assets/img/kv.PNG";


const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="">
            <ProjectCard
              imgPath={kc}
              isBlog={false}
              title="Kitchen Design"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/kevinroberts1117/lift-buddy"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={kc1}
              isBlog={false}
              title="Design Room"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/kevinroberts1117/social-media"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={kv}
              isBlog={false}
              title="Kitchen Visualizer"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/kevinroberts1117/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/kevinroberts1117/mern-blog-app"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="E-commerce Website"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/kevinroberts1117/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/kevinroberts1117/Solidity-Kickstart"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects