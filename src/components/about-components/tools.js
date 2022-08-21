import React from 'react';

import ToolComponent from './tool-component';

const tool = [
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/html5/html5-original.svg',
        desctxt: 'HTML',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/css3/css3-original.svg',
        desctxt: 'CSS',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/javascript/javascript-plain.svg',
        desctxt: 'Javascript',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/bootstrap/bootstrap-original.svg',
        desctxt: 'Bootstrap',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/react/react-original.svg',
        desctxt: 'React',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-original.svg',
        desctxt: 'NodeJS',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/php/php-plain.svg',
        desctxt: 'PHP',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/python/python-original.svg',
        desctxt: 'Python',
    },
    {
        img: 'https://github.com/devicons/devicon/raw/master/icons/java/java-original.svg',
        desctxt: 'Java',
    },
    {
        img: 'https://camo.githubusercontent.com/a0a62bf6fd20c3387a0b0ed1e367a69d64c554172b704fd3b396f9af527e06ab/68747470733a2f2f7374617469632e63646e6c6f676f2e636f6d2f6c6f676f732f632f32372f632e737667',
        desctxt: 'C#',
    },
]

const unity = {
    img: 'https://camo.githubusercontent.com/606a8425d12feec74a1149e0fb1378f067c37d9c6ed18d7d52e7799103a50538/68747470733a2f2f696d672e696e666f726d65722e636f6d2f69636f6e735f6d61632f706e672f3132382f3537392f3537393330332e706e67',
    desctxt: 'Unity',
}

function UnityComponent() {
    return (
        <div className='tool-component'>
            <img src={unity.img} alt={unity.desctxt} className='tool-icon-unity'/>
            <span className='tool-text'>{unity.desctxt}</span>
        </div>
    )
}

function Tools() {
    return (
        <div className='tool-container'>
            <div className='tools-header'>
                <span className='tools-title'>Tools I Use ⚒️</span>
            </div>
            <div className='tools-content'>
                {
                    tool.map((item, index) => {return <ToolComponent {...item} key={index}/>})
                }
                {/*For some reason, if i map unity, the picture gets weird, so i split it  */}
                <UnityComponent />
            </div>
        </div>
    )
}

export default Tools;
