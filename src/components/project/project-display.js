import React from 'react';

import '../../styles/project/project-main-decorator.css';

// components
import ProjectHeader from './project-header';
import ProjectContent from './project-content';

class ProjectDisplay extends React.Component {
    render() {
        return (
            <div className='project-display' id='project-display'>
                <div className='project-display-container'>
                    <ProjectHeader angle={30}/>
                    <ProjectContent />
                </div>
            </div>
        )
    }
}

export default ProjectDisplay;