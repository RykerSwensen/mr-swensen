import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedLetters";
import "./index.scss";
// import Streamlit from '../../assets/images/streamlit.jpg'
import { Link } from 'react-router-dom';
// import Wedding from '../../assets/images/Wedding.jpg'
// import bountifulFoods from '../../assets/images/bountifulFoods.jpg'
// import MyPortfolio from '../../assets/docs/Portfolio.pdf'
import { Button} from 'react-bootstrap';
// import BigGuyRafting from '../../assets/images/bigGuyRafting.jpg'
// import RykersGameRoom from '../../assets/images/rykersGameRoom3.jpg'
// import StediMobileApp from '../../assets/images/StediMobileApp.jpg'
// import WordGuessingGame from '../../assets/images/wordGuessingGame.jpg'
// import Arduino from '../../assets/images/Arduino.webp'
// import SummerBootCamp from '../../assets/images/SummerBootCampComplete.jpg'
// import bootCamp from '../../assets/images/codingBootcamp.jpg'
// import meowKnight from '../../assets/images/meowKnight.jpg'
// import sleepOutside from '../../assets/images/sleepOutside.jpg'
// import lazy from '../../lazy_loading/lazy.js'
// import "./lazy_loading/lazy.css"

const Portfolio = () => { 
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
                            strArray={"Portfolio".split("")}
                            idx={15}
                        />
                    </h1>
                    
                

                <div class="content">
                    <div class="card">
                        <h1>Python Email Webscraper</h1>
                        <p>Webscraper built to get recruiter emails from LinkedIn.</p>
                        <p>Built Using: <b>Python, Streamlit, Streamlit.io, Pandas, NeatText, Base64, and Time</b></p>
                        <a href="https://rykerswensen-python-streamlit-scraper-scrape-r6m7ck.streamlit.app/" target="_blank" rel="noreferrer">
                            {/* <img src={Streamlit} class="hover" alt="Streamlit" width='100%'></img> */}
                        </a>
                        <Link to="https://github.com/RykerSwensen/Python-Streamlit-Scraper" className='flat-button'>Source Code</Link>

                </div>
                
                <div class="card">
                    <h1>Meow Knight</h1>
                    <p>RPG game built with Jake Zalensy, Joshua Herring, deoelvenmage, Claudio Parra, and I.</p>
                    <p>Built Using: <b>HTML, JavaScript, and Tiled. </b></p>
                        {/* <img src={meowKnight}  class="noHover" alt="Meow Knight" width='100%'></img> */}
                </div>

                <div class="card">
                    <h1>Bountiful Foods</h1>
                    <p>Business website built for a potential smoothie store.</p>
                    <p>Built Using: <b>HTML, CSS, JavaScript, GitHub Pages, and Google API's. </b></p>
                    <a href="https://rykerswensen.github.io/BountifulFoods/" target="_blank" rel="noreferrer">
                        {/* <img src={bountifulFoods} alt="Bountiful Foods" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/BountifulFoods" className='flat-button'>Source Code</Link>
                </div>

                <div class="card">
                    <h1>Melaleuca Summer Bootcamp</h1>
                    <p>Created course lessons to help teach students the fundementals of web development.</p>
                    <p>Built Using: <b>Api's, JavaScript, HTML, & CSS.</b></p>
                    
                        {/* <img src={bootCamp} class="noHover" alt="Summer Boot Camp" width='100%'></img> */}
                </div>

                <div class="card">
                    <h1>Ryker Swensen About Website</h1>
                    <p>Website built to demonstrate HTML, CSS, JavaScript, and Embedding for the 2023 Melaleuca Summer Boot Camp. </p>
                    <p>Built Using: <b>HTML, JavaScript, CSS, and Embeds.</b></p>
                    <a href="https://rykerswensen.github.io/SummerBootCampComplete/" target="_blank" rel="noreferrer">
                        {/* <img src={SummerBootCamp} alt="Summer Boot Camp" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/SummerBootCampComplete" className='flat-button'>Source Code</Link>
                </div>

                <div class="card">
                    <h1>Stedi Mobile App</h1>
                    <p>Added OATH Authentication and User Login to the Stedi Mobile App.</p>
                    <p>Built Using: <b>Api's, Cookies, JavaScript, Stedi, HTML, & CSS.</b></p>
                    <a href="https://rykerswensen.github.io/StediMobileApp/" target="_blank" rel="noreferrer">
                        {/* <img src={StediMobileApp} alt="StediMobileApp" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/StediMobileApp" className='flat-button'>Source Code</Link>
                </div>

                

                <div class="card">
                    <h1>Wedding Registry</h1>
                    <p>A simple website and form built for my wedding.</p>
                    <p>Built Using: <b>HTML, CSS, JavaScript, Google API's, Add-To-Calender, GitHub Pages, and Form-Submit </b></p>
                    <a href="https://rykerswensen.github.io/Corinne-Ryker/" target="_blank" rel="noreferrer">
                        {/* <img src={Wedding} alt="Wedding" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/Corinne-Ryker" className='flat-button'>Source Code</Link>

                </div>

                <div class="card">
                    <h1>Sleep Outside</h1>
                    <p>A simple website built for a potential outdoorsman store. Built as a team with Tyler242, Anna Arutyunova, Jacob Gunderson,
                    and I. </p>
                    <p>Built Using: <b>Svelte, Vite, JavaScript, CSS, and HTML. </b></p>
                    
                        {/* <img src={sleepOutside} class="noHover" alt="Sleep Outside" width='100%'></img> */}
                    
                    <Link to="https://github.com/RykerSwensen/WDD330Team2" className='flat-button'>Source Code</Link>

                </div>

                <div class="card">
                    <h1>White Water Rafting Website</h1>
                    <p>A wesbite for a white water rafting adventure</p>
                    <p>Built Using: <b>HTML, CSS, and GitHub Pages. </b></p>
                    <a href="https://rykerswensen.github.io/BigGuyRafting/index.html" target="_blank" rel="noreferrer">
                        {/* <img src={BigGuyRafting} alt="Big Guy Rafting" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/BigGuyRafting" className='flat-button'>Source Code</Link>
                </div>

                <div class="card">
                    <h1>C# Games</h1>
                    <p>C# Games Jumper, Hilo, Cycle, Greed, and TicTacToe</p>
                    <p>Built Using: <b>C# </b></p>
                    <a href="https://github.com/RykerSwensen/CSharpGames" target="_blank" rel="noreferrer">
                        {/* <img src={WordGuessingGame} alt="C# Games" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/CSharpGames" className='flat-button'>Source Code</Link>
                </div>

                <div class="card">
                    <h1>Arduino Application</h1>
                    <p>Arduino BMI Calculator</p>
                    <p>Built Using: <b>C# </b></p>
                    <a href="https://github.com/RykerSwensen/ArduinoProject" target="_blank" rel="noreferrer">
                        {/* <img src={Arduino} alt="Arduino" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/ArduinoProject" className='flat-button'>Source Code</Link>
                </div>

                <div class="card">
                    <h1>Rykers Game Room</h1>
                    <p>My first website.</p>
                    <p>Built Using: <b>HTML, CSS, and GitHub Pages. </b></p>
                    <a href="https://rykerswensen.github.io/ryker_swensens_game_room/" target="_blank" rel="noreferrer">
                        {/* <img src={RykersGameRoom} alt="RykersGameRoom" width='100%'></img> */}
                    </a>
                    <Link to="https://github.com/RykerSwensen/ryker_swensens_game_room" className='flat-button'>Source Code</Link>
                </div>
                <div className="moreProjects">
                    <p>
                            More Projects Are Always Being Developed!
                        </p>
                        <p>
                            Check out My 
                            <b>
                                <a
                                    href="https://github.com/RykerSwensen"
                                    target="_blank"
                                    rel="noreferrer"
                                > GitHub 
                                </a>
                            </b>
                                &
                            <b>
                                <a
                                    href="https://www.linkedin.com/in/ryker-swensen-909588264/"
                                    target="_blank"
                                    rel="noreferrer"
                                > LinkedIn
                                </a>
                            </b>
                            to Stay Up-To-Date or View More
                    </p>
                    {/* <p><a href={MyPortfolio} download="MyPortfolio" target='_blank' rel="noreferrer">
                    <Button className='flat-button'>Click To Download My Portfolio</Button>
                </a></p> */}
                </div>
            </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;