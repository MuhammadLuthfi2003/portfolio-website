import React from 'react';
import '../styles/components/tilt-card-decorator.css';

class TiltCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };
        this.ref = React.createRef();

        this.handleMove = this.handleMove.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.press = this.press.bind(this);
        this.release = this.release.bind(this);
    }

    handleMove(e) {
        const el = this.ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        el.style.setProperty('--tilt-x', x.toFixed(3));
        el.style.setProperty('--tilt-y', y.toFixed(3));
    }

    handleLeave() {
        const el = this.ref.current;
        if (!el) return;

        el.style.setProperty('--tilt-x', 0);
        el.style.setProperty('--tilt-y', 0);
        this.release(); // dragging off the card while held counts as release
    }

    press() {
        this.setState({ pressed: true });
    }

    release() {
        this.setState({ pressed: false });
    }

    render() {
        const { className = '', children } = this.props;
        const { pressed } = this.state;

        return (
            <div
                ref={this.ref}
                className={`tilt-card ${pressed ? 'pressed' : ''} ${className}`}
                onMouseMove={this.handleMove}
                onMouseLeave={this.handleLeave}
                onPointerDown={this.press}
                onPointerUp={this.release}
                onPointerCancel={this.release}
            >
                {children}
            </div>
        );
    }
}

export default TiltCard;