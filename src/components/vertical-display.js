import React from "react";
import "../styles/components/vertical-display-decorator.css";

import TiltCard from "../components/tilt-card";

import arrowIcon from "../images/icons/About Me Arrow.png";
import PressButton from "./press-button";

class VerticalDisplay extends React.Component {
    render() {
        const {order = 1, image, title, date, buttonDesc, link = "#"} = this.props;

        return (
            <TiltCard className="vertical-display">
                <div className="vertical-display-order">
                    <span className="vertical-display-order-text">#{order}</span>
                </div>

                <div className="vertical-display-image">
                    <img src={image} alt={title + " Icon"} />
                </div>

                <div className="vertical-display-info">
                    <span className="vertical-display-title">{title}</span>
                    <span className="vertical-display-date">{date}</span>
                </div>

                {/* <a
                    className="vertical-display-button"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="vertical-display-button-text">{buttonDesc}</span>
                    <img src={arrowIcon} className="vertical-display-button-arrow" alt="" />
                </a> */}
                <PressButton link={link} icon={arrowIcon}>{buttonDesc}</PressButton>
            </TiltCard>
        )
    }
}

export default VerticalDisplay;