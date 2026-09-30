import React from "react";
import "../../styles/profile/profile-certifications-decorator.css";

import VerticalDisplay from "../vertical-display";

import UnityIcon from "../../images/logos/Unity Icon.png";

class ProfileCertifications extends React.Component {
    render() {
        const certifications = [
            {
                order: 1,
                image: UnityIcon, 
                title: "Unity Certified Associate: Programmer", 
                date: "August 2023", 
                buttonDesc: "View Certificate",
                link: "https://www.credly.com/badges/a1a19a3b-1cca-4bb6-9f71-9319ddc3c542/linked_in_profile",
            },
            {
                order: 2,
                image: UnityIcon, 
                title: "Unity Certified Associate: Game Developer", 
                date: "September 2024", 
                buttonDesc: "View Certificate",
                link: "https://www.credly.com/badges/56fe079c-e45c-4b56-aeec-b214470d139d/linked_in_profile",
            },
        ]
        return (
            <div className="profile-certifications">
                {certifications.map((cert) => (
                    <VerticalDisplay
                        key={cert.order}
                        order={cert.order}
                        image={cert.image}
                        title={cert.title}
                        date={cert.date}
                        buttonDesc={cert.buttonDesc}
                        link={cert.link}
                    />
                ))}
            </div>
        )
    }
}

export default ProfileCertifications;