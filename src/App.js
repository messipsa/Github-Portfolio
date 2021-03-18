import React , {Component} from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import Header from './components/Header/header';
import Link from './components/Link/Link';
import Profile from './containers/Profile';

const AppWrapper = styled.div`
text-align : center;
`;

class App extends Component {
  render(){
  return (
    <AppWrapper>
     <Header logo={logo}/>
     <Profile />
     </AppWrapper>
  );
  }
}

export default App;
