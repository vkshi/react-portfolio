import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import LogoKi from '../../assets/images/ki-logo.svg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const jobArray= ['a', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '!']

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
                    <span className={`${letterClass} _13`}> </span>
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <span className={`${letterClass} _16`}> </span>
                    <span className="first-name">Ki</span>
                    <span className={`${letterClass} _17`}>,</span>
                    <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={15}
                />
                </h1>
                <h2>Frontend Developer | UI/UX Designer | Graphic Designer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img src={LogoKi} />
        </div>
     </>
     )
    }
    
    export default Home;