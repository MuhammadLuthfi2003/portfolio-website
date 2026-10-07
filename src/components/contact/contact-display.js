import React from 'react';

import '../../styles/contact/contact-main-decorator.css';

import ContactHeader from './contact-header';
import ContactContent from './contact-content';

class ContactDisplay extends React.Component {
    render() {
        return (
            <div className='contact-display' id='contact-display'>
                <div className='contact-display-container'>
                    <ContactHeader />
                    <ContactContent />
                </div>
            </div>
        )
    }
}

export default ContactDisplay;