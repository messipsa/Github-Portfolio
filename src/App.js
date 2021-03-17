import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Link from './components/Link/Link';
import Profile from './containers/Profile';

class App extends Component {
  render(){
  return (
    <div className="App">
     <Header logo={logo}/>
     <Profile />
    </div>
  );
  }
}

export default App;
