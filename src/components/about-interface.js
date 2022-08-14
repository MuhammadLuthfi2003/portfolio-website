import React from 'react';
import profpic from '../images/profpic.png';
import { useSpring, animated } from 'react-spring';


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
                        <img src={profpic} alt='my profile'/>
                        <div className='about-header-text'>
                            <span className='intro-text'>Hello, My Name is</span>


                        </div>
                    </div>
                    <div className='about-content'>

                    </div>
            </div>
        )
    }
}

export default AboutInterface;