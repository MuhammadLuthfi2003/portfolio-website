import React from 'react';
import "../../styles/timeline/timeline-separator-decorator.css";

import TypewriterText from '../typewriter-text';

class TimelineSeparator extends React.Component {
    render() {
        const { year, count = 0, maxCount = 12 } = this.props;

        return (
            <div className="timeline-separator">
                <span className="timeline-separator-year">
                    <TypewriterText
                        className="typewriter-timeline"
                        text={year}
                        interval={80}
                        resetOnExit
                        marker={false}
                    />
                </span>

                <div className="timeline-separator-count">
                    {Array.from({ length: maxCount }, (_, i) => (
                        <span
                            key={i}
                            className={`timeline-separator-box ${i < count ? 'filled' : ''}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default TimelineSeparator;