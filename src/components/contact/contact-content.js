import React from 'react';

import '../../styles/contact/contact-content-decorator.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faItchIo, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import arrowIcon from '../../images/icons/About Me Arrow.png';

import TiltCard from '../tilt-card';
import TypewriterText from '../typewriter-text';

import FloatingPlus from '../floating-plus';

// Add or reorder contacts here, the list renders from this array.
const contacts = [
    { label: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/muhluthfiar/' },
    { label: 'Email',    icon: faEnvelope, link: 'mailto:luthfiazzahra03@gmail.com' },
    { label: 'Github',   icon: faGithub,   link: 'https://github.com/MuhammadLuthfi2003' },
    { label: 'Itch.io',  icon: faItchIo,   link: 'https://sofutobekkusu.itch.io/' },
];

class ContactContent extends React.Component {
    render() {
        return (
            <div className='contact-content'>
                <div className='contact-decor' aria-hidden='true'>
                    <FloatingPlus className='contact-plus random-1' delay={0} />
                    <FloatingPlus className='contact-plus random-2' rotateDirection='ccw' delay={1.5} />
                    <FloatingPlus className='contact-plus random-3' floatDuration={4} delay={0.8} />
                    <FloatingPlus className='contact-plus hide-mobile' delay={2} />
                </div>

                <div className='contact-links'>
                    {contacts.map((contact) => (
                        <TiltCard key={contact.label} className='contact-link-tilt'>
                            <a
                                className='contact-link'
                                href={contact.link}
                                target={contact.link.startsWith('mailto:') ? undefined : '_blank'}
                                rel='noopener noreferrer'
                            >
                                <FontAwesomeIcon icon={contact.icon} className='contact-link-icon' />
                                <span className='contact-link-label'>{contact.label}</span>
                                <span className='contact-link-arrow'>
                                    <img src={arrowIcon} alt='' />
                                </span>
                            </a>
                        </TiltCard>
                    ))}
                </div>

                <div className='contact-message'>
                    <span className='contact-message-text'>
                        <TypewriterText
                            className="typewriter-contact"
                            text="Lets Keep In Touch!"
                            interval={80}
                            resetOnExit
                        />
                    </span>
                </div>

                <span className='contact-copyright'>
                    Copyright 2026 By Muhammad Luthfi Azzahra Rammadhani
                </span>

            </div>
        )
    }
}

export default ContactContent;