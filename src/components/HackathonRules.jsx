import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HackathonRulesImg from "../assets/images/hackathon-rules.png"

const HackathonRules = () => {

  return (
    <section className="hackathon-rules" id='rules'>
      <Container>
        <Row>   
            <Col xs={12} md={8}>
              <h2>Hackathon Rules</h2>
              <p><strong>5 Members Max. Per Team:</strong> Each team can have a maximum of 5 members. We encourage teams to collaborate and leverage diverse skill sets, ensuring a blend of expertise while maintaining a manageable team size.</p>
              <p><strong>At Least One Engineer and One Product Professional on Each Team:</strong> To ensure the ideas are innovative, technically feasible, and market-ready, each team must include at least one engineer and one Product professional.</p>

              <h3 className='mt-5'>Things to Keep in Mind</h3>
              <p><strong>Power Up Your Ideas: It’s not just about having an idea:</strong> it needs to be fully powered up, operational, and ready to showcase. Teams should present a working prototype or solution that is functional and ready for a live demo.</p>
              <p><strong>Collaboration Is Key:</strong> Innovate, collaborate, and enjoy the process. The best ideas emerge from diverse perspectives and teamwork. Bring your skills, passion, and collaborative mindset to turn your vision into reality.</p>
              <p><strong>Challenge the Norms:</strong> Push boundaries, think creatively, and challenge conventional thinking. However, remember to maintain ethical standards and respect for all. Innovation thrives with integrity, so let’s create something exceptional, responsibly!</p>
              
                <Row className='mt-5'>   
                    <Col xs={12} md={6}>
                    <h3 className='mb-3'>✅ Dos</h3>
                    <h4>Collaborate Like a Pro</h4>
                    <p>Teamwork wins the day! Share ideas, leverage strengths, and embrace diverse perspectives to craft something extraordinary.</p>
                    <h4>Focus on Functionality</h4>
                    <p>A working, demo-ready solution beats a fancy concept any day. Prioritize implementation.</p>
                    <h4>Follow Ethical Guidelines</h4>
                    <p>Respect intellectual property, maintain integrity, and stick to ethical standards throughout your project.</p>
                    <h4>Enjoy the Journey</h4>
                    <p>Hackathons are for learning, innovating, and having fun. Dive in and make memories with your team!</p>                    
                    </Col>       
                    <Col xs={12} md={6}>
                    <h3 className='mb-3'>❌ Don’ts</h3>
                    <h4>Go Solo</h4>
                    <p>This is a team sport. Form a squad of up to 5, including an engineer and a Product professional, to unlock your full potential.</p>
                    <h4>Cut Corners on Quality</h4>
                    <p>Speed matters, but not at the cost of quality. Ensure your solution is polished and functional.</p>
                    <h4>Break the Rules</h4>
                    <p>Originality is king. Steer clear of plagiarism and let your own ideas shine.</p>
                    <h4>Forget to Test</h4>
                    <p>A glitch-free, tested product speaks louder than unrealized dreams. Impress the judges with a flawless demo!</p>
                    </Col>
                </Row>
            </Col>       
            <Col xs={12} md={4}>
              <img src={HackathonRulesImg} className="img-fluid" />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HackathonRules;