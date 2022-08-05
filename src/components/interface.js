import React from 'react';

import {Canvas, useLoader} from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader'; 

//import texture
import jupiterTexture from '../images/jupiter-texture.png';

function Interface() {
    const colorMap = useLoader(TextureLoader, jupiterTexture);
        
        return(
            <Canvas className='canvas'>
                <OrbitControls enableZoom={false} />

                <ambientLight intensity={1}/>
                <directionalLight intensity={0.5} position={[-2,5,2]}/>
                
                    <mesh rotation={[0,0,0]}>
                        <sphereGeometry attach="geometry" args={[1,32]} />
                        <meshStandardMaterial map={colorMap}/>

                    </mesh>
                
            </Canvas>
        );

    }


export default Interface;