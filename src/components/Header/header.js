import React from 'react';
import logo from '../../git.png';
import './header.css';


const Header = () => (
    <header className='App-header'>
    <img src={logo} className='App_logo' alt='' />
    <h1>
        My Github portfolio
    </h1>
    
    </header>
    );
    export default Header;