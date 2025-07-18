import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import RewardsImg from "../assets/images/rewards.png";

const Rewards = () => {
  return (
    <section className="rewards" id='rewards'>
      <Container>
        <Row>   
            <Col xs={12} md={12}>
              <h2>Rewards & Recognition</h2>
              <p>The most innovative solutions will win epic rewards. Here are the amazing prizes that could be yours!</p>
            </Col>       
            <Col xs={12} md={12} className='text-center'>
              <img src={RewardsImg} className="img-fluid" />
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Rewards