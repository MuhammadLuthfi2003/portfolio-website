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
                description: "During my time at Dhelangan Studio, i have worked on several game jam projects, most notably, Rags Of Rags which reached top 20 in Gameseed 2026. For every project i've worked on, i always partnered closely with the team of artists and designers to ensure that the game mechanics and visuals were cohesive and engaging under tight time constraints.",
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
                description: "During my time at Digital Breeze Interactive, I've developed and maintained various roblox titles, including 'Brainrot Claw Machine' which reached 7M+ peak players. I've developed secure data pipelines, inventory, trading, gameplay mechanics and various system using Lua and Knit Framework in Roblox Studio.",
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
                description: 'During my time at PT Pabrik Imaji Akasacara, I have led a team of 4 programmers to develop a game adaptation for the film "Setan Alas!" titled "Ganyang Setan Alas! The Game" for the PC platform. I have also developed various gameplay mechanics, AI, and systems using Unreal Engine.',
                toolsUsed: ['Unreal Engine'],
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
                description: 'During my time as the Head of GaM-Lab Division (or Gamelab), I gave weekly workshops about game development to members of the division. On there, I also facilitated 4 teams to join a game competition on Gemastik XVI, representing UGM.',
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