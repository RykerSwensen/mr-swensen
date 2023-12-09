import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../animatedLetters';
import '../animatedLetters'
import Logo from '../home/logo'
import Loader from 'react-loaders';
import App from '../animatedLetters/subtitle'

const Dashboard = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '', 'T', 'o']
    const jobArray = ['M', 'r', '.', ' ']
    const lnameArray = ['S', 'w', 'e', 'n', 's', 'e', 'n', 's', ' ', 'C', 'l', 'a', 's', 's', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
                <div className="text-zone">
                    <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <span className={`${letterClass} _13`}>,</span>
                    <br />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={18} />
                    <br />
                    
                    {/* <img src={LogoM}  id="LogoM" alt="developer"/> */}
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={10} />

                    {/* <img src={LogoS}  id="LogoS" alt="developer" /> */}
                    <AnimatedLetters letterClass={letterClass} strArray={lnameArray} idx={18} />
                    </h1>
                    <br />
                    <App 
                    multiTextLoop/>
                    <h2>Homework / Study / Help</h2>
                    <Link to="/home" id='dashButton'>HOME</Link>
                    <Link to="/register" id='dashButton'>SIGN-IN</Link>
                    <Link to="/login" id='dashButton'>LOG-IN</Link>          
                </div>
            <Logo />
            </div>
        <Loader type="pacman" />
        </>
    );
}

export default Dashboard

