import React from 'react';

import {Canvas, useLoader, useFrame} from 'react-three-fiber';
import {Sphere, PresentationControls, Text3D, OrbitControls} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader'; 

//import texture
import jupiterTexture from '../images/jupiter-texture.png';
import earthTexture from '../images/earth_texture.jpg';
import marsTexture from '../images/mars_texture.jpg';
import neptuneTexture from '../images/neptune_texture.jpg';

//import fonts json file
import karla from '../fonts/Karla SemiBold_Regular.json';


const planetsData = [
    {
        texture: '',
        text: 'Muhammad Luthfi',
        subtext: 'Azzahra Rammadhani',
        link: '/',
        isPlanet: false,
        textPositionOffset: [0,0,0],
        subtextPositionOffset: [0,0,0]
    },
    {
        texture: jupiterTexture,
        text: 'About',
        subtext: 'Things About Me!',
        link: '/about',
        isPlanet: true,
        textPositionOffset: [-2,4,2],
        subtextPositionOffset: [-6.6,0,0],
    },
    {
        texture: marsTexture,
        text: 'Projects',
        subtext: 'A Collection Of Projects I Made!',
        link: '/projects',
        isPlanet: true,
        textPositionOffset: [0,0,0],
        subtextPositionOffset: [0,0,0]
    },
    {
        texture: neptuneTexture,
        text: 'Contact',
        subtext: 'All of My Social Media Contacts!',
        link: '/contact',
        isPlanet: true,
        textPositionOffset: [0,0,0],
        subtextPositionOffset: [0,0,0]
    }
]

function Name({text,subtext, textPositionOffset, subtextPositionOffset}) {
    return (
        <div className='canvas-container'>
            
        </div>
    )
}

function Planets({texture,text,subtext,link,textPositionOffset,subtextPositionOffset}) {
    const colorMap = useLoader(TextureLoader, texture);
    const sizeFactor = 1; //used for resizing the objects inside canvas

    //TODO: Add Animations

    return(
        <div className='canvas-container'>
            <div className='title-canvas'>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={textPositionOffset} />

                    <PresentationControls
                    cursor={true}
                    polar={[0,Math.PI / 2]}
                    azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                    >
                        <Text3D size={2.5 * sizeFactor} font={karla} position={[-5,0,0]}>
                            <mesh />
                            {text}
                            <meshBasicMaterial />
                        </Text3D>
                    </PresentationControls>

                </Canvas>
            </div>

            <div className='main-canvas'>
                <Canvas >
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={[-2,4,2]}/>

                    <PresentationControls 
                    cursor={true}
                    speed={2}
                    polar={[-Infinity, Infinity]}
                    azimuth={[-Infinity, Infinity]}
                    >
                        <Sphere args={[(2.5 * sizeFactor),32,32]} >
                            <meshStandardMaterial map={colorMap} attach='material' />
                        </Sphere>
                    </PresentationControls>
                </Canvas>
            </div>  

            <div className='subtext'>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={[-2,4,2]}/>

                    <PresentationControls
                    cursor={true}
                    polar={[-(Math.PI / 30), (Math.PI / 30)]}
                    azimuth={[-(Math.PI / 50), (Math.PI / 50)]}
                    >
                        <Text3D size={1.2 * sizeFactor} font={karla} position={subtextPositionOffset}>
                            <mesh  />
                            {subtext}
                            <meshBasicMaterial />
                        </Text3D>
                    </PresentationControls>

                </Canvas>
            </div>
        </div>       

    );
}


class Interface extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
        };

        this.rightIndex = this.rightIndex.bind(this);
        this.leftIndex = this.leftIndex.bind(this);
    }

    rightIndex() {

    }

    leftIndex() {

    }

    render(){
        return(
            
            <div className='planets'>
                <button className='arrowBtn icon-left' onClick={this.leftIndex}>
                    <span className='arrowBtn-left'>&#5130;</span>
                </button>
                
                <Planets {...planetsData[1]}/>

                <button className='arrowBtn icon-right'>
                    <span className='arrowBtn-right'>&#5125;</span>
                </button>
                
            </div> 
        );
    }
}


export default Interface;