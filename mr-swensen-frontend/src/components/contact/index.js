import AnimatedLetters from '../animatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';
import Contacts from './contact';
import Header from '../LoginNavbar.jsx'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
        <Header></Header>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                        idx={15}
                    />
                    {Contacts()}
                </h1>
                
                </div>
                <div class="contact-content">
                    <div class="contact-card">
                        <h1>If you are having any issues with this site, please send me an email.</h1>
                        <h2>I Will be Sure to Respond as Soon as Possible.</h2>
                        <hr></hr>
                        <h3>Email: rykerswensen@gmail.com</h3>
                        {/* <h3>Phone: (208)201-6562</h3> */}
                        <h3>
                            <a href='https://www.linkedin.com/in/ryker-swensen-909588264/'>LinkedIn</a>
                        </h3>
                        <h3>
                            <a href='https://github.com/RykerSwensen'>GitHub</a>
                        </h3>

                </div>
            </div>
            
            </div>

        <Loader type="pacman" />
        </>
    
    )
}

export default Contact