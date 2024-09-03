import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/rps.jpg";
import projImg2 from "../assets/img/convert.jpg";
import projImg3 from "../assets/img/growth.jpg";
import projImg4 from "../assets/img/quiz.jpg";
import projImg5 from "../assets/img/Ferry.jpg";
import projImg6 from "../assets/img/hangman.jpg";
import projImg7 from "../assets/img/hawks.jpg";
import projImg8 from "../assets/img/Web.png";
import projImg9 from "../assets/img/Comingsoon.jpg"; 
import projImg10 from "../assets/img/nfl.jpg"; 
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
      link: "https://github.com/MarkADaoud/Files-Quiz-Format"
    }, 
    {
      title: "Ferry Loading",
      description: "The Ferry Loading program utilizes a custom queue implementation to simulate ferry crossings, efficiently transporting vehicles across a river while considering capacity constraints. It calculates the minimum number of crossings required and demonstrates practical queue usage in logistical scenarios.",
      imgUrl: projImg5,
      link: "https://github.com/MarkADaoud/Ferry-Loading"
    },
    {
      title: "Evil Hangman",
      description: "Evil Hangman is an interactive Hangman game that dynamically selects words to maximize difficulty, utilizing AVL trees and a custom generic vector implementation. Players engage with user-friendly prompts to make guesses, experiencing a challenging and immersive gameplay experience.",
      imgUrl: projImg6,
      link: "https://github.com/MarkADaoud/Evil-Hangman-/tree/main"
    },
  ];
  const projects2 = [
    {
      title: "Hawks Nest Game",
      description: "Using Unity to create scripts in C#, Hawks Nest is a game where players have to manuever around obstacles to get to the finish line before the time expires to move to the next level. As levels increase difficulty is increased with obstacles such as spinning oponnents that damage your health.",
      imgUrl: projImg7,
      link: "https://github.com/MarkADaoud/Hawks-Nest-Game"
    },
    {
      title: "Personal Portfolio Website",
      description: "The current website you are viewing created using react and react-bootstrap showcasing my skills and projects as well as my web-development skills.",
      imgUrl: projImg8,
      link: "https://github.com/MarkADaoud/Portfolio-Website"  
    },
    {
      title: "Nfl Stats Predictor",
      description: "Using data from pro football focus a model was created that can predict Over/Under and if the spread will hit for future games using past games and trends such as week 1 unders to give accurate results.",
      imgUrl: projImg10,
      link: "https://github.com/MarkADaoud/Nfl-stats-models"
    },
    
  ];

  const projects3 = [
  
    {
      title: "Coming Soon",
      description: "More projects will be added in the near future.",
      imgUrl: projImg9,
      link: ""
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
                <p>This section showcases some of the projects that I have created using platforms such as Visual Studio Code, Visual Studio, Brackets, Unity, and others to code in languages such as C, C++, HTML, CSS, Python, Javascript, and C#. You can access the Github Repositories of any project by simply pressing on the project card.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">C Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">C++ Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web, Game, Other Projects</Nav.Link>
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


                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects3.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects2.map((project, index) => {
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
