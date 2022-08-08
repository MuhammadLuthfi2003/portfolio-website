import React from 'react';

import {Canvas, useLoader, useFrame} from 'react-three-fiber';
import {Sphere, PresentationControls, Text3D} from '@react-three/drei';
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
    },
    {
        texture: jupiterTexture,
        text: 'About',
        subtext: 'Things About Me!',
        link: '/about',
        isPlanet: true,
        textPositionOffset: [-2,4,2],
    },
    {
        texture: marsTexture,
        text: 'Projects',
        subtext: 'A Ccts',
        isPlanet: true,
        textPositionOffset: [0,0,0],
    },
    {
        texture: neptuneTexture,
        text: 'Contact',
        subtext: 'All of My Social Media Contacts!',
        link: '/contact',
        isPlanet: true,
        textPositionOffset: [0,0,0],
    }
]

function Name({text,subtext, textPositionOffset}) {
    return (
        <div className='canvas-container'>
            
        </div>
    )
}

function DescText({subtext}) {
    return (
        <div className='subtext-container'>
            <marquee className='subtext'>{subtext}</marquee>
        </div>
    )
}

function Planets({texture,text,link,textPositionOffset,factor}) {
    const colorMap = useLoader(TextureLoader, texture);
    const sizeFactor = factor;//used for resizing the objects inside canvas

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
                        <Text3D size={2.5 * sizeFactor} font={karla} position={[(-5 * sizeFactor),0,0]}>
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
            
        </div>       

    );
}


class Interface extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            factor: 1,
            width: window.innerWidth,
        };

        this.rightIndex = this.rightIndex.bind(this);
        this.leftIndex = this.leftIndex.bind(this);
        this.setFactor = this.setFactor.bind(this);
        // this.updateDimensions = this.updateDimensions.bind(this);
        
    }

    rightIndex() {

    }

    leftIndex() {
        
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth});
        this.setFactor();
    }

    setFactor() {
        if (this.state.width > 1200) {
            this.setState({factor: 1});

        } else if (this.state.width < 1200) {
            this.setState({factor: 0.8});

        } else if (this.state.width < 992) {
            this.setState({factor: 0.6});

        } else if (this.state.width < 768) {
            this.setState({factor: 0.2});

        } 
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    render(){
        return(
            <div className='interface-container'>
                <div className='planets-container'>
                    <div className='planets'>
                        <button className='arrowBtn icon-left' onClick={this.leftIndex}>
                            <span className='arrowBtn-left'>&#5130;</span>
                        </button>
                        
                        <Planets {...planetsData[1]} factor={this.state.factor}/>

                        <button className='arrowBtn icon-right' onClick={this.rightIndex}>
                            <span className='arrowBtn-right'>&#5125;</span>
                        </button>
                    </div>
                </div>
                <DescText {...planetsData[1]}/>
            </div>

        );
    }
}


export default Interface;