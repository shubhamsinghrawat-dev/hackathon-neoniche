import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AiIcon from "../../assets/images/ai-icon.png"
import InnovativeIcon from "../../assets/images/innovative-ideas-icon.png"
import RoadmapIcon from "../../assets/images/roadmap-icon.png"
import ProductivityEfficiencyIcon from "../../assets/images/productivity-efficiency-icon.png"

const CategoriesCard = () => {
  const features = [
    {
      icon: AiIcon,
      title: 'AI',
      description: 'Unleash the game-changing power of AI! Build innovative AI solutions that will transform gaming as we know it.',
      bgClass: 'bg-orange',

    },
    {
      icon: InnovativeIcon,
      title: 'Innovative Ideas',
      description: 'Have a mind-blowing concept? Share your visionary, disruptive ideas that defy the ordinary and redefine what’s possible in gaming.',
      bgClass: 'bg-red',
    },
    {
      icon: RoadmapIcon,
      title: 'Roadmap to the Future',
      description: 'Bring your future vision to life faster than ever: set the course for what’s next in gaming and beyond.',
      bgClass: 'bg-orange',
    },
    {
      icon: ProductivityEfficiencyIcon,
      title: 'Productivity &  Efficiency',
      description: 'Design tools or systems that boost engineering workflows and supercharge business operations for maximum impact.',
      bgClass: 'bg-red',
    },
  ];

  return (
    <Container>
      <Row className="g-4 justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3}>
            <div className={`glow-card h-100 ${feature.bgClass}`}>
              <div className="card-icon">
                <img src={feature.icon} className="img-fluid" alt={feature.title} />
              </div>
              <div className="card-desc">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default CategoriesCard;