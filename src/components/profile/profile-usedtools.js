import React from 'react';
import '../../styles/profile/profile-usedtools-decorator.css';

import csharpIcon from '../../images/logos/CS Icon.png';
import unrealIcon from '../../images/logos/UE Icon.png';
import unityIcon from '../../images/logos/Unity Icon.png';
import robloxIcon from '../../images/logos/Roblox Studio Icon.png';
import luaIcon from '../../images/logos/Lua Icon.png';

import HorizontalDisplay from '../horizontal-display';

class UsedTools extends React.Component {
    render() {

        const toDisplay = [
            { order: 1, image: csharpIcon, title: "C#" },
            { order: 2, image: unrealIcon, title: "Unreal Engine" },
            { order: 3, image: unityIcon, title: "Unity" },
            { order: 4, image: robloxIcon, title: "Roblox Studio" },
            { order: 5, image: luaIcon, title: "Lua" }
        ];

        return (
            <div className="used-tools">
                {toDisplay.map((tool) => (
                    <HorizontalDisplay
                        key={tool.order}
                        order={tool.order}
                        image={tool.image}
                        title={tool.title}
                    />
                ))}
            </div>
        )
    }
}

export default UsedTools;