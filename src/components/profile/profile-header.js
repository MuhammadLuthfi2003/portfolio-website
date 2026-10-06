import React from 'react';
import '../../styles/profile/profile-header-decorator.css';

import TypewriterText from '../typewriter-text';

class ProfileHeader extends React.Component {
    render() {
        return (
            <div className="profile-header">
                {/* Left cell: green label */}
                <div className="profile-header-left">
                    <span className="profile-header-label">
                        <TypewriterText
                            className="typewriter-profile"
                            text="&gt; Profile"
                            interval={80}
                            resetOnExit
                            marker={false}
                        />
                    </span>
                </div>

                {/* Right cell: barcode + plus marker */}
                <div className="profile-header-right">
                    <span className="profile-barcode">PROFILE</span>

                    <div className="profile-marker">
                        <span className="profile-marker-corner tl"></span>
                        <span className="profile-marker-corner tr"></span>
                        <span className="profile-marker-corner bl"></span>
                        <span className="profile-marker-corner br"></span>
                        <span className="profile-marker-plus"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileHeader;