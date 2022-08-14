import React from 'react';

import Clock from './components/Clock';
import OptionsSession from './components/OptionsSession';
import Optionsbreak from './components/OptionsBreak';

const App = () => {

  return (
    <div className="h-screen w-screen bg-main-dark-bg flex justify-center items-center content-center">
      <div className='flex justify-between items-center content-center p-8 border-1 border-green-900'>
        <Optionsbreak />
        <Clock />
        <OptionsSession />
      </div>

    </div>
  );

}

export default App;
