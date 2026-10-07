import React from 'react';

import '../../styles/profile/profile-content-decorator.css';

class ProfileContent extends React.Component {
    render() {
        return (
            <div className="profile-content">
                <p className="profile-content-title">Hi!, I'm Luthfi 👋</p>
                <p className="profile-content-text">
                    I'm a passionate game programmer with experience in Unreal Engine, Unity, and Roblox Studio, specializing in User Interface, AI development and gameplay mechanics.  
                </p>
                <p className="profile-content-text">
                    I am eager to contribute technical expertise and creativity to a dynamic game development team.
                </p>
                <p className="profile-content-text">
                    I love creating unique and unforgettable experiences for players!
                </p>
            </div>
        )
    }
}

export default ProfileContent;