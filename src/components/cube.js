import React from 'react';

import {Canvas} from 'react-three-fiber';
import {OrbitControls} from '@react-three/drei';

class CubeInterface extends React.Component{

    render(){
        return(
            <Canvas className='canvas'>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight intensity={0.5} position={[-2,5,2]}/>
                <mesh rotation={[120,90,80]}>
                    <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
                    <meshLambertMaterial attach="material" color="red" />

                </mesh>
            </Canvas>
        );

    }


}

export default CubeInterface;