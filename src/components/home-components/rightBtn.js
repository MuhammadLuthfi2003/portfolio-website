import React from 'react';

function RightButton({rightIndex}) {
    return (
        <button className='arrowBtn icon-right' onClick={rightIndex}>
            <span className='arrowBtn-right'>&#5125;</span>
        </button>
    )
}

export default RightButton;