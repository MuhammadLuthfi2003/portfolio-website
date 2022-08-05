import React from 'react';
import '../styles/videoBG-decorator.css';
import video from '../videos/Space_Loop.mp4';


function VideoBG() {
    return (
            <video autoPlay loop muted id='video-bg'>
                <source src={video} type="video/mp4" />
            </video>
    )
}

export default VideoBG;