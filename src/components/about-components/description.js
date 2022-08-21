import React from 'react';

function Description() {
    return (
        <div className='description-container'>
            <div className='description-header'>
                <span className='description-title'>Some Facts About Me! 🔥</span>
            </div>
            <div className='description-content'>
                <ul className='point'>
                    <li className='point-child'> 
                        <span className='emoji'>🖥️</span>
                        <span className='point-content'>I am a Software Engineering Student</span> 
                    </li>
                    <li className='point-child'>
                        <span className='emoji'>🎓</span>
                        <span className='point-content'>Currently Studying In Universitas Gadjah Mada</span>
                    </li>
                    <li className='point-child'>
                        <span className='emoji'>🌐</span>
                        <span className='point-content'>I Mainly Focus In FrontEnd Web and Game Development</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Description;

