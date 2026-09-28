import React from 'react';
import '../../styles/home-decorator.css';

class HomeDisplay extends React.Component {
    render() {
        return (
            <div className='home-display'>
                <div className='home-display-inner'>

                    <div class="hero">
                        <div class="block">
                            <text class="block-text">Muhammad Luthfi Azzahra Rammadhani</text>
                        </div>
                        <div class="plus"></div>
                        <div class="bracket tl"></div>
                        <h1>Game<br></br>Programmer</h1>
                    </div>

                </div>
            </div>
        );
    }
}

export default HomeDisplay;