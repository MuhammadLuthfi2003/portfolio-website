import React from 'react';

//import desctext component
import DescText from './descText';
// import name component
import Name from './name';

function CompletedName({firstName, lastName, description, factor, xOffset}) {
    return (
        <div>
        <div className='interface-container'>
            <div className='planets-container'>
                <div className='planets'>
                    
                    <Name firstName={firstName} lastName={lastName} factor={factor} xOffset={xOffset}/>

                </div>
            </div>
            <DescText subtext={description}/>
        </div>
    </div>
    )
}

export default CompletedName;