import React from 'react';

import Clock from './components/Clock';
// import { useStateContext } from "../src/context/contextProvider";
import Options from './components/Options';

const App = () => {
  // const { isSessionTime, isBreakTime } = useStateContext()

  return (
    <div className="h-screen w-screen bg-main-dark-bg flex justify-center items-center content-center">
      <div className='flex flex-col justify-center items-center content-center p-8'>
        <Options />
        <Clock />
      </div>

    </div>
  );

}

export default App;
