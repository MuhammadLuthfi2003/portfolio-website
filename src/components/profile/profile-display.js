import React from 'react';
import '../../styles/profile/profile-main-decorator.css';

// components
import ProfileHeader from './profile-header';

class ProfileDisplay extends React.Component {
    render() {
        return (
            <div className='profile-display'>
                <div className='profile-display-container'>

                    <ProfileHeader />

                    <div className="profile-content">
                        <p className="profile-content-title">Hi!, I'm Luthfi 👋</p>
                        <p className="profile-content-text">
                            I'm a passionate game programmer with experience in Unreal Engine, Unity, and Roblox Studio, specializing in User Interface, AI development and gameplay mechanics.  

                            I am eager to contribute technical expertise and creativity to a dynamic game development team.

                            I love creating unique and unforgettable experiences for players!
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}

export default ProfileDisplay;