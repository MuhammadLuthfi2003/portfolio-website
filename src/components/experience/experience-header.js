import React from 'react';
import '../../styles/experience/experience-header-decorator.css';

class ExperienceHeader extends React.Component {
    render() {
        // which side of each marker gets the green bar
        const markers = ['right', 'bottom', 'left', 'top'];

        return (
            <div className="experience-header">
                {/* Left cell: green label */}
                <div className="experience-header-left">
                    <span className="experience-header-label">&gt; Experiences</span>
                </div>

                {/* Right cell: four bracketed markers */}
                <div className="experience-header-right">
                    {markers.map((side) => (
                        <div className="experience-marker" key={side}>
                            <span className="experience-marker-corner tl"></span>
                            <span className="experience-marker-corner tr"></span>
                            <span className="experience-marker-corner bl"></span>
                            <span className="experience-marker-corner br"></span>
                            <span className={`experience-marker-box ${side}`}></span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ExperienceHeader;