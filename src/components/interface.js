import React from 'react';

import {Canvas, useLoader, useFrame} from 'react-three-fiber';
import {Sphere, PresentationControls} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader'; 

//import texture
import jupiterTexture from '../images/jupiter-texture.png';
import earthTexture from '../images/earth_texture.jpg';
import marsTexture from '../images/mars_texture.jpg';
import neptuneTexture from '../images/neptune_texture.jpg';

const textureArray = [jupiterTexture, earthTexture, marsTexture, neptuneTexture];

function Planets({texture}) {
    const colorMap = useLoader(TextureLoader, texture);
        
    return(         
        <Canvas className='canvas'>

            <ambientLight intensity={0.5}/>
            <directionalLight intensity={0.5} position={[-2,4,2]}/>

            <PresentationControls 
            cursor={true}
            speed={2}
            polar={[-Infinity, Infinity]}
            azimuth={[-Infinity, Infinity]}
            >
                <Sphere args={[2,32,32]} >
                    <meshStandardMaterial map={colorMap} attach='material' />
                </Sphere>
            </PresentationControls>

        </Canvas>
    );
}


class Interface extends React.Component{
    render(){
        return(
            
            <div className='planets'>
                {
                    textureArray.map((texture, index) => {
                        return(
                            <Planets texture={texture} key={index}/>
                        )
                    })
                }    
            </div> 
        );
    }
}


export default Interface;