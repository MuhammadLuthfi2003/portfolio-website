import React from 'react';
import '../styles/navbar-deco.css';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        //function binding
        this.activateNav = this.activateNav.bind(this);

    }

    //function to activate nav when toggle button is clicked
    activateNav() {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        navbarLinks.classList.toggle('active');
    }

    render() {
        return (
            <nav className="navbar">
                <div className='navbar-logo'>Muhammad Luthfi Azzahra Rammadhani</div>
                <a href="!#" className='toggle-btn' onClick={this.activateNav}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className='navbar-links' >
                    <ul>
                        <li>
                            <a href='!#'>Home</a>
                        </li>
                        <li>
                            <a href='!#'>About</a>
                        </li>
                        <li>
                            <a href='!#'>Projects</a>
                        </li>
                        <li>
                            <a href='!#'>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;