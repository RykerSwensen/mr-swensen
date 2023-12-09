import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedLetters";
import "./index.scss";
// import MyResume from '../../assets/docs/June2023Resume.pdf'
import { Button} from 'react-bootstrap';




const Resume = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    return (
        <>
            <div className="container portfolio-page">
                    <h1 className="page-title">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Resume".split("")}
                            idx={15}
                        />
                    </h1>
                    <h2 className="work-experience">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Work Experience:".split("")}
                            idx={15}
                        />
                </h2>
                
                
                <div class="content">

                <div class="resumeCard">
                        <h2 class="split-h2">Software Developer Intern</h2>
                        <h2>September 2023 - Present</h2>
                        <h3 class="split-h3">Vivacity Tech PBC. <span>St Paul, Minnesota.</span></h3>
                        <p>• Developed scripts to easily add bulk data into a PostgreSQL database.</p> 
                        <p>• Curated scripts to remove old, incorrect, and test data from a PostgreSQL database.</p>
                        <p>• Wrote tests in Jest to test JavaScript routes and functions.</p>     
                </div>

                <div class="resumeCard">
                        <h2 class="split-h2">Software Developer Assistant</h2>
                        <h2>July 2023 - Present</h2>
                        <h3 class="split-h3">Brigham Young University Idaho. <span>Rexburg, Idaho</span></h3>
                        <p>• Transitioned the Web Services course from JavaScript to Typescript, in order to make students competitive and job-ready.</p>
                        <p>• Created a web crud application with a React front-end and Firebase database. The professor can sign in, add student information, and send data to Firebase. The non-signed users can search for students, sort data, and filter data.</p>        
                </div>

                <div class="resumeCard">
                        <h2 class="split-h2">CIT 225 Database Design & Development Teacher Assistant</h2>
                        <h2>January 2023 - Present</h2>
                        <h3 class="split-h3">Brigham Young University Idaho. <span>Rexburg, Idaho</span></h3>
                        <p>• Communicate with students and instructors to ensure standards are met in database design when designing SQL databases.</p>
                        <p>• Guided students with questions regarding database queries, database design, redundant data, database servers, and MySQL Workbench.</p>
                        <p>• Prepared course materials for students and organized class assignments to contribute to the improvement of student grades and class involvement for roughly 70 students each semester.</p>
                </div>

                    <div class="resumeCard">
                        <h2 class="split-h2">Summer Boot-Camp Designer & Instructor</h2>
                        <h2>April 2023 - July 2023</h2>
                        <h3 class="split-h3">Brigham Young University Idaho. <span>Rexburg, Idaho</span></h3>
                        <p>• Designed and created a course for students to learn fundamentals of building a web application using JavaScript, HTML, and CSS.</p>
                        <p>• Developed the BYU-I boot camp by developing over twenty course-related modules with step-by-step directions as well as video modules to cater to multiple learning models.</p>     
                </div>
                
                <div class="resumeCard">
                        <h2 class="split-h2">CIT & CSE Drop In Lab Volunteer</h2>
                        <h2>January 2023 - May 2023</h2>
                        <h3 class="split-h3">Brigham Young University Idaho. <span>Rexburg, Idaho</span></h3>
                        <p>• Coordinated with advanced-level professors and courses to teach students programming basics by implementing a hands-on learning approach on a 1-1 scale. Students were given smaller questions and assignments to help teach themselves.</p>
                        <p>• Implemented mentoring for over 20 students to help improve programming skills. Conducted volunteer work for fellow peers.</p>
                </div>
                <h2 className="education">
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Education:".split("")}
                            idx={15}
                        />
                </h2>
                <div class="resumeCard">
                        <h2 class="split-h2">Bachelor of Science</h2>
                        <h2>Software Engineering</h2>
                        <h2>August 2018 - December 2023</h2>
                        <h3 class="split-h3">Brigham Young University Idaho. <span>Rexburg, Idaho</span></h3>
                        <p>Studied: <b>Full-Stack Development, Algorithm Design, Modularization Design,
                            Web Development, Front-End Development, Back-End Development, Cyber Security, 
                            Database Design & Development, Web Services, C++, C#, C, Kotlin, Clojure, and Progamming With Classes.
                        </b></p>
                </div>
                <div class="resumeCard">
                        <h2 class="split-h2">Diploma</h2>
                        <h2>August 2014 - May 2018</h2>
                        <h3 class="split-h3">South Fremont High School. <span>St. Anthony, Idaho</span></h3>
                        <p>Graduated as a Member of the National Honors Society.</p>
                </div>
                <div className="moreProjects">
                    <p>
                            I Am Always Learning!
                        </p>
                        <p>
                            Check out My 
                            <b>
                                <a
                                    href="https://www.linkedin.com/in/ryker-swensen-909588264/"
                                    target="_blank"
                                    rel="noreferrer"
                                > LinkedIn
                                </a>
                            </b>
                            to See More on my Jobs and Education.
                    </p>
                    {/* <p><a href={MyResume} download="MyResume" target='_blank' rel="noreferrer">
                    <Button className='flat-button'>Click To Download My Resume</Button>
                </a></p> */}
                </div>
                
            </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Resume;