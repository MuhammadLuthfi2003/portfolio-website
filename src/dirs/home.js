import React, {Suspense} from 'react';
import '../styles/main-decorator.css';

import Interface from '../components/interface';
import VideoBG from '../components/video';
import LoadingScreen from '../components/loadingscreen';
import HomeFooter from '../components/home-components/home-footer';

class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                <VideoBG />
                    <div class='content'>
                        <Interface />
                        <HomeFooter />
                    </div>
            </div>
        )
    }
}

export default Home;