import React from 'react';

import IntroText from './about-components/intro-text';


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

                    </div>
            </div>
        )
    }
}

export default AboutInterface;