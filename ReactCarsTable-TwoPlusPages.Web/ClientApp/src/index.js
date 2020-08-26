import Routes from './Routes';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
    , document.getElementById('root'));