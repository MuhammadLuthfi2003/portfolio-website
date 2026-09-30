import React from 'react';
import '../styles/project-card-decorator.css';

import arrowIcon from '../images/icons/About Me Arrow.png';

class ProjectCard extends React.Component {
    render() {
        const { image, title, description, tools = [], link = '#' } = this.props;

        return (
            <div className='project-card'>
                <div className='project-card-image'>
                    {image && <img src={image} alt={title + ' Thumbnail'} />}
                </div>

                <div className='project-card-title'>
                    <span className='project-card-title-text'>{title}</span>
                </div>

                <p className='project-card-description'>{description}</p>

                <p className='project-card-tools'>
                    &gt; Tools : {tools.join(', ')}
                </p>

                <div className='project-card-footer'>
                    <div className='project-card-stripes'></div>

                    <a
                        className='project-card-button'
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span className='project-card-button-text'>See More</span>
                        <img src={arrowIcon} className='project-card-button-arrow' alt='' />
                    </a>
                </div>
            </div>
        )
    }
}

export default ProjectCard;