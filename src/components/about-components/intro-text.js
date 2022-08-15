import React, {useRef, useState} from 'react';
import {Canvas} from 'react-three-fiber';

import IntroTextBody from './intro-text-body';

function IntroText() {



    return (
        <div>
            <div className='txt-center'>
                <div className='txt-header'>
                    <span className='txt-header-text'>Hello!, My Name is:</span>
                </div>
                <div className='txt-body'>
                    <Canvas>
                        <IntroTextBody />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}


export default IntroText;