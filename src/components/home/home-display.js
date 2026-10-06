import React from 'react';
import '../../styles/home-decorator.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import FloatingPlus from '../floating-plus';
import TypewriterText from '../typewriter-text';

class HomeDisplay extends React.Component {
    render() {
        return (
            <div className='home-display'>
                <div className='home-display-inner'>

                    <div className="hero">
                        <div className="block">
                            <text className="block-text">
                                <TypewriterText 
                                    className="typewriter-name"
                                    text="Muhammad Luthfi Azzahra Rammadhani"
                                    interval={80}
                                    resetOnExit
                                />
                            </text>
                        </div>
                        <FloatingPlus className="home-plus corner" />
                        <FloatingPlus className="home-plus corner-bottom" rotateDirection="ccw" delay={1} />
                        <FloatingPlus className="home-plus random-1" amplitude={12} floatDuration={4} rotateDuration={12} delay={2} />
                        <div className="bracket tl"></div>
                        <div className="bracket random-1"></div>
                        <div className="title-block">
                            <div className="bracket title-1"></div>
                            <div className="bracket title-2"></div>
                            <FloatingPlus className="home-plus programmer" rotateDuration={5} />
                            <text className="title-text">
                                <TypewriterText
                                    className="typewriter-title"
                                    text="Game Programmer"
                                    interval={80}
                                    resetOnExit
                                    marker={false}
                                />
                            </text>
                        </div>

                        <FloatingPlus className="home-plus contact" rotateDirection="ccw" delay={0.5} />
                        <div className="bracket contact"></div>
                        <div className="contact-bar">
                            <span className="contact-label">Contact Me</span>

                            <div className="icon-row">
                                <a href="https://sofutobekkusu.itch.io/" className="icon-btn" aria-label="ItchIo">
                                    <FontAwesomeIcon icon={faItchIo} />
                                </a>
                                <a href="https://www.linkedin.com/in/muhluthfiar/" className="icon-btn" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="https://github.com/MuhammadLuthfi2003" className="icon-btn" aria-label="GitHub">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="mailto:luthfiazzahra03@gmail.com" className="icon-btn" aria-label="Email">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeDisplay;