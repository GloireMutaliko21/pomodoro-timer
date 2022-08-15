import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BsFillPatchMinusFill } from 'react-icons/bs'

import { useStateContext } from "../context/contextProvider";

const OptionsSession = () => {
    const { sessionLength, setSessionLength, isStart } = useStateContext()

    return (
        <div className='flex flex-col justify-between items-center text-left text-white'>

            <label className='block'>Session Length: {sessionLength}:00</label>
            <div className='text-emerald-700 border-0 text-3xl'>
                <button onClick={() => {
                    sessionLength > 5 ?
                        setSessionLength(sessionLength - 1) :
                        setSessionLength(sessionLength)
                }}
                    disabled={isStart}
                    className='mr-5 text-red-400'>
                    <BsFillPatchMinusFill />
                </button>
                <button
                    onClick={() => setSessionLength(sessionLength + 1)}
                    disabled={isStart}
                >
                    <BsFillPlusCircleFill />
                </button>
            </div>

        </div>
    )
}

export default OptionsSession