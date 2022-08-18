import React from 'react';

import VideoBG from '../components/video';
import '../styles/contact-decorator.css';
import ContactInterface from '../components/contact-interface';

class Contact extends React.Component {
    render(){
        return (
            <div>
                <VideoBG/>
                <div className='contact-content'>
                    <ContactInterface />
                </div>
            </div>
        )
    }
}

export default Contact