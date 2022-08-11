import React, { Component } from 'react';
import Options from './components/Options';

class App extends Component {
  render() {
    return (
      <div className="h-screen w-screen bg-main-dark-bg flex justify-center items-center content-center">
        <div className='flex flex-col justify-center items-center content-center'>
          <h1 className='text-white text-6xl font-body'>25 + 5 Clock</h1>
          <Options titre="Break Lenght" />
        </div>

      </div>
    );
  }
}

export default App;
