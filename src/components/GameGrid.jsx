import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GridGame from "../assets/images/game-grid.png";

const GameGrid = () => {
  return (
    <section className="hackathon-container" id='register'>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} xs={12}>
            <img src={GridGame} className="img-fluid" alt="Game Grid" />
          </Col>
          <Col lg={3} xs={12}>
            <h2>
              Who <br /> Should <br /> Register
            </h2>
          </Col>
          <Col lg={2} xs={12}>
            <p>The JG Hackathon is open to every Junglee: across teams, locations, and expertise! Whether you're from Tech, Design, Marketing, or Operations, this is your stage to innovate and create.</p>
            <p>Form a squad of up to 5 champions, bring your ideas to life, and solve exciting challenges. Coders, creators, and innovative thinkers, this adventure is for everyone. Let’s collaborate, think big, and make an impact together!</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GameGrid;
