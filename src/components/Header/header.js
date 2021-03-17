import React from 'react';
import './header.css';
import Link from '../Link/Link'

const Header = ({logo}) => (
    <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <p>
    Edit <code>src/App.js</code> and save to reload.
    </p>
    <Link url='https://reactjs.org' title="Learn React" />
    </header>
    );
    export default Header;