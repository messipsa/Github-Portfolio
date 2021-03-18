import React , {Component} from 'react';
import logo from './logo.svg';
import styled , { createGlobalStyle } from 'styled-components';
import Header from './components/Header/header';
import Link from './components/Link/Link';
import Profile from './containers/Profile';


const GlobalStyle = createGlobalStyle`
body{
  margin : 0;
  padding : 0;
  font-family : -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen",
   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
   sans-serif;
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
text-align : center;
`;

class App extends Component {
  render(){
  return (

    <>
    <GlobalStyle />
    <AppWrapper>
     <Header logo={logo}/>
     <Profile />
     </AppWrapper>
     
     </>
  );
  }
}

export default App;
