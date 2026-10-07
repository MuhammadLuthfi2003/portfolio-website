import React from 'react';
import '../../styles/project/project-content-decorator.css';

import ProjectCard from '../project-card';
import PressButton from '../press-button';

import ganyangImage from '../../images/projects/Ganyang.png';
import pindere from '../../images/projects/Pindere.png';
import rags from '../../images/projects/Rags Of Racs.png';
import cyr from '../../images/projects/Clean Your Room.png';
import brainrot from '../../images/projects/Brainrot Claw Machine.png';

// Add new projects here. Every entry in `tools` becomes a filter tag automatically.
const projects = [
    {
        id: 1,
        image: ganyangImage,
        title: 'Ganyang Setan Alas! The Game',
        description: 'Ganyang Setan Alas! The Game! is an action shooter and on-rails shooter adapted from the film Setan Alas! directed by Yusron Fuadi and Anindita Suryarasmi. In this game, players must survive the oncoming zombie attacks by shooting them with various weapons provided across 3 chapters',
        tools: ['Unreal Engine'],
        link: 'https://store.steampowered.com/app/3351730/Ganyang_Setan_Alas_The_Game/',
    },
    {
        id: 2,
        image: rags,
        title: 'Rags Of Racs',
        description: 'Rags Of Racs is an action roguelike where players must progress through the arduously long convenience store to get the ultimate cake. Players must collect resources and protect the trolley from incoming enemies and danger within.',
        tools: ['Unity', 'C#'],
        link: 'https://dhelangan.itch.io/ragsofracs',
    },
    {
        id: 3,
        image: pindere,
        title: 'Pindere',
        description: 'Pindere is a Roguelike where players must achieve a certain score on the level by playing pinball with multipliers stacked on it. While playing, players will be disturbed by the girlfriend beside him that wants him so badly to stop playing the addicting pinball.',
        tools: ['Unity', 'C#'],
        link: 'https://dhelangan.itch.io/pindere',
    },
        {
        id: 4,
        image: cyr,
        title: 'Clean Your Room Before Mom Comes Home',
        description: 'Clean Your Room Before Mom Comes Home is a fun and engaging game where players must tidy up their room before their mom comes home. Players must rearrange objects, wipe stains and clean up the floors in their room before mom comes home to check on them.',
        tools: ['Roblox Studio', 'Lua'],
        link: 'https://www.roblox.com/games/85081695804302/Clean-Your-Room-before-Mom-Comes-Home',
    },
        {
        id: 5,
        image: brainrot,
        title: 'Brainrot Claw Machine',
        description: 'Brainrot Claw Machine is an incremental simulator game where players catch brainrot in the claw machine provided on the map and then put them on display to earn more money. The money generated from brainrots is then used to catch more rarer brainrots on the map, upgrade candy machine which levels up brainrot, or level up their own personal claw machine.',
        tools: ['Roblox Studio', 'Lua'],
        link: 'https://www.roblox.com/games/85068532902439/Brainrot-Claw-Machine',
    },
];

class ProjectContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTag: null, // null = show everything
        };

        this.toggleTag = this.toggleTag.bind(this);
    }

    // clicking the active tag again clears the filter
    toggleTag(tag) {
        this.setState((prev) => ({
            activeTag: prev.activeTag === tag ? null : tag,
        }));
    }

    // unique tags from all projects, in order of first appearance
    getTags() {
        const tags = [];
        projects.forEach((project) => {
            project.tools.forEach((tool) => {
                if (!tags.includes(tool)) tags.push(tool);
            });
        });
        return tags;
    }

    render() {
        const { activeTag } = this.state;
        
        const tags = this.getTags();
        const visibleProjects = activeTag
            ? projects.filter((project) => project.tools.includes(activeTag))
            : projects;

        return (
            <div className="project-content">
                <div className="project-filter">
                    <span className="project-filter-label">Filter:</span>

                    <div className="project-filter-tags">
                        {tags.map((tag) => (
                            <PressButton
                                key={tag}
                                bare
                                scale={0.9}
                                className={`project-filter-tag ${activeTag === tag ? 'active' : ''}`}
                                aria-pressed={activeTag === tag}
                                onClick={() => this.toggleTag(tag)}
                            >
                                {tag}
                            </PressButton>
                        ))}
                    </div>
                </div>

                <div className="project-grid">
                    {visibleProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tools={project.tools}
                            link={project.link}
                        />
                    ))}

                    {visibleProjects.length === 0 && (
                        <p className="project-empty">No projects use this tool yet.</p>
                    )}
                </div>
            </div>
        )
    }
}

export default ProjectContent;