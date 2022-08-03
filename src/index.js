import React from 'react';
import { createRoot } from 'react-dom/client';
import CubeInterface from './components/cube';

import './styles/decorator.css'

function Element() {
    return <div>
                <CubeInterface />
           </div>;
}


const root = createRoot(document.getElementById('root'));
root.render(<Element />);