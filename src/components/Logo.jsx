import React from 'react';

import './styles/react_eddf.css';
import logo from '../logo.svg';


const Logo = () => (
    <div id='logo' className='navmenu--logo navmenu--item' data-testid='logo_img'>
        <img id='logo_img' src={logo}  className='logo' alt='logo' />
    </div>
)

export default Logo
