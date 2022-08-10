import React from 'react';

//import desctext component
import DescText from './descText';
// import name component
import Name from './name';

function CompletedName({leftIndex, rightIndex, firstName, lastName, description, factor, xOffset}) {
    return (
        <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    <button className='arrowBtn icon-left' onClick={leftIndex}>
                        <span className='arrowBtn-left'>&#5130;</span>
                    </button>
                    
                    <Name firstName={firstName} lastName={lastName} factor={factor} xOffset={xOffset}/>

                    <button className='arrowBtn icon-right' onClick={rightIndex}>
                        <span className='arrowBtn-right'>&#5125;</span>
                    </button>
                </div>
            </div>
            <DescText subtext={description}/>
        </div>
    </div>
    )
}

export default CompletedName;