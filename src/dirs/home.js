import React from 'react';
import '../styles/main-decorator.css';

import Interface from '../components/interface';
import VideoBG from '../components/video';

class Home extends React.Component {
    render() {
        return (
            <div>
                <VideoBG />
                <div class='content'>
                    <Interface />
                </div>
            </div>
        )
    }
}

export default Home;