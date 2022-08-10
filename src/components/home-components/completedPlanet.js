import React from 'react';

import DescText from './descText';
import Planets from './planet';



function CompletedPlanet({factor,rightIndex,leftIndex,currentIndex, planetsData}) {
    return (
    <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    <button className='arrowBtn icon-left' onClick={leftIndex}>
                        <span className='arrowBtn-left'>&#5130;</span>
                    </button>
                    
                    <Planets {...planetsData[currentIndex]} factor={factor}/>

                    <button className='arrowBtn icon-right' onClick={rightIndex}>
                        <span className='arrowBtn-right'>&#5125;</span>
                    </button>
                </div>
            </div>
            <DescText {...planetsData[currentIndex]}/>
        </div>
    </div>
    )
}

export default CompletedPlanet;