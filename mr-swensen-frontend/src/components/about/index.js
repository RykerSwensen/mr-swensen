import AnimatedLetters from '../animatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Tate from '../../assets/images/Swensen_Tate.jpg'
import Header from '../LoginNavbar.jsx'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <Header></Header>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'T', 'h', 'i', 's', ' ', 'C', 'l', 'a', 's', 's', '.']}
                    idx={15}
                />
                </h1>
                
                <p>
                    Hello, my name is Mr. Swensen. I am from St. Anthony, Idaho.
                    I am a 3rd grade educator at Henry's Fork Elementary. 
                </p>
                <hr></hr>
                <p>
                    I hope that this website can be used as a tool for students to
                    their course materials no matter where they are. This website will
                    contain practice for spelling words, math equations, and homework 
                    assignments.
                </p>
                <hr></hr>
                <p>
                    Thank you for furthering your education by choosing to 
                    practice and grow. 
                </p>
            </div>
            <div className='stage-cube-cont'>
                
                <div className='cubespinner'>
                    <img src={Tate} id="Me" alt="Me" width='50%'></img>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About

// 