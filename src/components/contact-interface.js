import React from 'react';
import {Canvas} from 'react-three-fiber';
import {Text3D, PresentationControls} from '@react-three/drei';

import karla from '../fonts/Karla SemiBold_Regular.json';

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

            </div>
        </div>
    )
}

export default ContactInterface;