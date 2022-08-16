import React from 'react';

function ToolComponent({img, desctxt}) {
    return (
        <div className='tool-component'>
            <img src={img} alt={desctxt} className='tool-icon'/>
            <span className='tool-text'>{desctxt}</span>
        </div>
    )
}

export default ToolComponent;