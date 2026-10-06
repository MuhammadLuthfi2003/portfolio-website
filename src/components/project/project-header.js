import React from 'react';

import '../../styles/project/project-header-decorator.css';

import TypewriterText from '../typewriter-text';

// one chevron = two parallelograms (upper arm + lower arm)
// angle = how far the arms lean, in degrees from vertical
// (0 = straight vertical bars, ~40 = your current look, higher = flatter/sharper)
function Chevron({ filled, angle = 40, thickness = 16 }) {
    const H = 60;                       // total height
    const gap = 4;                      // space between upper and lower arm
    const armH = (H - gap) / 2;         // height of each arm
    const reach = armH * Math.tan((angle * Math.PI) / 180); // horizontal shift
    const W = thickness + reach;        // total width

    const upper = `0,0 ${thickness},0 ${W},${armH} ${reach},${armH}`;
    const lower = `${reach},${armH + gap} ${W},${armH + gap} ${thickness},${H} 0,${H}`;

    return (
        <svg
            className={`project-chevron ${filled ? 'filled' : ''}`}
            viewBox={`-2 -2 ${W + 4} ${H + 4}`}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <polygon points={upper} />
            <polygon points={lower} />
        </svg>
    );
}

class ProjectHeader extends React.Component {
    constructor(props) {
        super(props);

        const { count = 4 } = props;

        // index of the most recently activated chevron (the "head" of the lit group)
        this.state = { head: count - 1 };
        this.timer = null;
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const { interval = 400 } = this.props;

        // respect reduced motion: leave the chevrons static
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        this.timer = setInterval(this.tick, interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // activate the next chevron; after the last one it wraps to the first
    tick() {
        const { maxCount = 12 } = this.props;
        this.setState((prev) => ({ head: (prev.head + 1) % maxCount }));
    }

    render() {
        const { count = 4, maxCount = 12, angle = 40, thickness = 16 } = this.props;
        const { head } = this.state;

        // chevron i is lit if it's within `count` steps behind the head (wrapping around)
        const isFilled = (i) => (head - i + maxCount) % maxCount < count;

        return (
            <div className='project-header'>
                {/* Left cell: green label */}
                <div className='project-header-left'>
                    <span className='project-header-label'>
                        <TypewriterText
                            className="typewriter-project"
                            text="&gt; Projects"
                            interval={80}
                            resetOnExit
                            marker={false}
                        />
                    </span>
                </div>

                {/* Right cell: corner brackets + chevron progress */}
                <div className='project-header-right'>
                    <span className='project-header-corner tl'></span>
                    <span className='project-header-corner tr'></span>
                    <span className='project-header-corner bl'></span>
                    <span className='project-header-corner br'></span>

                    <div className='project-chevrons'>
                        {Array.from({ length: maxCount }, (_, i) => (
                            <Chevron key={i} filled={isFilled(i)} angle={angle} thickness={thickness} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectHeader;