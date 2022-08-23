import React from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { BsFillPatchMinusFill } from 'react-icons/bs'

import { useStateContext } from "../context/contextProvider";

const OptionsBreak = () => {
    const { breakLength, setBreakLength, isStart } = useStateContext()

    return (
        <div id='break-label' className='flex flex-col justify-between items-center text-left text-white'>
            <label id="break-length" className='block'> {breakLength}</label>
            <div className='text-emerald-700 border-0 text-3xl'>
                <button onClick={() => {
                    breakLength > 1 ?
                        setBreakLength(breakLength - 1) :
                        setBreakLength(breakLength)
                }}
                    className='mr-5 text-red-400'
                    disabled={isStart}
                    id='break-decrement'
                >
                    <BsFillPatchMinusFill />
                </button>
                <button
                    onClick={() => { breakLength < 60 ? setBreakLength(breakLength + 1) : setBreakLength(breakLength) }}
                    disabled={isStart}
                    id="break-increment"
                >
                    <BsFillPlusCircleFill />
                </button>
            </div>
        </div>
    )
}

export default OptionsBreak