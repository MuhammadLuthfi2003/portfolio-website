import React from 'react';

import '../../styles/contact/contact-header-decorator.css';

class ContactHeader extends React.Component {
    render() {
        return (
            <div className='contact-header'>
                {/* Left: green label */}
                <div className='contact-header-left'>
                    <span className='contact-header-label'>&gt; Contact Me!</span>
                </div>

                {/* Right: green hazard stripes */}
                <div className='contact-header-right'>
                    <div className='contact-header-stripes'></div>
                </div>
            </div>
        )
    }
}

export default ContactHeader;