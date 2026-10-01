import React from 'react';
import '../styles/components/press-button-decorator.css';

class PressButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pressed: false };

        this.press = this.press.bind(this);
        this.release = this.release.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    press() {
        this.setState({ pressed: true });
    }

    release() {
        this.setState({ pressed: false });
    }

    // keyboard users get the same squish on Enter / Space
    handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') this.press();
    }

    render() {
        const {
            children,
            icon,                 // optional image, e.g. your About Me Arrow
            link,                 // if set, renders an <a> instead of a <button>
            onClick,
            className = '',
            scale = 0.88,         // how small it gets while pressed
            bare = false,          // animation only, no default look
            ...rest                // aria-pressed, title, etc.
        } = this.props;
        const { pressed } = this.state;

        const shared = {
            ...rest,
            className: `press-button ${bare ? 'bare' : ''} ${pressed ? 'pressed' : ''} ${className}`,
            style: { '--press-scale': scale },
            onPointerDown: this.press,
            onPointerUp: this.release,
            onPointerLeave: this.release,
            onPointerCancel: this.release,
            onKeyDown: this.handleKeyDown,
            onKeyUp: this.release,
            onBlur: this.release,
        };

        const content = (
            <>
                <span className='press-button-text'>{children}</span>
                {icon && <img src={icon} className='press-button-icon' alt='' />}
            </>
        );

        if (link) {
            return (
                <a
                    {...shared}
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={onClick}
                >
                    {content}
                </a>
            );
        }

        return (
            <button {...shared} type='button' onClick={onClick}>
                {content}
            </button>
        );
    }
}

export default PressButton;