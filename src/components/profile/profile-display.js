import React from 'react';
import '../../styles/profile/profile-main-decorator.css';

// components
import ProfileHeader from './profile-header';
import ProfileContent from './profile-content';
import ProfileSeparator from './profile-separator';
import UsedTools from './profile-usedtools';
import ProfileCertifications from './profile-certifications';
import ProfileAwards from './profile-awards';

class ProfileDisplay extends React.Component {
    render() {
        return (
            <div className='profile-display'>
                <div className='profile-display-container'>

                    <ProfileHeader />
                    <ProfileContent />
                    <ProfileSeparator title="Tools I Commonly Use" count={5} maxCount={18} />
                    <UsedTools />
                    <ProfileSeparator title="Education" count={15} maxCount={22} />
                    <ProfileSeparator title="Certifications" count={10} maxCount={22} />
                    <ProfileCertifications />
                    <ProfileSeparator title="Awards" count={2} maxCount={25} />
                    <ProfileAwards />
                </div>
            </div>
        )
    }
}

export default ProfileDisplay;