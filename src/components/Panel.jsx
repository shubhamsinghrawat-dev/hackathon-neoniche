import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import TabsSection from './common/TabsSection';

const Panel = () => {
  return (
    <section className="panel-section" id='jury'>
      <Container>
        <Row>   
            <Col xs={12} md={12}>
              <h2>Panel & Planners</h2>
            </Col>       
            <Col xs={12} md={12} className='text-center'>
              <TabsSection />
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Panel