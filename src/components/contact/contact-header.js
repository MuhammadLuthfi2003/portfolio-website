import React from 'react';

import '../../styles/contact/contact-header-decorator.css';
import TypewriterText from '../typewriter-text';

class ContactHeader extends React.Component {
    render() {
        return (
            <div className='contact-header'>
                {/* Left: green label */}
                <div className='contact-header-left'>
                    <span className='contact-header-label'>
                        <TypewriterText
                            className="typewriter-contact"
                            text="&gt; Contact Me!"
                            interval={80}
                            resetOnExit
                            marker={false}
                        />
                    </span>
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