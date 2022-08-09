import React from 'react';

import {Canvas, useLoader, useFrame} from 'react-three-fiber';
import {Sphere, PresentationControls, Text3D} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

//import texture
import jupiterTexture from '../images/jupiter-texture.png';
import marsTexture from '../images/mars_texture.jpg';
import neptuneTexture from '../images/neptune_texture.jpg';

//import fonts json file
import karla from '../fonts/Karla SemiBold_Regular.json';

//import profilepicture file
import profpic from '../images/profpic.png';


const planetsData = [
    {
        texture: '',
        text: 'Muhammad Luthfi',
        subtext: 'Azzahra Rammadhani',
        link: '/',
        isPlanet: false,
        xOffset: [0,0,0],
    },
    {
        texture: jupiterTexture,
        text: 'About',
        subtext: 'Things About Me!',
        link: '/about',
        isPlanet: true,
        xOffset: -5,
    },
    {
        texture: marsTexture,
        text: 'Projects',
        subtext: 'A Collections of My Projects',
        link: '/projects',
        isPlanet: true,
        xOffset: -7,
    },
    {
        texture: neptuneTexture,
        text: 'Contact',
        subtext: 'All of My Social Media Contacts!',
        link: '/contact',
        isPlanet: true,
        xOffset: -7,
    }
]

function Name({firstName, lastName, factor}) {
    return (
        <div className='intro-container'>
            <div className='picture-container'>
                <img className='profpic' src={profpic} alt='My Profile' />
            </div>

            <div className='name-container'>
                <div className='firstName-container'>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <directionalLight intensity={0.5} position={[-2,4,2]} />

                        <PresentationControls
                        cursor={true}
                        polar={[0,Math.PI / 2]}
                        azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                        >

                        </PresentationControls>
                    </Canvas>
                </div>

                <div className='lastName-container'>
                    <Canvas>
                        <ambientLight intensity={0.5}/>
                        <directionalLight intensity={0.5} position={[-2,4,2]} />
                        
                        <PresentationControls
                        cursor={true}
                        polar={[0,Math.PI / 2]}
                        azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                        >
                            
                        </PresentationControls>
                    </Canvas>
                </div>
            </div>
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

function Planets({texture,text,link,xOffset,factor}) {
    const colorMap = useLoader(TextureLoader, texture);
    const sizeFactor = factor;//used for resizing the objects inside canvas

    //TODO: Add click event to planets that redirects to a link

    return(
        <div className='canvas-container'>
            <div className='title-canvas'>
                <Canvas>
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={[-2,4,2]} />

                    <PresentationControls
                    cursor={true}
                    polar={[0,Math.PI / 2]}
                    azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                    >
                        <Text3D size={2.5 * sizeFactor} font={karla} position={[(xOffset * sizeFactor),0,0]}>
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

function CompletedName({leftIndex, rightIndex, firstName, lastName, description, factor}) {
    return (
        <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    <button className='arrowBtn icon-left' onClick={leftIndex}>
                        <span className='arrowBtn-left'>&#5130;</span>
                    </button>
                    
                    <Name firstName={firstName} lastName={lastName} factor={factor}/>

                    <button className='arrowBtn icon-right' onClick={rightIndex}>
                        <span className='arrowBtn-right'>&#5125;</span>
                    </button>
                </div>
            </div>
            <DescText subtext={description}/>
        </div>
    </div>
    )
}


function CompletedPlanet({factor,rightIndex,leftIndex,currentIndex}) {
    return (
    <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    <button className='arrowBtn icon-left' onClick={leftIndex}>
                        <span className='arrowBtn-left'>&#5130;</span>
                    </button>
                    
                    <Planets {...planetsData[currentIndex]} factor={factor}/>

                    <button className='arrowBtn icon-right' onClick={rightIndex}>
                        <span className='arrowBtn-right'>&#5125;</span>
                    </button>
                </div>
            </div>
            <DescText {...planetsData[currentIndex]}/>
        </div>
    </div>
    )
}

class Interface extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0, // change this to 0 back again 
            factor: 1,
            width: window.innerWidth,
        };

        this.rightIndex = this.rightIndex.bind(this);
        this.leftIndex = this.leftIndex.bind(this);
        this.setFactor = this.setFactor.bind(this);
        // this.updateDimensions = this.updateDimensions.bind(this);
        
    }

    rightIndex() {
        const currentIndex = this.currentIndex

        this.setState({currentIndex: currentIndex + 1});

        if(this.state.currentIndex === planetsData.length - 1) {
            this.setState({currentIndex: 0});
        }
    }

    leftIndex() {
        const currentIndex = this.currentIndex

        this.setState({currentIndex: currentIndex - 1});

        if(this.state.currentIndex < 0) {
            this.setState({currentIndex: planetsData.length - 1});
        }
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth});
        this.setFactor();
    }

    setFactor() {
        if (this.state.width < 576) {
            this.setState({factor: 0.4});

        } else if (this.state.width < 768) {
            this.setState({factor: 0.6});

        } else if (this.state.width < 992) {
            this.setState({factor: 0.7});

        } else if (this.state.width < 1200) {
            this.setState({factor: 0.8});

        } else if (this.state.width > 1200) {
            this.setState({factor: 1});
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
            <div>
                {
                    //find the index that is the same with the current index
                    planetsData.map((planet,index) => {
                        if (index === this.state.currentIndex) {
                            if (planet.isPlanet) {
                                return <CompletedPlanet key={index} factor={this.state.factor} rightIndex={this.rightIndex} leftIndex={this.leftIndex} currentIndex={index}/>
                            }
                            else {
                                return <CompletedName  factor={this.state.factor} key={index} firstName='Muhammad Luthfi' lastName='Azzahra Rammadhani' description='An Aspiring Software Engineering Student In Universitas Gadjah Mada' leftIndex={this.leftIndex} rightIndex={this.rightIndex}/>
                            }
                            
                        }
                    })
                }
            </div>


        );
    }
}


export default Interface;