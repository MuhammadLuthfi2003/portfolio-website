import React from 'react';
import '../styles/main-decorator.css';

// Components
import BarcodeSpacer from '../components/barcode-spacer';
import HomeDisplay from '../components/home/home-display';


class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                    <div className='content'>
                        <HomeDisplay />
                        <BarcodeSpacer />
                    </div>
            </div>
        )
    }
}

export default Home;