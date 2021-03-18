import React from 'react';
import logo from '../../git.png';
import styled from 'styled-components'


const HeaderWrapper = styled.div`
background-color : #282c34;
height : 100%;
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
font-size : calc(10px+2vmin);
color : white;
`;

const Logo = styled.img`
height : 64px;
pointer-events : none;
`;

const Header = () => (
    <HeaderWrapper>
    <img src={logo} className='App_logo' alt='' />
    <h1>
        My Github portfolio
    </h1>
    
    </HeaderWrapper>
    );
    export default Header;