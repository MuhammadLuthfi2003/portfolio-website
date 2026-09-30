import React from 'react';
import '../../styles/experience/experience-timeline-decorator.css';

import TimelineSeparator from '../timeline/timeline-separator';
import TimelineEntry from '../timeline/timeline-entry';

// One group = one separator + the entries under it
const timeline = [
    {
        year: 'Current',
        count: 0,
        maxCount: 0,
        entries: [
            {
                title: 'Game Programmer (Part-Time)',
                company: 'Dhelangan Studio',
                date: 'February 2025 - Current',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                toolsUsed: ['Unity', 'C#'],
            },
        ],
    },
    {
        year: '2026',
        count: 0,
        maxCount: 0,
        entries: [
            {
                title: 'Game Programmer',
                company: 'Digital Breeze Interactive',
                date: 'September 2025 - August 2026',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                toolsUsed: ['Roblox Studio', 'Lua'],
            },
        ],
    },
    {
        year: '2024',
        count: 0,
        maxCount: 0,
        entries: [
            {
                title: 'Lead Game Programmer',
                company: 'PT Pabrik Imaji Akasacara',
                date: 'January 2024 - December 2024',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                toolsUsed: ['Roblox Studio', 'Lua'],
            },
        ],
    },
    {
        year: '2023',
        count: 0,
        maxCount: 0,
        entries: [
            {
                title: 'Head Of GaM-Lab Division',
                company: 'Komunitas Mahasiswa TIK UGM',
                date: 'January 2023 - December 2023',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                toolsUsed: ['Unity', 'C#'],
            },
        ],
    },
];

class ExperienceTimeline extends React.Component {
    render() {
        return (
            <div className="experience-timeline">
                <div className="experience-timeline-container">
                    {timeline.map((group) => (
                        <React.Fragment key={group.year}>
                            <TimelineSeparator
                                year={group.year}
                                count={group.count}
                                maxCount={group.maxCount}
                            />
                            {group.entries.map((entry) => (
                                <TimelineEntry
                                    key={entry.title + entry.company}
                                    title={entry.title}
                                    company={entry.company}
                                    date={entry.date}
                                    description={entry.description}
                                    toolsUsed={entry.toolsUsed}
                                />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        );
    }
}

export default ExperienceTimeline;