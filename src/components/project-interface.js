import React from 'react';
import {Canvas} from 'react-three-fiber';
import {Text3D, PresentationControls,} from '@react-three/drei';

import ProjectCard from './project-components/project-card';
import Planet from './home-components/planet';

import karla from '../fonts/Karla SemiBold_Regular.json';

import breakout from '../images/project-img/breakout-preview.png';
import maze from '../images/project-img/maze-preview.png';
import notes from  '../images/project-img/notes-preview.png';
import rocket from '../images/project-img/rocket-preview.png';

import venusTexture from '../images/venus_texture.jpg';

const card = [
    {
        img: breakout,
        link: 'https://github.com/MuhammadLuthfi2003/breakout-game',
        title: 'Breakout Game',
        description: 'A simple breakout game made with Vanilla JS'
    },
    {
        img: maze,
        link: 'https://github.com/MuhammadLuthfi2003/maze-game',
        title: 'Maze Game',
        description: 'A simple maze game that made with Vanilla JS'
    },
    {
        img: notes,
        link: 'https://github.com/MuhammadLuthfi2003/notes-app',
        title: 'Notes App',
        description: 'A simple notes app made with React'
    },
    {
        img: rocket,
        link: 'https://github.com/MuhammadLuthfi2003/basic-rocket-game',
        title: 'Rocket Game',
        description: 'A simple rocket game made with Unity'
    }
]


function ProjectInterface() {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <Canvas>
                    <mesh>
                        <ambientLight intensity={0.5}/>
                        <directionalLight intensity={0.5} position={[-2,4,2]} />

                        <PresentationControls
                        cursor={true}
                        polar={[0,Math.PI / 2]}
                        azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                        >
                            <Text3D font={karla}  position={[-5,0,0]} scale={1.2}>
                                My Projects!
                            </Text3D>
                        </PresentationControls>
                    </mesh>
                </Canvas>
            </div>
            <div className='projects'>
                {/*USE CSS GRID TO ALIGN THE CONTENTS */
                card.map(({img, link, title, description}) => {
                    return (
                        <ProjectCard img={img} link={link} title={title} description={description} key={title}/>
                    )
                })
                }
            </div>
            <div className='project-footer'>
                <span className='project-footer-title'>Want too see more of my projects?</span>
                <br/>
                <span className='project-footer-subtitle'>Click on the planet below to find out!</span>
                <Canvas className='project-footer'>
                    <Planet texture={venusTexture} link='https://github.com/MuhammadLuthfi2003' factor={1}/>
                </Canvas>   
            </div>
        </div>
    )
}

export default ProjectInterface;