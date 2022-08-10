import React from 'react';

import {Canvas} from 'react-three-fiber';
import {PresentationControls, Text3D} from '@react-three/drei';

//import profilepicture file
import profpic from '../../images/profpic.png';

//import fonts json file
import karla from '../../fonts/Karla SemiBold_Regular.json';

function Name({firstName, lastName, factor, xOffset}) {
    return (
        <div className='intro-container'>
            <div className='picture-container'>
                <img className='profpic' src={profpic} alt='My Profile' />
                <Canvas className='name-canvas canvas'>
                    <ambientLight intensity={0.5}/>
                    <directionalLight intensity={0.5} position={[-2,4,2]} />

                    <PresentationControls
                    cursor={true}
                    polar={[0,Math.PI / 2]}
                    azimuth={[-(Math.PI / 30), (Math.PI / 30)]}
                    >
                        <Text3D size={1 * factor} font={karla} position={[(xOffset * factor),0,0]}>
                            
                            {firstName}
                            <meshBasicMaterial />
                        </Text3D>
                        <Text3D size={1 * factor} font={karla} position={[(xOffset * factor),-1,0]}>
                            
                            {lastName}
                            <meshBasicMaterial />
                        </Text3D>
                    </PresentationControls>
                </Canvas>
            </div>
        </div>
    )
}

export default Name;