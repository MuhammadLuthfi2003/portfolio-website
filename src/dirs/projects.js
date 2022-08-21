import React from 'react';
import VideoBG from '../components/video';
import ProjectInterface from '../components/project-interface';

import '../styles/project-decorator.css';

class Projects extends React.Component {
    render(){
        return (
            <div>
                <VideoBG />
                <div className='project-container'>
                    <ProjectInterface />
                </div>
            </div>
        )
    }
}

export default Projects