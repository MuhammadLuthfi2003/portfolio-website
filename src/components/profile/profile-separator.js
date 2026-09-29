import React from 'react';
import '../../styles/profile/profile-separator-decorator.css';

class ProfileSeparator extends React.Component {
    render() {
        const { title, count, maxCount = 20 } = this.props;

        return (
            <div className="profile-separator">
                <span className="profile-separator-title">{title}</span>

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