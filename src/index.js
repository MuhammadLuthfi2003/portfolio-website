import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom"

import { createRoot } from 'react-dom/client';

//styles
import './styles/root-deco.css'

//components
import Navbar from './components/navbar';

//dirs
import Home from './dirs/home';
import About from './dirs/about';
import Projects from './dirs/projects';
import Contact from './dirs/contact';

//index.js will be used for routing purposes

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <div className='main-content'>
                        <Switch>
                            
                            <Route path='/' element={<Home />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/project' element={<Projects />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>

                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);