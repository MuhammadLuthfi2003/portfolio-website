import React from 'react';

function DescText({subtext}) {
    return (
        <div className='subtext-container'>
            <marquee className='subtext'>{subtext}</marquee>
        </div>
    )
}

export default DescText;