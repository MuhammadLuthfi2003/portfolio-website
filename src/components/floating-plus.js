import React from 'react';
import '../styles/components/floating-plus-decorator.css';

class FloatingPlus extends React.Component {
    render() {
        const {
            className = '',
            amplitude,          // px the plus rises/falls from its resting spot (e.g. 12)
            floatDuration,      // seconds per up/down cycle (smaller = faster)
            rotateDuration,     // seconds per full turn (smaller = faster)
            rotateDirection,    // 'cw' | 'ccw' | 'none'
            delay,              // seconds, desyncs the pluses from each other
            size,               // px, e.g. 40
            color,              // any CSS color, e.g. '#fff'
            style = {},
        } = this.props;

        const vars = {};

        if (amplitude !== undefined)      vars['--float-amplitude'] = `${amplitude}px`;
        if (floatDuration !== undefined)  vars['--float-duration']  = `${floatDuration}s`;
        if (rotateDuration !== undefined) vars['--rotate-duration'] = `${rotateDuration}s`;
        if (size !== undefined)           vars['--plus-size']       = `${size}px`;
        if (color !== undefined)          vars['--plus-color']      = color;

        if (rotateDirection !== undefined) {
            vars['--rotate-direction'] =
                rotateDirection === 'ccw' ? -1 : rotateDirection === 'none' ? 0 : 1;
        }

        if (delay !== undefined) {
            // negative delay = starts mid-cycle instead of waiting
            vars['--float-delay']  = `${-delay}s`;
            vars['--rotate-delay'] = `${-delay}s`;
        }

        return (
            <div
                className={`floating-plus ${className}`}
                style={{ ...vars, ...style }}
            />
        );
    }
}

export default FloatingPlus;