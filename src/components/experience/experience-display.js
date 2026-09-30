import React from 'react';
import '../../styles/experience/experience-main-decorator.css';

// components
import ExperienceHeader from './experience-header';

class ExperienceDisplay extends React.Component {
    render() {
        return (
            <div className='experience-display'>
                <div className='experience-display-container'>
                    <ExperienceHeader />
                </div>
            </div>
        )
    }
}

export default ExperienceDisplay;