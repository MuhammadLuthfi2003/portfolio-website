import React from 'react';
import '../styles/components/hover-card-decorator.css';

class HoverCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };

        this.press = this.press.bind(this);
        this.release = this.release.bind(this);
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
                className={`hover-card ${pressed ? 'pressed' : ''} ${className}`}
                onPointerDown={this.press}
                onPointerUp={this.release}
                onPointerCancel={this.release}
                onMouseLeave={this.release} // dragging off the card while held counts as release
            >
                {children}
            </div>
        )
    }
}

export default HoverCard;