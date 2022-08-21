import React from 'react';



function ProjectCard({img, link, title, description}) {
    return (
        <div className='project'>
            <div className='card-img'>
                <img src={img} alt={title} />
            </div>
            <div className='card-title'>
                {title}
            </div>
            <div className='card-description'>
                {description}
            </div>
            <div className='card-footer'>
                <a href={link} target='_blank' rel='noopener noreferrer' className='card-btn'>
                    Go To Repository
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;