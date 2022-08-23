import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BsFillPatchMinusFill } from 'react-icons/bs'

import { useStateContext } from "../context/contextProvider";

const OptionsSession = () => {
    const { sessionLength, setSessionLength, isStart } = useStateContext()

    return (
        <div id='session-label' className='flex flex-col justify-between items-center text-left text-white'>

            <label id="session-length" className='block'> {sessionLength}</label>
            <div className='text-emerald-700 border-0 text-3xl'>
                <button onClick={() => {
                    sessionLength > 1 ?
                        setSessionLength(sessionLength - 1) :
                        setSessionLength(sessionLength)
                }}
                    disabled={isStart}
                    className='mr-5 text-red-400'
                    id='session-decrement'
                >
                    <BsFillPatchMinusFill />
                </button>
                <button
                    onClick={() => { sessionLength < 60 ? setSessionLength(sessionLength + 1) : setSessionLength(sessionLength) }}
                    disabled={isStart}
                    id="session-increment"
                >
                    <BsFillPlusCircleFill />
                </button>
            </div>

        </div>
    )
}

export default OptionsSession