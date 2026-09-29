import React from 'react';
import '../../styles/profile/profile-main-decorator.css';

// components
import ProfileHeader from './profile-header';
import ProfileContent from './profile-content';
import ProfileSeparator from './profile-separator';
import UsedTools from './profile-usedtools';

class ProfileDisplay extends React.Component {
    render() {
        return (
            <div className='profile-display'>
                <div className='profile-display-container'>

                    <ProfileHeader />
                    <ProfileContent />
                    <ProfileSeparator title="Tools I Commonly Use" count={5} maxCount={18} />
                    <UsedTools />
                </div>
            </div>
        )
    }
}

export default ProfileDisplay;