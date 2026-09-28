import React from 'react';
import '../styles/main-decorator.css';
import HomeDisplay from '../components/home/home-display';


class Home extends React.Component {
    render() {
        return (
            <div className='container'>
                    <div className='content'>
                        <HomeDisplay />
                        
                    </div>
            </div>
        )
    }
}

export default Home;