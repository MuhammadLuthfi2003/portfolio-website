import React from 'react';
import '../../styles/experience/experience-header-decorator.css';

import TypewriterText from '../typewriter-text';

const MARKER_COUNT = 4;

class ExperienceHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // quarter-turns per marker; starts as right, bottom, left, top
            turns: Array.from({ length: MARKER_COUNT }, (_, i) => i),
            active: 0, // which marker hops next
        };
        this.timer = null;
    }

    componentDidMount() {
        const { interval = 800 } = this.props;

        // respect reduced motion: leave the bars where they are
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        this.timer = setInterval(() => {
            this.setState((prev) => {
                const turns = prev.turns.slice();
                turns[prev.active] += 1; // only ever goes up, so no backwards spin
                return {
                    turns,
                    active: (prev.active + 1) % MARKER_COUNT,
                };
            });
        }, interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const { turns } = this.state;

        return (
            <div className="experience-header">
                {/* Left cell: green label */}
                <div className="experience-header-left">
                    <span className="experience-header-label">
                        <TypewriterText 
                            text="&gt; Experiences"
                            className="typewriter-experience"
                            interval={80}
                            resetOnExit
                            marker={false}
                        />
                    </span>
                </div>

                {/* Right cell: four bracketed markers */}
                <div className="experience-header-right">
                    {turns.map((turn, i) => (
                        <div className="experience-marker" key={i}>
                            <span className="experience-marker-corner tl"></span>
                            <span className="experience-marker-corner tr"></span>
                            <span className="experience-marker-corner bl"></span>
                            <span className="experience-marker-corner br"></span>
                            <span
                                className="experience-marker-box"
                                style={{ '--turn': `${turn * 90}deg` }}
                            ></span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ExperienceHeader;