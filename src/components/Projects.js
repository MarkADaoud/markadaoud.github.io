import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rps.jpg";
import projImg2 from "../assets/img/convert.jpg";
import projImg3 from "../assets/img/growth.jpg";
import projImg4 from "../assets/img/quiz.jpg" 
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Intercative Rock, Paper, Scissors",
      description: "Using Top-Down Design employed using functions for clearing keyboard buffer, obtaining player choices, and determining the winner based on the game's rules.",
      imgUrl: projImg1,
      link: "https://github.com/MarkADaoud/Rock-Paper-Scissors"
    },
    {
      title: "Menu Style Metric / U.S. Length and Weight Conversions",
      description: "Employed using user-freindly menus and pointer manuplation while showcasing efficient input handling and accurate calculations",
      imgUrl: projImg2,
      link: "https://github.com/MarkADaoud/Metric-U.S.-Length-and-Weight-Conversions" 
    },
    {
      title: "Population Growth",
      description: "Population growth model based on specified paramaters employing a mathematical algorithm to calculate population sizes over consecutive time intervals, adhering to a Fibonacci-like sequence where each population size is the sum of the two preceding population sizes.",
      imgUrl: projImg3,
      link: "https://github.com/MarkADaoud/Population-Growth"
    },
    {
      title: "File-Quiz-Format",
      description: "Employing file operations, the program employs precise formatting techniques to present the quiz scores and corresponding averages in a structured manner within the output file, ensuring clarity and coherence for subsequent data interpretation.",
      imgUrl: projImg4,
    }, 
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const handleProjectClick = (link) => 
  {
    // Redirect the user to the specified link
    window.location.href = link;
  };
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}  
                                onClick={() => handleProjectClick(project.link)} 
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>


                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
