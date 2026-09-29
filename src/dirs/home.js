import React from 'react';
import '../styles/main-decorator.css';

// Components
import BarcodeSpacer from '../components/barcode-spacer';
import HomeDisplay from '../components/home/home-display';
import ProfileDisplay from '../components/profile/profile-display';


class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                    <div className='content'>
                        <HomeDisplay />
                        <BarcodeSpacer />
                        <ProfileDisplay />
                    </div>
            </div>
        )
    }
}

export default Home;