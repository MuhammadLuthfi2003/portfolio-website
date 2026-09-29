import React from 'react';
import '../../styles/home-decorator.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class HomeDisplay extends React.Component {
    render() {
        return (
            <div className='home-display'>
                <div className='home-display-inner'>

                    <div class="hero">
                        <div class="block">
                            <text class="block-text">Muhammad Luthfi Azzahra Rammadhani</text>
                        </div>
                        <div class="plus"></div>
                        <div class="bracket tl"></div>
                        <div class="title-block">
                            <div class="bracket title-1"></div>
                            <div class="bracket title-2"></div>
                            <text class="title-text">Game Programmer</text>
                        </div>

                        <div class="contact-bar">
                            <span class="contact-label">Contact Me</span>

                            <div class="icon-row">
                                <a href="#" class="icon-btn" aria-label="ItchIo">
                                    <FontAwesomeIcon icon={faItchIo} />
                                </a>
                                <a href="#" class="icon-btn" aria-label="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a href="#" class="icon-btn" aria-label="GitHub">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href="#" class="icon-btn" aria-label="Email">
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