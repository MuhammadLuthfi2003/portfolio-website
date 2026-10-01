import React from 'react';
import '../../styles/project/project-content-decorator.css';

import ProjectCard from '../project-card';

// import ganyangImage from '../../images/projects/Ganyang Setan Alas.png';

// Add new projects here. Every entry in `tools` becomes a filter tag automatically.
const projects = [
    {
        id: 1,
        image: null, // ganyangImage
        title: 'Ganyang Setan Alas! The Game',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ipsum sed odio fermentum faucibus ut ac quam. Duis lacus augue,',
        tools: ['Unreal Engine'],
        link: '#',
    },
    {
        id: 2,
        image: null,
        title: 'Project Two',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ipsum sed odio fermentum faucibus ut ac quam. Duis lacus augue,',
        tools: ['Unity', 'C#'],
        link: '#',
    },
    {
        id: 3,
        image: null,
        title: 'Project Three',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ipsum sed odio fermentum faucibus ut ac quam. Duis lacus augue,',
        tools: ['Roblox Studio', 'Lua'],
        link: '#',
    },
        {
        id: 4,
        image: null,
        title: 'Project Four',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ipsum sed odio fermentum faucibus ut ac quam. Duis lacus augue,',
        tools: ['Unreal Engine'],
        link: '#',
    },
        {
        id: 5,
        image: null,
        title: 'Project Five',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ipsum sed odio fermentum faucibus ut ac quam. Duis lacus augue,',
        tools: ['Unity', 'C#'],
        link: '#',
    },
];

class ProjectContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTag: null, // null = show everything
            gridMaxHeight: null, // null = no limit (only one row)
        };

        this.gridRef = React.createRef();
        this.toggleTag = this.toggleTag.bind(this);
        this.measureGrid = this.measureGrid.bind(this);
    }

        componentDidMount() {
        this.measureGrid();
        window.addEventListener('resize', this.measureGrid);
    }

    componentDidUpdate() {
        this.measureGrid();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.measureGrid);
    }

    // if cards wrap onto a 2nd row, limit the grid to the height of 1 row
    measureGrid() {
        const grid = this.gridRef.current;
        if (!grid) return;

        const cards = Array.from(grid.children).filter(
            (el) => !el.classList.contains('project-empty')
        );

        let next = null;

        if (cards.length > 1) {
            const firstTop = cards[0].offsetTop;
            const hasSecondRow = cards.some((c) => c.offsetTop > firstTop);

            if (hasSecondRow) {
                const style = window.getComputedStyle(grid);
                const padding =
                    parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
                next = cards[0].offsetHeight + padding;
            }
        }

        if (next !== this.state.gridMaxHeight) {
            this.setState({ gridMaxHeight: next });
        }
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
                            <button
                                key={tag}
                                type="button"
                                className={`project-filter-tag ${activeTag === tag ? 'active' : ''}`}
                                aria-pressed={activeTag === tag}
                                onClick={() => this.toggleTag(tag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="project-grid"
                    ref={this.gridRef}
                    style={
                        this.state.gridMaxHeight
                            ? { maxHeight: this.state.gridMaxHeight }
                            : undefined
                    }
                >
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