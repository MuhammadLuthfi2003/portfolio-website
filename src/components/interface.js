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

//session storage key
const PLANET_KEY = 'currentPlanet';

const planetsData = [
    {
        texture: '',
        text: 'Muhammad Luthfi',
        subtext: 'Azzahra Rammadhani',
        link: '/',
        isPlanet: false,
        xOffset: -8,
        index: 0,
    },
    {
        texture: jupiterTexture,
        text: 'About',
        subtext: 'Things About Me!',
        link: '/about',
        isPlanet: true,
        xOffset: -5,
        index: 1,
    },
    {
        texture: marsTexture,
        text: 'Projects',
        subtext: 'A Collection of My Projects',
        link: '/project',
        isPlanet: true,
        xOffset: -7,
        index: 2,
    },
    {
        texture: neptuneTexture,
        text: 'Contact',
        subtext: 'All of My Social Media Contacts!',
        link: '/contact',
        isPlanet: true,
        xOffset: -7,
        index: 3,
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
        this.getCurrentIndex = this.getCurrentIndex.bind(this);
        this.setIndex = this.setIndex.bind(this);
        // this.updateDimensions = this.updateDimensions.bind(this);
        
    }

    rightIndex() {
        let currentIndex = this.state.currentIndex
        currentIndex++;

        if(currentIndex > planetsData.length - 1) {
            currentIndex = 0;
        }

        this.setState({currentIndex: currentIndex});
        this.setIndex(currentIndex)

        window.location.reload();

    }

    leftIndex() {
        let currentIndex = this.state.currentIndex
        currentIndex--;

        if(currentIndex < 0) {
            currentIndex = planetsData.length - 1
        }

        this.setState({currentIndex: currentIndex});
        this.setIndex(currentIndex);

        window.location.reload();
    }

    //function to load from local storage
    getCurrentIndex() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem(PLANET_KEY)) {
                this.setState({currentIndex: parseInt(localStorage.getItem(PLANET_KEY))});
            } else {
                localStorage.setItem(PLANET_KEY, this.state.currentIndex);
            }
        }
    }

    //function to set local storage
    setIndex(newIndex) {
        localStorage.setItem(PLANET_KEY, newIndex);
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
        this.getCurrentIndex();
    }

    componentDidMount() {
        this.getCurrentIndex();
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
                   planetsData.findIndex((planet) => planet.index === this.state.currentIndex) === 0 
                   ? <CompletedName factor={this.state.factor} xOffset={planetsData[this.state.currentIndex].xOffset} firstName='Muhammad Luthfi' lastName='Azzahra Rammadhani' description='An Aspiring Software Engineering Student In Universitas Gadjah Mada'/> 
                   : <CompletedPlanet {...planetsData[this.state.currentIndex]} factor={this.state.factor} rightIndex={this.rightIndex} leftIndex={this.leftIndex} currentIndex={this.state.currentIndex} planetsData={planetsData}/>
                }
                
            </div>  
        );
    }
}


export default Interface;