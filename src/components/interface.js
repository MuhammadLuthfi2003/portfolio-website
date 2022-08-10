import React from 'react';

//import texture
import jupiterTexture from '../images/jupiter-texture.png';
import marsTexture from '../images/mars_texture.jpg';
import neptuneTexture from '../images/neptune_texture.jpg';

//mini components to import
/*Name, DescText, Planets, CompletedName, CompletedPlanet, */ 
import CompletedName from '../components/home-components/completedName';
import CompletedPlanet from '../components/home-components/completedPlanet';
import LeftButton from './home-components/leftBtn';
import RightButton from './home-components/rightBtn';

const planetsData = [
    {
        texture: '',
        text: 'Muhammad Luthfi',
        subtext: 'Azzahra Rammadhani',
        link: '/',
        isPlanet: false,
        xOffset: -8,
    },
    {
        texture: jupiterTexture,
        text: 'About',
        subtext: 'Things About Me!',
        link: '/about',
        isPlanet: true,
        xOffset: -5,
    },
    {
        texture: marsTexture,
        text: 'Projects',
        subtext: 'A Collections of My Projects',
        link: '/projects',
        isPlanet: true,
        xOffset: -7,
    },
    {
        texture: neptuneTexture,
        text: 'Contact',
        subtext: 'All of My Social Media Contacts!',
        link: '/contact',
        isPlanet: true,
        xOffset: -7,
    }
]

class Interface extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 2, // change this to 0 back again 
            factor: 1,
            width: window.innerWidth,
        };

        this.rightIndex = this.rightIndex.bind(this);
        this.leftIndex = this.leftIndex.bind(this);
        this.setFactor = this.setFactor.bind(this);
        // this.updateDimensions = this.updateDimensions.bind(this);
        
    }

    rightIndex() {
        const currentIndex = this.currentIndex

        this.setState({currentIndex: currentIndex + 1});

        if(this.state.currentIndex === planetsData.length - 1) {
            this.setState({currentIndex: 0});
        }
    }

    leftIndex() {
        const currentIndex = this.currentIndex

        this.setState({currentIndex: currentIndex - 1});

        if(this.state.currentIndex < 0) {
            this.setState({currentIndex: planetsData.length - 1});
        }
    }

    updateDimensions = () => {
        this.setState({width: window.innerWidth});
        this.setFactor();
    }

    setFactor() {
        if (this.state.width < 576) {
            this.setState({factor: 0.4});

        } else if (this.state.width < 768) {
            this.setState({factor: 0.6});

        } else if (this.state.width < 992) {
            this.setState({factor: 0.7});

        } else if (this.state.width < 1200) {
            this.setState({factor: 0.8});

        } else if (this.state.width > 1200) {
            this.setState({factor: 1});
        }
    }

    componentWillMount() {
        this.updateDimensions();

    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
      }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }

    render(){
        return(
            <div>
                <LeftButton leftIndex={this.leftIndex}/>
                <RightButton rightIndex={this.rightIndex}/>

                {
                    //find the index that is the same with the current index
                    planetsData.findIndex(planet => planet.isPlanet === this.state.currentIndex )  
                    ?
                    <CompletedPlanet {...planetsData[this.state.currentIndex]} factor={this.state.factor} rightIndex={this.rightIndex} leftIndex={this.leftIndex} currentIndex={this.state.currentIndex} planetsData={planetsData}/>
                    :
                    <CompletedName factor={this.state.factor} xOffset={planetsData[this.state.currentIndex].xOffset} firstName='Muhammad Luthfi' lastName='Azzahra Rammadhani' description='An Aspiring Software Engineering Student In Universitas Gadjah Mada'/>
                }
                
            </div>  
        );
    }
}


export default Interface;