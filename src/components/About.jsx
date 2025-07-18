import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoriesCard from './common/CategoriesCard';

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="mb-5">
          <Col md={5} lg={5} xs={12}>
            <h2>
              About <br /> the Hackathon
            </h2>
          </Col>

          <Col md={3} xs={12} className="small-info">
            <p>
              Gear up for an exhilarating season of innovation and impact! The Junglee Games
              Hackathon: Season 3 is here, calling on brilliant minds to redefine gaming and
              technology.
            </p>
            <p>
              Innovate, collaborate, and challenge the norm: your ideas could shape the future of
            </p>
          </Col>

          <Col md={3} xs={12} className="small-info">
            <p>
              gaming, enhance business efficiency, or unlock the power of AI. Whether you’re coding,
              ideating, or designing, this is your stage to shine and make a real difference.
            </p>
            <p>Let’s build the extraordinary. Are you ready to lead the change?</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h3 className="text-white">
              Take the Challenge: Submit your ideas in these categories
            </h3>
          </Col>
        </Row>

        <CategoriesCard />
      </Container>
    </section>
  );
};

export default About;
