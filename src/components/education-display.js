import React from 'react';
import '../styles/components/education-display-decorator.css';

import TiltCard from './tilt-card';

class EducationDisplay extends React.Component {
    render() {
        const { order = 1, icon, college, major, gpa, year } = this.props;

        return (
            <TiltCard className='education-display'>
                <div className='education-display-container'>
                    <div className='education-order'>
                        <span className='education-order-text'># {order}</span>
                    </div>

                    <div className='education-icon'>
                        <img src={icon} alt={college + " Icon"} />
                    </div>

                    <div className='education-info'>
                        <span className='education-college'>{college}</span>
                        <div className='education-details'>
                            <span className='education-major'>{major}</span>
                            <span className='education-gpa'>GPA {gpa}</span>
                        </div>
                    </div>

                    <div className='education-year'>
                        <span className='education-year-text'>{year}</span>
                    </div>

                    <div className='education-stripes'></div>
                </div>
            </TiltCard>
        )
    }
}

export default EducationDisplay;