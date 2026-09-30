import React from 'react';

import '../../styles/project/project-header-decorator.css';

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
    render() {
        const { count = 4, maxCount = 12, angle = 40, thickness = 16 } = this.props;

        return (
            <div className='project-header'>
                {/* Left cell: green label */}
                <div className='project-header-left'>
                    <span className='project-header-label'>&gt; Projects</span>
                </div>

                {/* Right cell: corner brackets + chevron progress */}
                <div className='project-header-right'>
                    <span className='project-header-corner tl'></span>
                    <span className='project-header-corner tr'></span>
                    <span className='project-header-corner bl'></span>
                    <span className='project-header-corner br'></span>

                    <div className='project-chevrons'>
                        {Array.from({ length: maxCount }, (_, i) => (
                            <Chevron key={i} filled={i < count} angle={angle} thickness={thickness} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectHeader;