import React from 'react';
import '../../styles/timeline/timeline-entry-decorator.css';

import TiltCard from '../tilt-card';
import PressButton from '../press-button';

class TimelineEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prev) => ({ open: !prev.open }));
    }

    render() {
        const { title, company, date, description, toolsUsed = [] } = this.props;
        const { open } = this.state;

        return (
            <div className="timeline-entry">
                {/* green ">" marker that sits on the timeline line */}
                <div className="timeline-entry-rail">
                    <div className="timeline-entry-marker">
                        <span className="timeline-entry-marker-corner tl"></span>
                        <span className="timeline-entry-marker-corner tr"></span>
                        <span className="timeline-entry-marker-corner bl"></span>
                        <span className="timeline-entry-marker-corner br"></span>
                        <span className="timeline-entry-marker-icon">&gt;</span>
                    </div>
                </div>

                <TiltCard className={`timeline-entry-card ${open ? 'open' : ''}`}>
                    <div className="timeline-entry-header">
                        <div className="timeline-entry-stripes"></div>

                        <div className="timeline-entry-info">
                            <span className="timeline-entry-title">{title}</span>
                            <span className="timeline-entry-company">{company}</span>
                            <span className="timeline-entry-date">{date}</span>
                        </div>

                        {/* <button
                            className="timeline-entry-toggle"
                            onClick={this.toggle}
                            aria-expanded={open}
                            aria-label={open ? 'Hide details' : 'Show details'}
                        >
                            <span className="timeline-entry-chevron"></span>
                        </button> */}
                        <PressButton
                            bare
                            scale={0.85}
                            className="timeline-entry-toggle"
                            onClick={this.toggle}
                            aria-expanded={open}
                            aria-label={open ? 'Hide details' : 'Show details'}
                        >
                            <span className="timeline-entry-chevron"></span>
                        </PressButton>
                    </div>

                    {/* collapsible description */}
                    <div className="timeline-entry-body">
                        <div className="timeline-entry-body-inner">
                            <p className="timeline-entry-description">{description}</p>
                            <p className="timeline-entry-tools">
                                &gt; Tools Used : {toolsUsed.join(', ')}
                            </p>
                        </div>
                    </div>
                </TiltCard>
            </div>
        );
    }
}

export default TimelineEntry;