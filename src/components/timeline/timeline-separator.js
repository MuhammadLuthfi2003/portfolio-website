import React from 'react';
import "../../styles/timeline/timeline-separator-decorator.css";

class TimelineSeparator extends React.Component {
    render() {
        const { year, count = 0, maxCount = 12 } = this.props;

        return (
            <div className="timeline-separator">
                <span className="timeline-separator-year">{year}</span>

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