import React from 'react';

import {Canvas} from 'react-three-fiber';
import {PresentationControls} from '@react-three/drei';

class Interface extends React.Component{

    render(){
        return(
            <Canvas className='canvas'>
                <ambientLight intensity={1}/>
                <directionalLight intensity={0.5} position={[-2,5,2]}/>
                <PresentationControls>
                    <mesh rotation={[120,90,80]}>
                        <sphereGeometry attach="geometry" args={[1,32]} />
                        <meshLambertMaterial attach="material" color="red" />

                    </mesh>
                </PresentationControls>
            </Canvas>
        );

    }


}

export default Interface;