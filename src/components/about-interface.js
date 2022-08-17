import React from 'react';

import IntroText from './about-components/intro-text';

//import components
import Tools from './about-components/tools';
import Education from './about-components/education';
import Description from './about-components/description';
import ContactRedirect from './about-components/contact-redirect';


class AboutInterface extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className='about-container'>
                    <div className='about-header'>
                        <IntroText />
                    </div>
                    <div className='about-content'>
                        <div className='about-child description'>
                            <Description />
                            <Education />
                            <ContactRedirect />
                        </div>
                        <div className='about-child tools'>
                            <Tools />
                        </div>
                    </div>
            </div>
        )
    }
}

export default AboutInterface;