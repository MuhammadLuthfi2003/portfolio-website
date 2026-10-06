import React from 'react';
import '../styles/components/typewriter-text-decorator.css';

class TypewriterText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,          // how many characters are currently shown
            typing: false,     // true while the interval is running (marker stops blinking)
        };

        this.ref = React.createRef();
        this.observer = null;
        this.timer = null;
        this.visible = false;

        this.handleIntersect = this.handleIntersect.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.tick = this.tick.bind(this);
    }

    // Array.from keeps emoji / surrogate pairs as one character
    getChars() {
        return Array.from(this.props.text || '');
    }

    prefersReducedMotion() {
        return (
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        );
    }

    componentDidMount() {
        // reduced motion: just show everything, no animation
        if (this.prefersReducedMotion()) {
            this.setState({ count: this.getChars().length });
            return;
        }

        this.observer = new IntersectionObserver(this.handleIntersect, {
            threshold: this.props.threshold,
        });
        this.observer.observe(this.ref.current);
    }

    componentDidUpdate(prevProps) {
        // new text -> start over (and play right away if it is on screen)
        if (prevProps.text !== this.props.text) {
            this.stop();
            this.setState({ count: 0 }, () => {
                if (this.visible) this.start();
            });
        }
    }

    componentWillUnmount() {
        this.stop();
        if (this.observer) this.observer.disconnect();
    }

    handleIntersect(entries) {
        const entry = entries[0];
        this.visible = entry.isIntersecting;

        if (entry.isIntersecting) {
            this.start();
        } else {
            this.stop();
            // left the viewing range: rewind so it can play again next time
            if (this.props.resetOnExit) this.setState({ count: 0 });
        }
    }

    start() {
        if (this.timer) return;
        if (this.state.count >= this.getChars().length) return; // already finished

        this.setState({ typing: true });
        this.timer = setInterval(this.tick, this.props.interval);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        this.setState({ typing: false });
    }

    tick() {
        const total = this.getChars().length;

        this.setState(
            (prev) => ({ count: Math.min(prev.count + 1, total) }),
            () => {
                if (this.state.count >= total) this.stop();
            }
        );
    }

    render() {
        const { text, className = '', marker = true } = this.props;
        const { count, typing } = this.state;

        const chars = this.getChars();
        const shown = chars.slice(0, count).join('');
        const rest = chars.slice(count).join('');

        return (
            <span
                ref={this.ref}
                className={`typewriter ${className}`}
                aria-label={text}
            >
                <span className='typewriter-shown' aria-hidden='true'>{shown}</span>
                {marker && (
                    <span
                        className={`typewriter-marker ${typing ? 'typing' : ''}`}
                        aria-hidden='true'
                    ></span>
                )}
                {/* not-yet-typed text keeps its space, so the layout never jumps */}
                <span className='typewriter-rest' aria-hidden='true'>{rest}</span>
            </span>
        );
    }
}

TypewriterText.defaultProps = {
    text: '',
    interval: 50,        // ms between each character
    resetOnExit: false,  // rewind to empty when scrolled out of view, so it replays
    threshold: 0.3,      // how much of the text must be visible (0 - 1) to start
    marker: true,        // show the marker after the last shown character
};

export default TypewriterText;