import React from 'react';
import '../styles/main-decorator.css';

// Components
import BarcodeSpacer from '../components/barcode-spacer';
import HomeDisplay from '../components/home/home-display';
import ProfileDisplay from '../components/profile/profile-display';
import ExperienceDisplay from '../components/experience/experience-display';


class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                    <div className='content'>
                        <HomeDisplay />
                        <BarcodeSpacer />
                        <ProfileDisplay />
                        <BarcodeSpacer />
                        <ExperienceDisplay />
                    </div>
            </div>
        )
    }
}

export default Home;