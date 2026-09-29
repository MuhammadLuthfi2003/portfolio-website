import React from 'react';
import '../../styles/profile/profile-main-decorator.css';

// components
import ProfileHeader from './profile-header';
import ProfileContent from './profile-content';
import ProfileSeparator from './profile-separator';

class ProfileDisplay extends React.Component {
    render() {
        return (
            <div className='profile-display'>
                <div className='profile-display-container'>

                    <ProfileHeader />
                    <ProfileContent />
                    <ProfileSeparator title="Projects" count={5} maxCount={25} />
                </div>
            </div>
        )
    }
}

export default ProfileDisplay;