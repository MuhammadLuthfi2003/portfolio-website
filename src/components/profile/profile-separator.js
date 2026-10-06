import React from 'react';
import '../../styles/profile/profile-separator-decorator.css';

import TypewriterText from '../typewriter-text';

class ProfileSeparator extends React.Component {
    constructor(props) {
        super(props);

        const { count = 0 } = props;

        // index of the most recently activated box (the "head" of the lit group)
        this.state = { head: count - 1 };
        this.timer = null;
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        const { interval = 400, count = 0, maxCount = 20 } = this.props;

        // respect reduced motion: leave the boxes static
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) return;

        // nothing to slide if the row is empty or completely full
        if (count <= 0 || count >= maxCount) return;

        this.timer = setInterval(this.tick, interval);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    // activate the next box; after the last one it wraps to the first
    tick() {
        const { maxCount = 20 } = this.props;
        this.setState((prev) => ({ head: (prev.head + 1) % maxCount }));
    }

    render() {
        const { title, count = 0, maxCount = 20 } = this.props;
        const { head } = this.state;

        // box i is lit if it's within `count` steps behind the head (wrapping around)
        const isFilled = (i) => (head - i + maxCount) % maxCount < count;

        return (
            <div className="profile-separator">
                <span className="profile-separator-title">
                    <TypewriterText
                        className="typewriter-separator"
                        text={title}
                        interval={80}
                        resetOnExit
                        marker={false}
                    />
                </span>

                <div className="profile-separator-count">
                    {Array.from({ length: maxCount }, (_, i) => (
                        <span
                            key={i}
                            className={`profile-separator-box ${isFilled(i) ? 'filled' : ''}`}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProfileSeparator;