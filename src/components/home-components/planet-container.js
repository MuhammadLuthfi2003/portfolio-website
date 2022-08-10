import React from 'react';

import {Canvas, useLoader} from 'react-three-fiber';
import {Sphere, PresentationControls, Text3D} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader';


//import fonts json file
import karla from '../../fonts/Karla SemiBold_Regular.json';

function Planets({texture,text,link,xOffset,factor}) {
    const colorMap = useLoader(TextureLoader, texture);
    const sizeFactor = factor;//used for resizing the objects inside canvas

    //TODO: Add click event to planets that redirects to a link

    return(
        <div className='canvas-container'>
            <div className='title-canvas'>
                
                <Canvas className='canvas'>
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={[-2,4,2]} />

                    <PresentationControls
                    cursor={true}
                    polar={[0,Math.PI / 2]}
                    azimuth={[-(Math.PI / 10), (Math.PI / 10)]}
                    >
                        <Text3D size={2.5 * sizeFactor} font={karla} position={[(xOffset * sizeFactor),0,0]}>
                            
                            {text}
                            <meshBasicMaterial />
                        </Text3D>
                    </PresentationControls>

                </Canvas>
            </div>

            <div className='main-canvas'>
                <Canvas className='canvas'>
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

export default Planets;