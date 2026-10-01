import React from 'react';
import '../styles/components/tilt-card-decorator.css';

class TiltCard extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.handleMove = this.handleMove.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
    }

    // turn the cursor position into -1..1 on both axes (0 = center)
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
    }

    render() {
        const { className = '', children } = this.props;

        return (
            <div
                ref={this.ref}
                className={`tilt-card ${className}`}
                onMouseMove={this.handleMove}
                onMouseLeave={this.handleLeave}
            >
                {children}
            </div>
        );
    }
}

export default TiltCard;