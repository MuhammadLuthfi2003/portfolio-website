import React from 'react';
import '../styles/main-decorator.css';

import CubeInterface from '../components/cube';
import VideoBG from '../components/video';

class Home extends React.Component {
    render() {
        return (
            <div>
                <VideoBG />\
                <div class='content'>
                    <CubeInterface />
                </div>
            </div>
        )
    }
}

export default Home;