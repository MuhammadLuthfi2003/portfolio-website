import React from 'react';

function LeftButton({leftIndex}) {
    return (
        <button className='arrowBtn icon-left' onClick={leftIndex} data-carousel-button>
            <span className='arrowBtn-left'>&#5130;</span>
        </button>
    )
}

export default LeftButton;