import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { createRoot } from 'react-dom/client';

//styles
import './styles/decorator.css'

//components
import CubeInterface from './components/cube';
import Navbar from './components/navbar';



//index.js will be used for routing purposes

function Element() {
    return <div>
                <Navbar />
           </div>;
}


const root = createRoot(document.getElementById('root'));
root.render(<Element />);