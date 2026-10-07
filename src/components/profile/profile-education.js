import React from "react";
import "../../styles/profile/profile-education-decorator.css";

import EducationDisplay from '../education-display';
import capIcon from '../../images/icons/graduation cap.png';

class ProfileEducation extends React.Component {
    render() {
        return (
            <div className="profile-education">
                <EducationDisplay
                    order={1}
                    icon={capIcon}
                    college="Gadjah Mada University"
                    major="Software Engineering"
                    gpa="3.89"
                    year="2021 - 2025"
                />
            </div>
        )
    }
}

export default ProfileEducation;