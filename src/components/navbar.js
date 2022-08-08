import React from 'react';
import {
    Link
  } from "react-router-dom";

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
                <button className='toggle-btn' onClick={this.activateNav}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>
                <div className='navbar-links' >
                    <ul>
                        <li>
                            <Link to='/' className='navbar-links-dir'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='navbar-links-dir'>About</Link>
                        </li>
                        <li>
                            <Link to='/project' className='navbar-links-dir'>Projects</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='navbar-links-dir'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;