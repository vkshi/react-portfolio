import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import uPennData from '../../data/uPennData.json';

const UPenn = () => {
    const [letterClass, setLetterClass] = useState("text-animate"); 

    useEffect(() => {
        setTimeout(() => {
          setLetterClass("text-animate-hover");
        }, 3000);
      }, []);

    
    const renderPortfolio = (uPennPortfolio) => {
        return (
            <div className='images-container'>
                {
                    uPennPortfolio.map((folder, index) => {
                        return (
                            <div className='frame' key={index}>
                                <img src={folder.cover}
                                className="cover-image"
                                alt="portfolio images" />
                                <div className='content'>
                                    <p className='title'>{folder.title}</p>
                                    <h4 className='description'>{folder.description}</h4>
                                    <button
                                    className='btn'
                                    onClick={() => window.open(folder.url)}
                                    >VIEW</button>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>
        )
    }

    return (
        <>
        <div className='container upenn-page'>
            <h1 className='page-title'>
                <AnimatedLetters 
                letterClass={letterClass}
                    index={15}
                    strArray={"COURSEWORK".split("")}
                
                />
            </h1>
            <div>{renderPortfolio(uPennData.portfolio)}</div>
        </div>
        <Loader type='ball-scale-multiple' />
        </>
    )
}

export default UPenn;