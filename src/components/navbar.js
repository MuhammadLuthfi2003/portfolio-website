import React from 'react';

import '../styles/navbar-deco.css';
import aboutArrow from '../images/icons/About Me Arrow.png';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { open: false };

        this.toggleNav = this.toggleNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    toggleNav() {
        this.setState((prev) => ({ open: !prev.open }));
    }

    // close the menu after tapping a link
    closeNav() {
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;

        return (
            <nav className="navbar">
                <div className='navbar-logo'>Muhammad Luthfi Azzahra Rammadhani</div>
                <button
                    className={`toggle-btn ${open ? 'open' : ''}`}
                    onClick={this.toggleNav}
                    aria-expanded={open}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>
                <div className={`navbar-links ${open ? 'active' : ''}`}>
                    <ul>
                        <li>
                            {/* <Link to='/' className='navbar-links-dir' onClick={this.closeNav}>Home</Link> */}
                            <a href='#home' className='navbar-links-dir' onClick={this.closeNav}>Home</a>
                        </li>
                        <li className="navbar-spacer">/</li>
                        <li>
                            <a href='#profile' className='navbar-links-dir' onClick={this.closeNav}>Profile</a>
                        </li>
                        <li className="navbar-spacer">/</li>
                        <li>
                            <a href='#experience' className='navbar-links-dir' onClick={this.closeNav}>Experience</a>
                        </li>
                        <li className="navbar-spacer">/</li>
                        <li>
                            <a href='#project' className='navbar-links-dir' onClick={this.closeNav}>Projects</a>
                        </li>
                        <li className="navbar-spacer">/</li>
                        <li className="navbar-contact">
                            <a href='#contact' className='navbar-contact-dir' onClick={this.closeNav}>Contact Me</a>
                            <img src={aboutArrow} className="navbar-arrow" alt="aboutArrow"></img>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;