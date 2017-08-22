import React, { Component } from 'react';
import SongBox from "./container/SongBox.jsx";
import './app.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
      <SongBox />
      </div>
    );
  }
}

export default App;