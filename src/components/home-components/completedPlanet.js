import React from 'react';

import DescText from './descText';
import Planets from './planet';



function CompletedPlanet({factor,currentIndex, planetsData}) {
    return (
    <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    
                    <Planets {...planetsData[currentIndex]} factor={factor}/>

                </div>
            </div>
            <DescText {...planetsData[currentIndex]}/>
        </div>
    </div>
    )
}

export default CompletedPlanet;