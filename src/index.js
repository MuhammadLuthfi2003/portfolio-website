import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom"

import { createRoot } from 'react-dom/client';

//styles
// import './styles/root-deco.css'

//components
import Navbar from './components/navbar';

//dirs
import Home from './dirs/home';

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

                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);