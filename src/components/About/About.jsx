import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Graduated from University of California, Irvine with a BA in Business Economics in 2017. I went on to to work at Goldman Sachs as an operations analyst. I was on the portfolio reconciliation and valuations team. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I left Goldman to work on a startup that was called UnMapped. The aim of the startup was to connect locals with tourists based off of common interests to provide them with authentic experiences. I was working on the startup while simultaneously pursuing my MS in Applied Economics from Johns Hopkins University.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'Around 7 months into the startup we ended up closing our doors. This is when I decided and realized that along with my love for research and data I am also extremely interested in programming. I enrolled in Lambda School (a nine month full stack web development boot camp) and started in May 2019.\n'}
                </p>
                <p className="about-wrapper__info-text">
                  I enjoy learning, being challenged, and stepping out of my comfort zone. As long
                  as the role involves tough problems it will likely be a role I am interested in. I
                  am also a big fan of data and believe some of the greatest solutions can be found
                  at the intersection of programming and data. I am a big time foodie and have an
                  excel sheet with restaurants all across the globe. I also love basketball whether
                  it is playing or watching (Clippers fan).
                </p>
                <p>Technical Skills:</p>
                <p style={{ display: 'flex', flexDirection: 'row' }}>
                  <ul>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>ReactJS </li>
                    <li>React Native</li>
                  </ul>
                  <ul>
                    <li>Flask</li>
                    <li>Django</li>
                    <li>PostgreSQL</li>
                    <li>NumPy</li>
                  </ul>
                  <ul>
                    <li>Java</li>
                    <li>HTML/CSS</li>
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                  </ul>
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/1VhX0eJrEhX9Y92UsyYa5GAxaGOvDWBTd/view?usp=sharing"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
