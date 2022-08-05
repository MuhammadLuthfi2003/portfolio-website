import React from 'react';
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { createRoot } from 'react-dom/client';

//styles
import './styles/main-decorator.css'

//components
import CubeInterface from './components/cube';
import Navbar from './components/navbar';
import VideoBG from './components/video';


//index.js will be used for routing purposes

class Element extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <VideoBG />
                <div className='content'>                  
                    <CubeInterface />
                </div>
            </div>
        )
    }
}


const root = createRoot(document.getElementById('root'));
root.render(<Element />);