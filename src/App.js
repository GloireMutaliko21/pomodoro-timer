import React, { Component } from 'react';
import OptionsBreak from './components/OptionsBreak';
import OptionsSession from './components/OptionsSession';

class App extends Component {
  render() {
    return (
      <div className="h-screen w-screen bg-main-dark-bg flex justify-center items-center content-center">
        <div className='bg-gray-400 flex flex-col justify-center items-center content-center p-8'>
          <h1 className='text-6xl font-body'>25 + 5 Clock</h1>
          <div className='flex justify-between mt-10 w-full'>
            <OptionsBreak titre="Break Lenght" />
            <OptionsSession titre="Session Lenght" />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
