import React from 'react';
import '../../styles/experience/experience-main-decorator.css';

// components
import ExperienceHeader from './experience-header';
import ExperienceTimeline from './experience-timeline';

class ExperienceDisplay extends React.Component {
    render() {
        return (
            <div className='experience-display' id='experience-display'>
                <div className='experience-display-container'>
                    <ExperienceHeader />
                    <ExperienceTimeline />
                </div>
            </div>
        )
    }
}

export default ExperienceDisplay;