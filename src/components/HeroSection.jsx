import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './common/Navbar';
import heroImg from '../assets/images/banner.png';
import JgHckathonLogo from '../assets/images/jg-hackathon-logo.png';
import CalendarIcon from '../assets/images/calendar-icon.png';

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="hero-section text-white">
      <Container>
        <Navbar />
        <Row className="align-items-center py-5">
          <Col md={12} lg={6} xs={12}>
            <img src={JgHckathonLogo} alt="Jg Hackathon Logo" className="img-fluid" />
            <div className="banner-content mt-3">
              <h6 className="text-orange fw-bold">INNOVATE. COLLABORATE. LEAD.</h6>
              <h1 className="banner-heading mt-3 mb-3">
                Think big. <span className="banner-heading-sm">Build bold.</span>
              </h1>
              <p>Shape the future of gaming at the Junglee<br />Games Hackathon!</p>
              <div className="date-time d-flex align-items-start mt-5">
                <img src={CalendarIcon} alt="Calendar" className="me-2" width={24} />
                <p className="mb-0">
                  From 2:30 PM on Friday, 6th December<br />to 3 PM on 7th December.
                </p>
              </div>
            </div>
          </Col>
          <Col md={12} lg={6} xs={12}>
            <img src={heroImg} alt="Hero" className="hero-img img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
