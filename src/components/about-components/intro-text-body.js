import React, {useRef, useState} from 'react';

import {useFrame} from 'react-three-fiber';
import {Text3D} from '@react-three/drei';

import karla from '../../fonts/Karla SemiBold_Regular.json';

function IntroTextBody() {
    const txtmesh = useRef();
    const [isRight, setDirection] = useState(false);

    useFrame((state,delta) => {
        if(isRight) {
            txtmesh.current.position.x += 0.1;
        } 
        else if (!isRight) {
            txtmesh.current.position.x -= 0.1;
        }

        // need fix
        if(txtmesh.current.position.x < -50 && !isRight) {
            setDirection(isRight => !isRight)
        }
        else if (txtmesh.current.position.x > 10 && isRight) {
            setDirection(isRight => !isRight)
        }

    })

    return (
        <mesh
        ref={txtmesh}
        >
            <ambientLight intensity={0.5}/>
            <directionalLight intensity={0.5} position={[-2,4,2]} />

                <Text3D font={karla} position={[10,0,0]}>
                    Muhammad Luthfi Azzahra Rammadhani
                    <meshBasicMaterial />
                </Text3D>

        </mesh>
    )
}

export default IntroTextBody;