import React from "react";
import "../../styles/profile/profile-awards-decorator.css";

import VerticalDisplay from "../vertical-display";

import GameseedIcon from "../../images/logos/Gameseed Icon.png";

class ProfileAwards extends React.Component {
    render() {
        const awards = [
            {
                order: 1,
                image: GameseedIcon, 
                title: "Gameseed 2025 Top 40 Winner", 
                date: "2025", 
                buttonDesc: "View Certificate",
                link: "https://drive.google.com/file/d/16qxlqH8jTJjGhgtmNJCkIOOykTv2mUrO/view?usp=sharing",
            },
            {
                order: 2,
                image: GameseedIcon, 
                title: "Gameseed 2026 Top 20 Winner", 
                date: "2026", 
                buttonDesc: "View Certificate",
                link: "https://drive.google.com/file/d/16qxlqH8jTJjGhgtmNJCkIOOykTv2mUrO/view?usp=sharing",
            },
        ]
        return (
            <div className="profile-awards">
                {awards.map((award) => (
                    <VerticalDisplay
                        key={award.order}
                        order={award.order}
                        image={award.image}
                        title={award.title}
                        date={award.date}
                        buttonDesc={award.buttonDesc}
                        link={award.link}
                    />
                ))}
            </div>
        )
    }
}

export default ProfileAwards;