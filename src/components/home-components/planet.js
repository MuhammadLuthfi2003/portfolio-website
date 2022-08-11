import React, { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import {Sphere, PresentationControls} from '@react-three/drei';
import {TextureLoader} from 'three/src/loaders/TextureLoader';

function redirect(link) {
    window.location.href = link;
}

function Planet({texture,link,factor}) {
    const colorMap = useLoader(TextureLoader, texture);

    const mesh = useRef();
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => (mesh.current.rotation.z += 0.01))

    return (
        <mesh 
        ref={mesh} 
        scale={active ? 1.2 : 1}
        onClick={() => {
            setActive(!active)
            setTimeout(() => {redirect(link)}, 500)
        }}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        >
            <ambientLight intensity={0.5}/>
            <directionalLight intensity={0.5} position={[-2,4,2]}/>

            <PresentationControls 
            cursor={true}
            speed={2}
            polar={[-Infinity, Infinity]}
            azimuth={[-Infinity, Infinity]}
            >
                <Sphere args={[(2.5 * factor),32,32]} >
                    <meshStandardMaterial map={colorMap} emmisive={hover ? 'white' : 'black'} attach='material' />
                </Sphere>
            </PresentationControls>
        </mesh>
    )
}

export default Planet;