import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import './App.css'; 
import FriendsList from './Components/FriendsList';
import NavBar from './Components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then((result)=>{
      this.setState({friends: result.data})
    })
  }
  
  render() {
    return (
    <div className="App">
      <FriendsList friendsList={this.state.friends} />
      <Route path="/" component={NavBar} />
      <Route path="/friends" render={props => <FriendsList friendsList={this.state.friends} {...props} />} />
    </div>
    )
  }
}

export default App;
