import React from 'react'
import ReactSlider from 'react-slider'

import '../styles/slider.css';
import { useStateContext } from "../context/contextProvider";

const Options = () => {
    const { sessionLength, setSessionLength, breakLength, setBreakLength, setOptionsShow } = useStateContext()

    return (
        <div className='flex flex-col text-left text-white'>
            <label className='block' for="">Session Length: {sessionLength}:00</label>
            <ReactSlider
                className='h-11 w-72 border-2 border-red-700 rounded-3xl'
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={sessionLength}
                onChange={newValue => setSessionLength(newValue)}
                min={1}
                max={60}
            />
            <label className='block' for="">Break Length: {breakLength}:00</label>
            <ReactSlider
                className='h-11 w-72 border-2 border-green-700 rounded-3xl'
                thumbClassName={'thumb-green'}
                trackClassName={'track'}
                value={breakLength}
                onChange={newValue => setBreakLength(newValue)}
                min={1}
                max={10}
            />
            <button
                className='w-auto bg-slate-600 rounded-xl py-1 px-5 my-10 text-xl leading-9'
                onClick={() => setOptionsShow(false)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent text-gray-200 border-0 inline-block w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clipRule="evenodd" />
                </svg>
                Retour
            </button>

        </div>
    )
}

export default Options