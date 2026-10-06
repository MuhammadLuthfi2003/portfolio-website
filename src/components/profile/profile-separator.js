import React from 'react';
import '../../styles/profile/profile-separator-decorator.css';

import TypewriterText from '../typewriter-text';

class ProfileSeparator extends React.Component {
    render() {
        const { title, count, maxCount = 20, interval = 80 } = this.props;

        return (
            <div className="profile-separator">
                <span className="profile-separator-title">
                    <TypewriterText
                        className="typewriter-separator"
                        text={title}
                        interval={interval}
                        resetOnExit
                        marker={false}
                    />
                </span>

                <div className="profile-separator-count">
                    {Array.from({ length: maxCount }, (_, i) => (
                        <span
                            key={i}
                            className={`profile-separator-box ${i < count ? 'filled' : ''}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProfileSeparator;