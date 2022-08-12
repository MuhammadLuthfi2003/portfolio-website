import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function ContactButtonHome({icon, link}) {
    return (
        <a className='home-button' href={link} target='_blank'>
            <FontAwesomeIcon icon={icon} className='home-icon'/>
        </a>
    )
}

function HomeFooter() {
    return (
        <div className='home-button-container'>
            
            <ContactButtonHome icon={faTwitter} link={'https://twitter.com/muhluthfiar'}/>
            <ContactButtonHome icon={faGithub} link={'https://github.com/MuhammadLuthfi2003'}/>
            <ContactButtonHome icon={faInstagram} link={'https://www.instagram.com/muhluthfiar_/'}/>
            <ContactButtonHome icon={faLinkedin} link={'https://www.linkedin.com/in/muhluthfiar/'}/>
            
        </div>
    )   
}

export default HomeFooter;