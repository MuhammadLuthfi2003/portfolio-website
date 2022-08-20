import React from 'react';
import {Canvas} from 'react-three-fiber';
import {Text3D, PresentationControls,} from '@react-three/drei';

import karla from '../fonts/Karla SemiBold_Regular.json';

import ContactList from './contact-components/contact-list';
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import earthTexture from '../images/earth_texture.jpg';

import Planet from './home-components/planet';

const links = [
    {
        icon: faTwitter,
        link: 'https://twitter.com/muhluthfiar',
        title: 'twitter'
    },
    {
        icon: faGithub,
        link: 'https://github.com/MuhammadLuthfi2003',
        title: 'github'
    },
    {
        icon: faInstagram,
        link: 'https://www.instagram.com/muhluthfiar_/',
        title: 'instagram'
    },
    {
        icon: faLinkedin,
        link: 'https://www.linkedin.com/in/muhluthfiar/',
        title: 'linkedin'
    }
]


function ContactInterface() {
    return (
        <div>
            <div className='contact-title'>
                <Canvas>
                    <mesh>
                        <ambientLight intensity={0.5}/>
                        <directionalLight intensity={0.5} position={[-2,4,2]} />

                        <PresentationControls
                        cursor={true}
                        polar={[0,Math.PI / 2]}
                        azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                        >
                            <Text3D font={karla}  position={[-7,0,0]} scale={1.2}>
                                My Social Media!
                            </Text3D>
                        </PresentationControls>
                    </mesh>
                </Canvas>
            </div>
            <div className='contact-body'>
                <ul className='contact-list'>
                    {
                        links.map(({icon, link, title}) => (
                            <ContactList icon={icon} link={link} title={title} key={title}/>
                        ))
                    }
                </ul>
                <span className='footer-txt'>Made With ❤️</span>
                <Canvas className='contact-planet'>
                    <Planet texture={earthTexture} link='/' factor={1}/>
                </Canvas>
            </div>
        </div>
    )
}

export default ContactInterface;