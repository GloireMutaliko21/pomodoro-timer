import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useStateContext } from "../context/contextProvider";

const red = '#f54e4e'
// const green = '#4aecbc'

const Clock = () => {
    const { setOptionsShow } = useStateContext()
    const [isPaused, setIsPaused] = useState(true)



    return (
        <div className='flex flex-col items-center justify-center'>
            <CircularProgressbar value={68} text={'60%'} styles={buildStyles({ textColor: '#fff', pathColor: red, trailColor: 'rgba(255,255,255,.2)', })} />
            <div>
                {
                    isPaused ?
                        <button
                            onClick={() => {
                                setIsPaused(false)
                            }}
                            className='p-4'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent text-gray-200 border-0 inline-block w-16 h-16" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button> :
                        <button
                            onClick={() => {
                                setIsPaused(true)
                            }}
                            className='p-4'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent text-gray-200 border-0 inline-block w-16 h-16" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                }


            </div>
            <div>
                <button
                    className='w-auto bg-slate-600 rounded-xl py-3 px-5 text-2xl leading-9'
                    onClick={() => setOptionsShow(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="bg-transparent text-gray-200 border-0 inline-block w-16 h-16" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Options
                </button>
            </div>
        </div>
    )
}

export default Clock