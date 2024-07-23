import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Me.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Aboutme = () => 
{
  return (
    <section className="contact" id="connect">
      <Container>
        <h1>About Me</h1>
        <p> Hi! My name is Mark Daoud and I was born in in Alexandria, Egypt where I spent my early childhood years before moving to the U.S when I was 5 years old. I grew up mostly in Florida where I lived up through middle school with my parents and younger brother. I now live in Massachussets where I am a  current undergrad student at the University of Massachussets Lowell pursuing my degree in Computer Science with a focus in Biocheminformatics after having completed my high school degree at Acton Boxborough Regional High School. I have been a hardworker my entire life to get to the point where I am today and will keep working hard to pursue my dreams of being successful in the field of Computer Science. In my free time I love to spend time with my family and freinds as well as play video games. I am a big sports fan and love to watch or play them when I want to relax.  </p> 
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  }
