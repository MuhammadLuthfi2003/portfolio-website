import React from 'react';
import '../styles/about-decorator.css';
import AboutInterface from '../components/about-interface';
import VideoBG from '../components/video';
class About extends React.Component {
    render(){
        return (
            <div>
                <div className='contents'>
                    <AboutInterface />
                </div>
            </div>
        )
    }
}

export default About