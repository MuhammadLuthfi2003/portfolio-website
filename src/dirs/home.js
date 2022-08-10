import React, {Suspense} from 'react';
import '../styles/main-decorator.css';

import Interface from '../components/interface';
import VideoBG from '../components/video';
import LoadingScreen from '../components/loadingscreen';

class Home extends React.Component {
    render() {
        return (
            <div>
                <VideoBG />
                <Suspense fallback={LoadingScreen}>
                    <div class='content'>
                        <Interface />
                    </div>
                </Suspense>
            </div>
        )
    }
}

export default Home;